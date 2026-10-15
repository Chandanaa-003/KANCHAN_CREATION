import enum
import uuid
from sqlalchemy import DateTime, Enum, ForeignKey, JSON, Numeric, String
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship, mapped_column, Mapped
from sqlalchemy.sql import func

from app.db.base_class import Base


class PaymentGatewayStatus(str, enum.Enum):
    created = "created"
    captured = "captured"
    failed = "failed"
    refunded = "refunded"


class Payment(Base):
    __tablename__ = "payments"

    id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), primary_key=True, default=uuid.uuid4
    )
    order_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("orders.id", ondelete="RESTRICT"),
        unique=True,
        nullable=False,
    )
    razorpay_order_id: Mapped[str | None] = mapped_column(
        String, unique=True, nullable=True
    )
    razorpay_payment_id: Mapped[str | None] = mapped_column(
        String, unique=True, nullable=True
    )
    razorpay_signature: Mapped[str | None] = mapped_column(String, nullable=True)
    amount = mapped_column(Numeric(10, 2), nullable=False)
    currency: Mapped[str] = mapped_column(String, default="INR")
    status = mapped_column(
        Enum(PaymentGatewayStatus),
        default=PaymentGatewayStatus.created,
        nullable=False,
    )
    gateway_response = mapped_column(JSON, nullable=True)
    created_at = mapped_column(
        DateTime(timezone=True), server_default=func.now(), nullable=False
    )
    updated_at = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
        nullable=False,
    )

    # Relationships
    order = relationship("Order", back_populates="payment")
