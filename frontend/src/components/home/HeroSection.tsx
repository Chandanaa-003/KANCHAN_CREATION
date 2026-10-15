import Link from 'next/link'

interface CtaButton {
  label: string
  href: string
  style: 'primary' | 'outlined'
}

interface HeroSectionProps {
  title: string
  subtitle: string
  primaryCta: CtaButton
  secondaryCta?: CtaButton
}

export function HeroSection({ title, subtitle, primaryCta, secondaryCta }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-burgundy via-brand-burgundy-dark to-brand-charcoal relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-gold blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-brand-rose blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-brand-gold font-display text-sm sm:text-base tracking-[0.3em] uppercase mb-6">
          Kanchan Creation
        </p>

        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-brand-ivory leading-tight mb-6">
          {title}
        </h1>

        <p className="text-brand-rose-muted text-base sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryCta.href}
            className="inline-block bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal font-semibold px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
          >
            {primaryCta.label}
          </Link>

          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-block border-2 border-brand-ivory text-brand-ivory hover:bg-brand-ivory hover:text-brand-burgundy font-semibold px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
