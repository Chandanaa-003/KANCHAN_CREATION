export interface ProductImage {
  id: string
  product_id: string
  image_url: string
  alt_text: string | null
  sort_order: number
  is_primary: boolean
}

export interface ProductVariant {
  id: string
  product_id: string
  size: string | null
  colour: string | null
  additional_price: number
  stock_quantity: number
  sku_suffix: string | null
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string | null
  image_url: string | null
  is_active: boolean
  sort_order: number
}

export interface Product {
  id: string
  name: string
  slug: string
  sku: string
  description: string | null
  category_id: string
  category?: Category
  price: number
  discount_price: number | null
  fabric: string | null
  stock_quantity: number
  is_active: boolean
  is_featured: boolean
  images: ProductImage[]
  variants: ProductVariant[]
  created_at: string
  updated_at: string
}

export interface PaginatedProducts {
  items: Product[]
  total: number
  page: number
  size: number
  pages: number
}
