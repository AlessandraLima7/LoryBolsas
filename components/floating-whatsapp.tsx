import Link from 'next/link'
import { WhatsappIcon } from '@/components/brand-icons'
import { whatsappLink } from '@/lib/site'

export function FloatingWhatsapp() {
  return (
    <Link
      href={whatsappLink('Olá! Vim pelo site da Lory e gostaria de fazer um pedido. 💕')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed right-4 bottom-4 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3.5 text-white shadow-xl shadow-whatsapp/30 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 md:right-6 md:bottom-6"
    >
      <span
        aria-hidden="true"
        className="absolute inline-flex size-full rounded-full bg-whatsapp opacity-20 motion-safe:animate-ping"
      />
      <WhatsappIcon className="relative size-6" />
      <span className="relative hidden text-sm font-semibold sm:inline">Peça pelo WhatsApp</span>
    </Link>
  )
}
