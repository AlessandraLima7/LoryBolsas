import Image from 'next/image'
import { Heart, Scissors, Star } from 'lucide-react'
import { WhatsappButton } from '@/components/whatsapp-button'
import { InstagramIcon } from '@/components/brand-icons'
import { site } from '@/lib/site'

const badges = [
  { icon: Scissors, label: 'Produção artesanal' },
  { icon: Heart, label: 'Feito com amor' },
  { icon: Star, label: 'Clientes 5 estrelas' },
]

export function About() {
  return (
    <section id="sobre" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        {/* Left Column: Founder Photo in Round Mold / Frame */}
        <div className="relative mx-auto flex items-center justify-center">
          {/* Soft outer decorative glow / ring */}
          <div className="absolute -inset-2 -z-10 rounded-full bg-gradient-to-tr from-pink-200/60 via-pink-100/40 to-pink-300/60 blur-lg" />
          
          {/* Main Circular Frame */}
          <div className="relative size-72 overflow-hidden rounded-full border-4 border-white bg-pink-50 shadow-[0_12px_40px_rgba(233,75,135,0.18)] sm:size-80 md:size-88 lg:size-96">
            <Image
              src="/about-founder.png"
              alt="Fundadora da Lory Bolsas Personalizadas"
              width={1024}
              height={1024}
              unoptimized
              sizes="(min-width: 1024px) 384px, (min-width: 768px) 352px, 288px"
              className="size-full object-cover object-[center_22%] transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Sobre nós
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-balance text-foreground md:text-4xl">
            Um ateliê que costura carinho em cada detalhe
          </h2>
          <div className="mt-4 space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              A <strong className="text-foreground">Lory Bolsas Personalizadas</strong> nasceu do
              amor por criar peças únicas. Cada bolsa, nécessaire e lembrancinha é confeccionada à
              mão, pensada para tornar seus momentos ainda mais especiais.
            </p>
            <p>
              Trabalhamos com dedicação para transformar temas, cores e nomes em produtos que
              encantam crianças e adultos — perfeitos para festas, presentes e recordações que
              ficam para sempre.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-white px-3 py-1.5 text-sm font-medium text-foreground/80"
              >
                <b.icon className="size-4 text-primary" />
                {b.label}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsappButton message="Olá! Gostaria de conhecer melhor o trabalho da Lory. 💕">
              Fazer um pedido
            </WhatsappButton>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-primary/25 bg-white px-6 text-[0.95rem] font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary/5"
            >
              <InstagramIcon className="size-5" />
              @{site.instagram}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
