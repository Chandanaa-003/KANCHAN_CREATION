import Link from 'next/link'

const CATEGORIES = [
  { name: 'Kurtis', slug: 'kurtis', color: 'bg-rose-100' },
  { name: 'Salwar Suits', slug: 'salwar-suits', color: 'bg-amber-100' },
  { name: 'Anarkali Suits', slug: 'anarkali-suits', color: 'bg-orange-100' },
  { name: 'Designer Suits', slug: 'designer-suits', color: 'bg-pink-100' },
  { name: 'Lehengas', slug: 'lehengas', color: 'bg-purple-100' },
  { name: 'Dress Materials', slug: 'dress-materials', color: 'bg-teal-100' },
  { name: 'Dupattas', slug: 'dupattas', color: 'bg-indigo-100' },
  { name: 'New Arrivals', slug: 'new-arrivals', color: 'bg-yellow-100' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-burgundy via-brand-burgundy-dark to-brand-charcoal relative overflow-hidden">
        {/* Subtle decorative overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-gold blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-brand-rose blur-3xl" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-brand-gold font-display text-sm sm:text-base tracking-[0.3em] uppercase mb-6">
            Kanchan Creation
          </p>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-brand-ivory leading-tight mb-6">
            Elegance in Every Thread
          </h1>
          <p className="text-brand-rose-muted text-base sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Discover exquisite Indian ethnic fashion — crafted with love in Davangere
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="inline-block bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal font-semibold px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
            >
              Shop Now
            </Link>
            <Link
              href="/shop"
              className="inline-block border-2 border-brand-ivory text-brand-ivory hover:bg-brand-ivory hover:text-brand-burgundy font-semibold px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300"
            >
              Explore Collections
            </Link>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 px-4 bg-brand-ivory">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl text-brand-charcoal text-center mb-3">
            Shop by Category
          </h2>
          <p className="text-brand-gray-warm text-center mb-10">
            Explore our curated collections of Indian ethnic wear
          </p>

          {/* Mobile: horizontal scroll; Desktop: 4-col grid */}
          <div className="flex gap-4 overflow-x-auto pb-4 sm:pb-0 sm:grid sm:grid-cols-4 sm:gap-6 snap-x snap-mandatory sm:snap-none">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/shop?category=${cat.slug}`}
                className="flex-shrink-0 w-40 sm:w-auto group snap-start"
              >
                <div
                  className={`${cat.color} aspect-square rounded-sm flex items-end p-4 relative overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-sm`}
                >
                  <div className="absolute inset-0 bg-brand-charcoal opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <span className="relative z-10 font-display text-brand-charcoal font-semibold text-sm leading-tight">
                    {cat.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 px-4 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-display text-3xl sm:text-4xl text-brand-charcoal">New Arrivals</h2>
            <Link
              href="/shop?sort=newest"
              className="text-brand-burgundy hover:text-brand-burgundy-dark text-sm font-medium underline underline-offset-4 transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="flex items-center justify-center py-16 border border-dashed border-brand-rose rounded-sm">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-ivory flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-brand-rose"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10"
                  />
                </svg>
              </div>
              <p className="font-display text-brand-charcoal text-lg mb-1">Products coming soon</p>
              <p className="text-brand-gray-warm text-sm">
                New arrivals will appear here once added by the store owner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 px-4 bg-brand-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-display text-3xl sm:text-4xl text-brand-charcoal">Best Sellers</h2>
            <Link
              href="/shop?sort=popular"
              className="text-brand-burgundy hover:text-brand-burgundy-dark text-sm font-medium underline underline-offset-4 transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="flex items-center justify-center py-16 border border-dashed border-brand-rose rounded-sm">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-cream flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-brand-rose"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <p className="font-display text-brand-charcoal text-lg mb-1">Products coming soon</p>
              <p className="text-brand-gray-warm text-sm">
                Best sellers will appear here once products are added.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="bg-brand-burgundy py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <p className="text-brand-ivory font-display text-lg">
            Visit our store in Davangere
          </p>
          <span className="hidden sm:block text-brand-rose">|</span>
          <p className="text-brand-gold font-medium">
            Call us: +91 XXXXX XXXXX
          </p>
        </div>
      </section>
    </>
  )
}
