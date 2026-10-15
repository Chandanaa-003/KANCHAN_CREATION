'use client'

import { useState, useCallback } from 'react'
import { api } from '@/lib/api'
import type { User, LoginRequest, RegisterRequest, AuthResponse } from '@/types/user'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const login = useCallback(async (_data: LoginRequest) => {
    // TODO Stage 2: implement login via POST /api/v1/auth/login
  }, [])

  const register = useCallback(async (_data: RegisterRequest) => {
    // TODO Stage 2: implement registration via POST /api/v1/auth/register
  }, [])

  const logout = useCallback(() => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('access_token')
    }
    setUser(null)
  }, [])

  return { user, loading, error, login, register, logout }
}
