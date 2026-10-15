# This file is used ONLY by Alembic for autogenerate.
# It imports Base and all models so Alembic can detect the full schema.

from app.db.base_class import Base  # noqa: F401
from app.models.user import User  # noqa: F401
from app.models.address import Address  # noqa: F401
from app.models.category import Category  # noqa: F401
from app.models.product import Product  # noqa: F401
from app.models.product_image import ProductImage  # noqa: F401
from app.models.product_variant import ProductVariant  # noqa: F401
from app.models.cart import Cart, CartItem  # noqa: F401
from app.models.wishlist import Wishlist, WishlistItem  # noqa: F401
from app.models.order import Order, OrderItem  # noqa: F401
from app.models.payment import Payment  # noqa: F401
