import { Heart } from 'lucide-react'
import { WhatsappButton } from '@/components/whatsapp-button'

export function ContactCta() {
  return (
    <section id="contato" className="scroll-mt-20 px-4 py-16 md:px-6 md:py-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-primary px-6 py-14 text-center shadow-xl shadow-primary/25 md:px-12 md:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_120%_at_50%_-10%,rgba(255,255,255,0.28),transparent_60%)]"
        />
        <Heart className="mx-auto size-9 fill-primary-foreground text-primary-foreground" />
        <h2 className="mt-4 font-serif text-3xl font-bold text-balance text-primary-foreground md:text-4xl">
          Vamos criar algo especial juntas?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-pretty leading-relaxed text-primary-foreground/85">
          Chame a gente no WhatsApp e conte a sua ideia. Responderemos com todo o carinho para
          transformar o seu pedido em realidade.
        </p>
        <div className="mt-8 flex justify-center">
          <WhatsappButton
            size="lg"
            variant="outline"
            className="border-transparent bg-white text-primary hover:bg-white"
            message="Olá! Vim pelo site e quero fazer um pedido personalizado. 💕"
          >
            Fazer meu pedido agora
          </WhatsappButton>
        </div>
      </div>
    </section>
  )
}
