import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { CartItem, AddToCartRequest } from '@/types/cart'

interface CartStore {
  items: CartItem[]
  total: number
  itemCount: number
  addItem: (item: AddToCartRequest) => void
  removeItem: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      itemCount: 0,

      addItem: (_item: AddToCartRequest) => {
        // TODO Stage 3: call POST /api/v1/cart/items and update local state
      },

      removeItem: (itemId: string) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== itemId),
        })),

      updateQuantity: (_itemId: string, _quantity: number) => {
        // TODO Stage 3: call PATCH /api/v1/cart/items/:id and update local state
      },

      clearCart: () => set({ items: [], total: 0, itemCount: 0 }),
    }),
    { name: 'kanchan-cart' }
  )
)
