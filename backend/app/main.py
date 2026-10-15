from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from app.core.config import settings
from app.api.v1.router import api_router
from app.utils.logger import logger

app = FastAPI(
    title="Kanchan Creation API",
    description="Backend API for Kanchan Creation e-commerce store",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

# CORS — only the configured frontend origin is allowed in production
app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.FRONTEND_URL],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount versioned API router
app.include_router(api_router, prefix="/api/v1")


@app.get("/health", tags=["health"])
async def health_check():
    """Application health check endpoint."""
    return {"status": "ok", "version": "1.0.0", "app": "Kanchan Creation API"}


@app.exception_handler(404)
async def not_found_handler(request: Request, exc):
    return JSONResponse(status_code=404, content={"detail": "Resource not found"})


@app.exception_handler(500)
async def server_error_handler(request: Request, exc):
    logger.error(f"Internal server error: {exc}")
    return JSONResponse(status_code=500, content={"detail": "Internal server error"})


@app.on_event("startup")
async def startup_event():
    logger.info("Kanchan Creation API started")
