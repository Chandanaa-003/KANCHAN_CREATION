'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const cartCount = 0 // Placeholder — will be wired to Zustand store in Stage 3

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-brand-ivory transition-shadow duration-300 ${
          scrolled ? 'shadow-md' : 'shadow-sm'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
          {/* Logo + brand name */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Kanchan Creation home">
            {/* KC monogram */}
            <div className="w-9 h-9 rounded-full bg-brand-cream flex items-center justify-center flex-shrink-0 border border-brand-rose group-hover:border-brand-burgundy transition-colors">
              <svg
                viewBox="0 0 36 36"
                width="22"
                height="22"
                aria-hidden="true"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <text
                  x="2"
                  y="26"
                  fontFamily="'Playfair Display', serif"
                  fontSize="18"
                  fontWeight="700"
                  fill="#6B1A2A"
                >
                  KC
                </text>
              </svg>
            </div>
            <span className="font-display text-sm sm:text-base tracking-widest text-brand-charcoal font-semibold uppercase hidden xs:inline-block">
              Kanchan Creation
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-brand-charcoal-light hover:text-brand-burgundy text-sm tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-burgundy group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Search products"
              className="text-brand-charcoal-light hover:text-brand-burgundy transition-colors"
            >
              <Search size={20} />
            </button>

            <Link
              href="/account"
              aria-label="My account"
              className="text-brand-charcoal-light hover:text-brand-burgundy transition-colors hidden sm:block"
            >
              <User size={20} />
            </Link>

            <Link
              href="/account/wishlist"
              aria-label="Wishlist"
              className="text-brand-charcoal-light hover:text-brand-burgundy transition-colors hidden sm:block"
            >
              <Heart size={20} />
            </Link>

            <Link
              href="/cart"
              aria-label={`Shopping cart, ${cartCount} items`}
              className="relative text-brand-charcoal-light hover:text-brand-burgundy transition-colors"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-brand-charcoal-light hover:text-brand-burgundy transition-colors ml-1"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          id="mobile-nav"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer */}
          <div className="absolute left-0 top-0 h-full w-72 bg-brand-ivory flex flex-col shadow-xl">
            <div className="flex items-center justify-between px-6 py-5 border-b border-brand-cream">
              <span className="font-display text-brand-charcoal font-semibold tracking-widest text-sm uppercase">
                Menu
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation menu"
                className="text-brand-charcoal-light hover:text-brand-burgundy transition-colors"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-col px-6 py-6 gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-brand-charcoal hover:text-brand-burgundy border-b border-brand-cream text-sm tracking-wide transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/account"
                onClick={() => setMobileOpen(false)}
                className="py-3 text-brand-charcoal hover:text-brand-burgundy border-b border-brand-cream text-sm tracking-wide transition-colors"
              >
                My Account
              </Link>
              <Link
                href="/account/wishlist"
                onClick={() => setMobileOpen(false)}
                className="py-3 text-brand-charcoal hover:text-brand-burgundy text-sm tracking-wide transition-colors"
              >
                Wishlist
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
