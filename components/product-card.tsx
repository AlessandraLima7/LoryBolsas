import Image from 'next/image'
import { WhatsappButton } from '@/components/whatsapp-button'
import type { Product } from '@/lib/products'

export function ProductCard({ product }: { product: Product }) {
  const priceLabel =
    typeof product.price === 'number'
      ? product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
      : 'Consulte pelo WhatsApp'

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-primary/10 bg-card shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/10">
      <div className="relative aspect-[4/3.3] overflow-hidden bg-white">
        <Image
          src={product.image || '/placeholder.svg'}
          alt={product.imageAlt}
          width={500}
          height={412}
          sizes="(min-width: 1280px) 20vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-3.5 pt-3">
        <h3 className="font-serif text-sm font-semibold text-foreground leading-snug line-clamp-1">
          {product.name}
        </h3>
        <p className="mt-1 flex-1 text-[0.74rem] leading-relaxed text-muted-foreground line-clamp-2 min-h-[2.1rem]">
          {product.description}
        </p>

        <div className="mt-2.5 flex items-center justify-between gap-1.5 pt-2 border-t border-primary/5">
          <span className="text-[0.68rem] font-medium text-muted-foreground/80">
            {priceLabel}
          </span>
          <WhatsappButton
            size="sm"
            variant="green"
            className="h-7.5 px-2.5 text-[0.72rem] rounded-full"
            message={`Olá! Tenho interesse no produto "${product.name}". Poderia me passar mais informações e opções de personalização? 💕`}
          >
            Encomendar
          </WhatsappButton>
        </div>
      </div>
    </article>
  )
}
