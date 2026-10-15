from datetime import datetime
from decimal import Decimal
from typing import List
from uuid import UUID

from pydantic import BaseModel, ConfigDict


class CartItemBase(BaseModel):
    product_id: UUID
    variant_id: UUID | None = None
    quantity: int


class AddToCartRequest(CartItemBase):
    pass


class UpdateCartItemRequest(BaseModel):
    quantity: int


class CartItemResponse(BaseModel):
    id: UUID
    cart_id: UUID
    product_id: UUID
    variant_id: UUID | None = None
    quantity: int
    price_snapshot: Decimal
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)


class CartResponse(BaseModel):
    id: UUID
    user_id: UUID | None = None
    session_id: str | None = None
    items: List[CartItemResponse] = []
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)
