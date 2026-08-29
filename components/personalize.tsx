import Image from 'next/image'
import { Palette, Type, Sparkles, Gift } from 'lucide-react'
import { WhatsappButton } from '@/components/whatsapp-button'

const features = [
  { icon: Type, title: 'Nome e idade', text: 'Adicione o nome, a idade ou uma frase especial.' },
  { icon: Palette, title: 'Cores e tema', text: 'Escolha as cores e o tema favorito da criança.' },
  { icon: Sparkles, title: 'Personagens', text: 'Do fundo do mar aos seus personagens preferidos.' },
  { icon: Gift, title: 'Para presentear', text: 'Perfeitas como lembrança ou presente único.' },
]

export function Personalize() {
  return (
    <section id="personalizados" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-10 overflow-hidden rounded-[2rem] border border-primary/10 bg-gradient-to-br from-accent/60 via-secondary/40 to-white p-6 shadow-sm md:p-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              100% personalizável
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-balance text-foreground md:text-4xl">
              Feita do seu jeitinho, para a sua ocasião
            </h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Nós criamos cada bolsa pensando em você. Conte o tema, as cores e a ideia — e nós
              transformamos em uma peça única, feita à mão com muito carinho.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f.title} className="flex gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <f.icon className="size-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{f.title}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <WhatsappButton
                size="lg"
                message="Olá! Quero criar uma bolsa personalizada. Pode me ajudar com as opções? 💕"
              >
                Criar minha bolsa personalizada
              </WhatsappButton>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white bg-white shadow-xl shadow-primary/10">
              <Image
                src="/products/mochila-cupcake.png"
                alt="Mochila infantil personalizada cupcake doces feita à mão"
                width={640}
                height={640}
                unoptimized
                sizes="(min-width: 1024px) 520px, 100vw"
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden w-40 overflow-hidden rounded-2xl border-4 border-background bg-white shadow-lg sm:block">
              <Image
                src="/products/maleta-20x17.png"
                alt="Maleta 20 x 17 personalizada"
                width={240}
                height={240}
                unoptimized
                sizes="160px"
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
