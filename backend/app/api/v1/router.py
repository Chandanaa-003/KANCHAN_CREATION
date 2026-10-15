from fastapi import APIRouter

api_router = APIRouter()


@api_router.get("/ping", tags=["health"])
async def ping():
    """Simple health check endpoint."""
    return {"ping": "pong"}
