import { MessageCircle, Palette, Scissors, Gift } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const steps = [
  {
    icon: MessageCircle,
    title: 'Fale conosco',
    text: 'Chame no WhatsApp e conte a sua ideia, o tema e a ocasião.',
  },
  {
    icon: Palette,
    title: 'Personalize',
    text: 'Escolhemos juntos as cores, o nome e os detalhes da sua peça.',
  },
  {
    icon: Scissors,
    title: 'Produção artesanal',
    text: 'Costuramos e montamos tudo à mão, com muito capricho.',
  },
  {
    icon: Gift,
    title: 'Receba com carinho',
    text: 'Sua bolsa chega pronta para encantar e emocionar.',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-20 bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Como funciona"
          title="Do seu sonho até a sua porta"
          description="Um processo simples e cheio de carinho, do primeiro contato à entrega."
        />

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="relative flex flex-col items-center rounded-3xl border border-primary/10 bg-card p-6 text-center shadow-sm"
            >
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-primary-foreground">
                {i + 1}
              </span>
              <div className="mt-2 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <step.icon className="size-7" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
