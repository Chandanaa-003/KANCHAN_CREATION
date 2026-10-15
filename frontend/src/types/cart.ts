export interface CartItem {
  id: string
  cart_id: string
  product_id: string
  variant_id: string | null
  quantity: number
  price_snapshot: number
  created_at: string
  updated_at: string
}

export interface Cart {
  id: string
  user_id: string | null
  session_id: string | null
  items: CartItem[]
  created_at: string
  updated_at: string
}

export interface AddToCartRequest {
  product_id: string
  variant_id?: string
  quantity: number
}
