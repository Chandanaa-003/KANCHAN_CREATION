async def get_health_status() -> dict:
    """Return basic application health information."""
    return {
        "status": "ok",
        "version": "1.0.0",
        "app": "Kanchan Creation API",
    }
