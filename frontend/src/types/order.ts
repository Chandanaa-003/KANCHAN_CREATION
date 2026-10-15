export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'refunded'

export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded'

export interface OrderItem {
  id: string
  order_id: string
  product_id: string
  variant_id: string | null
  product_name: string
  variant_info: Record<string, unknown> | null
  price: number
  quantity: number
  subtotal: number
}

export interface Order {
  id: string
  order_number: string
  user_id: string | null
  email: string
  phone: string
  shipping_address: Record<string, unknown>
  subtotal: number
  shipping_charge: number
  discount_amount: number
  total_amount: number
  status: OrderStatus
  payment_status: PaymentStatus
  notes: string | null
  items: OrderItem[]
  created_at: string
  updated_at: string
}

export interface CreateOrderRequest {
  cart_id: string
  email: string
  phone: string
  shipping_address: {
    full_name: string
    phone: string
    line1: string
    line2?: string
    city: string
    state: string
    pincode: string
    country: string
  }
  notes?: string
  address_id?: string
}
