from datetime import datetime
from typing import List
from uuid import UUID

from pydantic import BaseModel, ConfigDict


class WishlistItemResponse(BaseModel):
    id: UUID
    wishlist_id: UUID
    product_id: UUID
    added_at: datetime

    model_config = ConfigDict(from_attributes=True)


class WishlistResponse(BaseModel):
    id: UUID
    user_id: UUID
    items: List[WishlistItemResponse] = []

    model_config = ConfigDict(from_attributes=True)


class AddToWishlistRequest(BaseModel):
    product_id: UUID
