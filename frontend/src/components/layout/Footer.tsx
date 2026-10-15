import Link from 'next/link'
import { Instagram, Facebook, MessageCircle, MapPin, Phone, Mail } from 'lucide-react'

const SHOP_LINKS = [
  { href: '/shop', label: 'All Products' },
  { href: '/shop?category=kurtis', label: 'Kurtis' },
  { href: '/shop?category=salwar-suits', label: 'Salwar Suits' },
  { href: '/shop?category=lehengas', label: 'Lehengas' },
  { href: '/shop?category=new-arrivals', label: 'New Arrivals' },
]

const SERVICE_LINKS = [
  { href: '/account', label: 'My Account' },
  { href: '/account/orders', label: 'Order History' },
  { href: '/returns', label: 'Returns & Refunds' },
  { href: '/shipping-policy', label: 'Shipping Policy' },
]

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-ivory" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand column */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-full bg-brand-cream flex items-center justify-center flex-shrink-0">
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
            <span className="font-display tracking-widest text-sm font-semibold uppercase">
              Kanchan Creation
            </span>
          </div>
          <p className="text-sm text-brand-gray-warm leading-relaxed mb-6">
            Elegance in Every Thread. Premium Indian ethnic fashion from the heart of Davangere,
            Karnataka.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kanchan Creation on Instagram"
              className="text-brand-gray-warm hover:text-brand-gold transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kanchan Creation on Facebook"
              className="text-brand-gray-warm hover:text-brand-gold transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="text-brand-gray-warm hover:text-brand-gold transition-colors"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        {/* Shop column */}
        <div>
          <h3 className="font-display text-sm tracking-widest uppercase text-brand-gold mb-4">
            Shop
          </h3>
          <ul className="space-y-2.5">
            {SHOP_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-brand-gray-warm hover:text-brand-ivory transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Service column */}
        <div>
          <h3 className="font-display text-sm tracking-widest uppercase text-brand-gold mb-4">
            Customer Service
          </h3>
          <ul className="space-y-2.5">
            {SERVICE_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-brand-gray-warm hover:text-brand-ivory transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div>
          <h3 className="font-display text-sm tracking-widest uppercase text-brand-gold mb-4">
            Contact
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-brand-gray-warm">
              <MapPin size={16} className="flex-shrink-0 mt-0.5 text-brand-rose" aria-hidden="true" />
              <span>Davangere, Karnataka, India</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-brand-gray-warm">
              <Phone size={16} className="flex-shrink-0 text-brand-rose" aria-hidden="true" />
              <a
                href="tel:+91XXXXXXXXXX"
                className="hover:text-brand-ivory transition-colors"
              >
                +91 XXXXX XXXXX
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-brand-gray-warm">
              <Mail size={16} className="flex-shrink-0 text-brand-rose" aria-hidden="true" />
              <a
                href="mailto:info@kanchancreation.com"
                className="hover:text-brand-ivory transition-colors"
              >
                info@kanchancreation.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-1 text-sm text-brand-gold hover:text-brand-gold-light transition-colors"
              >
                <MessageCircle size={16} aria-hidden="true" />
                WhatsApp Us
              </a>
            </li>
          </ul>

          {/* Newsletter */}
          <div className="mt-6">
            <p className="text-xs text-brand-gray-warm mb-2 uppercase tracking-wide">
              Newsletter
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex"
              aria-label="Newsletter subscription"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="your@email.com"
                className="flex-1 bg-brand-charcoal-light text-brand-ivory text-sm px-3 py-2 border border-brand-charcoal-light focus:outline-none focus:border-brand-gold placeholder-brand-gray-warm"
              />
              <button
                type="submit"
                className="bg-brand-burgundy hover:bg-brand-burgundy-light text-brand-ivory text-xs font-semibold px-4 py-2 transition-colors uppercase tracking-wide"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-charcoal-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-brand-gray-warm">
          <p>© 2024 Kanchan Creation. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-brand-ivory transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-ivory transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
