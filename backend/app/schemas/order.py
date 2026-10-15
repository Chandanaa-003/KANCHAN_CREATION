from datetime import datetime
from decimal import Decimal
from typing import Any, Dict, List
from uuid import UUID

from pydantic import BaseModel, ConfigDict

from app.models.order import OrderStatus, PaymentStatus


class ShippingAddressSchema(BaseModel):
    full_name: str
    phone: str
    line1: str
    line2: str | None = None
    city: str
    state: str
    pincode: str
    country: str = "India"


class OrderItemResponse(BaseModel):
    id: UUID
    product_id: UUID
    variant_id: UUID | None = None
    product_name: str
    variant_info: Dict[str, Any] | None = None
    price: Decimal
    quantity: int
    subtotal: Decimal

    model_config = ConfigDict(from_attributes=True)


class OrderBase(BaseModel):
    email: str
    phone: str
    shipping_address: ShippingAddressSchema
    notes: str | None = None


class CreateOrderRequest(OrderBase):
    cart_id: UUID
    address_id: UUID | None = None


class OrderResponse(OrderBase):
    id: UUID
    order_number: str
    user_id: UUID | None = None
    subtotal: Decimal
    shipping_charge: Decimal
    discount_amount: Decimal
    total_amount: Decimal
    status: OrderStatus
    payment_status: PaymentStatus
    items: List[OrderItemResponse] = []
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)


class OrderListResponse(BaseModel):
    id: UUID
    order_number: str
    total_amount: Decimal
    status: OrderStatus
    payment_status: PaymentStatus
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)


class UpdateOrderStatusRequest(BaseModel):
    status: OrderStatus
