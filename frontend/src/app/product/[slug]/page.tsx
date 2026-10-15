interface ProductPageProps {
  params: { slug: string }
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="font-display text-3xl sm:text-4xl text-brand-charcoal mb-4">
        Product Details
      </h1>
      <p className="text-brand-gray-warm">
        Product detail page for <code className="font-mono text-sm">{params.slug}</code> — coming
        in Stage 3.
      </p>
    </div>
  )
}
