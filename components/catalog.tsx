'use client'

import { useMemo, useState } from 'react'
import { cn } from '@/lib/utils'
import { categories, products, type CategoryId } from '@/lib/products'
import { ProductCard } from '@/components/product-card'
import { SectionHeading } from '@/components/section-heading'

type Filter = 'todos' | CategoryId

export function Catalog() {
  const [filter, setFilter] = useState<Filter>('todos')

  const filtered = useMemo(
    () => (filter === 'todos' ? products : products.filter((p) => p.category === filter)),
    [filter],
  )

  const filters: { id: Filter; label: string }[] = [
    { id: 'todos', label: 'Todos' },
    ...categories.map((c) => ({ id: c.id as Filter, label: c.label })),
  ]

  return (
    <section id="catalogo" className="scroll-mt-20 py-12 md:py-18">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Nosso catálogo"
          title="Escolha o seu favorito"
          description="Cada peça é feita à mão e pode ser totalmente personalizada com nome, tema e cores."
        />

        <div
          className="mt-7 flex flex-wrap justify-center gap-2"
          role="group"
          aria-label="Filtrar catálogo"
        >
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              aria-controls="catalog-products"
              onClick={() => setFilter(f.id)}
              className={cn(
                'rounded-full border px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40',
                filter === f.id
                  ? 'border-primary bg-primary text-primary-foreground shadow-sm shadow-primary/25'
                  : 'border-primary/15 bg-white text-foreground/70 hover:border-primary/40 hover:text-primary',
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <p className="sr-only" aria-live="polite">
          {filtered.length} produto{filtered.length === 1 ? '' : 's'} encontrado
          {filtered.length === 1 ? '' : 's'}.
        </p>

        <div
          id="catalog-products"
          className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5"
        >
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
