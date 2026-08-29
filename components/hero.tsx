import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Gift, Award, Heart } from 'lucide-react'
import { WhatsappIcon } from '@/components/brand-icons'
import { whatsappLink } from '@/lib/site'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#FFFBF9] py-10 sm:py-12 md:py-14 lg:py-0 lg:min-h-[580px] xl:min-h-[640px] 2xl:min-h-[700px] flex items-center"
    >
      {/* ========================================================================= */}
      {/* BACKGROUND FLOATING ACCENTS (Hearts & Soft Glow)                          */}
      {/* ========================================================================= */}
      <div
        className="pointer-events-none absolute inset-0 -z-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Delicate floating background heart outlines */}
        <svg
          className="absolute inset-0 h-full w-full opacity-35"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            d="M 440 70 C 435 65, 425 65, 420 72 C 415 65, 405 65, 400 72 C 395 80, 410 92, 420 100 C 430 92, 445 80, 440 70 Z"
            fill="#F49DB4"
          />
          <path
            d="M 700 40 C 696 36, 688 36, 684 41 C 680 36, 672 36, 668 41 C 664 47, 676 57, 684 63 C 692 57, 704 47, 700 40 Z"
            fill="#F49DB4"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* SINGLE LARGE ORGANIC BUBBLE: Products integrated directly on pink scene   */}
      {/* ========================================================================= */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden h-full w-[60%] select-none lg:block xl:w-[62%] 2xl:w-[60%]">
        <Image
          src="/hero-products-organic-bubble.png"
          alt="Bolsas personalizadas artesanais Lory - Mochila borboleta Heloise 1 ano, lancheira Théo Hernandez 1 ano e estojo Antonella 1 aninho"
          fill
          priority
          unoptimized
          className="object-cover object-left"
          sizes="(min-width: 1024px) 62vw, 100vw"
        />

        {/* Floating Heart Badge on the scene: "Cada detalhe feito para emocionar!" */}
        <div className="absolute top-[38%] right-6 xl:right-10 flex items-center gap-2 rounded-2xl border border-pink-200/90 bg-white/95 px-4 py-2.5 shadow-[0_6px_20px_rgba(233,75,135,0.14)] backdrop-blur-md transition-transform duration-300 hover:scale-105">
          <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-pink-50 text-[#E94B87]">
            <Heart className="size-4 fill-pink-100 text-[#E94B87]" />
          </div>
          <div className="text-left leading-tight">
            <p className="text-[0.75rem] font-semibold text-[#2E141B]">Cada detalhe</p>
            <p className="text-[0.70rem] font-medium text-[#E94B87]">feito para emocionar!</p>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MAIN CONTAINER: Left Content Column (~38% width)                          */}
      {/* ========================================================================= */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid items-center lg:grid-cols-12">
          {/* --------------------------------------------------------------------- */}
          {/* LEFT COLUMN: Badge, Title, Subtitle, Dual CTAs & Social Proof (~38%)  */}
          {/* --------------------------------------------------------------------- */}
          <div className="text-center lg:col-span-5 lg:py-12 lg:text-left xl:col-span-5 xl:py-16">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-pink-200/90 bg-white/95 px-4 py-1.5 shadow-[0_2px_10px_rgba(233,75,135,0.06)] backdrop-blur-xs">
              <span className="text-sm select-none" aria-hidden="true">
                🎀
              </span>
              <span className="text-xs font-semibold tracking-wide text-[#5A3844]">
                Feito à mão com muito carinho
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="mt-5 font-serif text-3xl font-bold leading-[1.14] tracking-tight text-[#2E141B] sm:text-4xl md:text-5xl lg:text-[2.95rem] lg:leading-[1.12] xl:text-[3.45rem]">
              Seu momento
              <br />
              especial merece
              <br />
              uma bolsa feita
              <br />
              <span className="text-[#E94B87]">especialmente</span>
              <br />
              <span className="text-[#E94B87]">para você ♥</span>
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-[#5A4A52] sm:text-lg lg:mx-0">
              Bolsas personalizadas feitas com carinho para festas, presentes, lembranças e momentos
              inesquecíveis.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start">
              {/* Primary Button */}
              <Link
                href="#catalogo"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#E94B87] px-7 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(233,75,135,0.30)] transition-all duration-200 hover:bg-[#D43875] hover:shadow-[0_6px_22px_rgba(233,75,135,0.40)] hover:-translate-y-0.5 active:translate-y-0 sm:w-auto"
              >
                <span>Ver catálogo</span>
                <ArrowRight className="size-4" />
              </Link>

              {/* Secondary WhatsApp Button */}
              <Link
                href={whatsappLink('Olá! Vim pelo site da Lory e gostaria de fazer um pedido personalizado. 💕')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-full border-2 border-[#E94B87] bg-white px-7 text-sm font-semibold text-[#E94B87] shadow-xs transition-all duration-200 hover:bg-pink-50/80 hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 sm:w-auto"
              >
                <WhatsappIcon className="size-4.5" />
                <span>Pedir pelo WhatsApp</span>
              </Link>
            </div>

            {/* Social Proof Pill Card */}
            <div className="mt-7 inline-flex w-full max-w-md items-center justify-between rounded-2xl border border-pink-100 bg-white/95 px-5 py-3.5 shadow-[0_4px_20px_rgba(233,75,135,0.06)] backdrop-blur-xs sm:px-6">
              {/* Item 1 */}
              <div className="flex items-center gap-2.5">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-pink-50 text-[#E94B87]">
                  <Gift className="size-4.5" />
                </div>
                <div className="text-left leading-tight">
                  <p className="font-bold text-[#E94B87] text-sm">+500</p>
                  <p className="text-[0.72rem] text-[#6E5A62]">clientes felizes</p>
                </div>
              </div>

              {/* Separator */}
              <div className="h-7 w-px bg-pink-100" />

              {/* Item 2 */}
              <div className="flex items-center gap-2.5">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-pink-50 text-[#E94B87]">
                  <Award className="size-4.5" />
                </div>
                <div className="text-left leading-tight">
                  <p className="font-bold text-[#E94B87] text-sm">100%</p>
                  <p className="text-[0.72rem] text-[#6E5A62]">personalizado</p>
                </div>
              </div>

              {/* Separator */}
              <div className="h-7 w-px bg-pink-100" />

              {/* Item 3 */}
              <div className="flex items-center gap-2.5">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-pink-50 text-[#E94B87]">
                  <Heart className="size-4.5" />
                </div>
                <div className="text-left leading-tight">
                  <p className="font-bold text-[#E94B87] text-sm">Feito</p>
                  <p className="text-[0.72rem] text-[#6E5A62]">à mão</p>
                </div>
              </div>
            </div>

            {/* Mobile Product Image (Only visible below lg) */}
            <div className="mt-8 flex w-full justify-center lg:hidden">
              <Image
                src="/hero-products-organic-bubble.png"
                alt="Bolsas personalizadas artesanais Lory"
                width={2048}
                height={1434}
                priority
                unoptimized
                sizes="(min-width: 640px) 512px, 100vw"
                className="h-auto w-full max-w-lg rounded-2xl object-cover shadow-[0_8px_30px_rgba(233,75,135,0.10)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
