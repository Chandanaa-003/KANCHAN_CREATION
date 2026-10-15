from datetime import datetime
from decimal import Decimal
from typing import List
from uuid import UUID

from pydantic import BaseModel, ConfigDict


class ProductImageResponse(BaseModel):
    id: UUID
    product_id: UUID
    image_url: str
    alt_text: str | None = None
    sort_order: int
    is_primary: bool

    model_config = ConfigDict(from_attributes=True)


class ProductVariantBase(BaseModel):
    size: str | None = None
    colour: str | None = None
    additional_price: Decimal = Decimal("0")
    stock_quantity: int = 0
    sku_suffix: str | None = None


class ProductVariantCreate(ProductVariantBase):
    pass


class ProductVariantResponse(ProductVariantBase):
    id: UUID
    product_id: UUID

    model_config = ConfigDict(from_attributes=True)


class ProductBase(BaseModel):
    name: str
    slug: str
    sku: str
    description: str | None = None
    category_id: UUID | None = None
    price: Decimal
    discount_price: Decimal | None = None
    fabric: str | None = None
    stock_quantity: int = 0
    is_active: bool = True
    is_featured: bool = False


class ProductCreate(ProductBase):
    pass


class ProductUpdate(BaseModel):
    name: str | None = None
    slug: str | None = None
    sku: str | None = None
    description: str | None = None
    category_id: UUID | None = None
    price: Decimal | None = None
    discount_price: Decimal | None = None
    fabric: str | None = None
    stock_quantity: int | None = None
    is_active: bool | None = None
    is_featured: bool | None = None


class ProductResponse(ProductBase):
    id: UUID
    created_at: datetime
    updated_at: datetime
    images: List[ProductImageResponse] = []
    variants: List[ProductVariantResponse] = []

    model_config = ConfigDict(from_attributes=True)


class ProductListResponse(BaseModel):
    id: UUID
    name: str
    slug: str
    price: Decimal
    discount_price: Decimal | None = None
    stock_quantity: int
    is_featured: bool
    images: List[ProductImageResponse] = []

    model_config = ConfigDict(from_attributes=True)
