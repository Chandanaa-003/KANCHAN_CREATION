from datetime import datetime
from decimal import Decimal
from uuid import UUID

from pydantic import BaseModel, ConfigDict

from app.models.payment import PaymentGatewayStatus


class CreatePaymentRequest(BaseModel):
    order_id: UUID


class PaymentVerifyRequest(BaseModel):
    razorpay_order_id: str
    razorpay_payment_id: str
    razorpay_signature: str


class PaymentResponse(BaseModel):
    id: UUID
    order_id: UUID
    razorpay_order_id: str | None = None
    amount: Decimal
    currency: str
    status: PaymentGatewayStatus
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)
