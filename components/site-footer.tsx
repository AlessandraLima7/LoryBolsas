import Image from 'next/image'
import Link from 'next/link'
import { Heart } from 'lucide-react'
import { WhatsappIcon, InstagramIcon } from '@/components/brand-icons'
import { site, whatsappLink } from '@/lib/site'

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Personalizados', href: '#personalizados' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Sobre nós', href: '#sobre' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-primary/10 bg-secondary/50">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/optimized/lory-logo-circle.webp"
                alt="Lory Bolsas Personalizadas"
                width={56}
                height={56}
                className="size-13 object-contain"
              />
              <span className="flex flex-col leading-tight">
                <span className="font-serif text-lg font-bold text-[#E94B87]">Lory</span>
                <span className="text-[0.62rem] font-semibold tracking-[0.16em] text-[#5A3844] uppercase">
                  Bolsas Personalizadas
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Bolsas e lembrancinhas feitas à mão, com carinho, para tornar seus momentos
              inesquecíveis.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold text-foreground">Navegação</h3>
            <ul className="mt-4 space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold text-foreground">Fale conosco</h3>
            <div className="mt-4 flex flex-col gap-3">
              <Link
                href={whatsappLink('Olá! Vim pelo site da Lory. 💕')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <WhatsappIcon className="size-4 text-whatsapp" />
                <span>WhatsApp: {site.whatsappFormatted}</span>
              </Link>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <InstagramIcon className="size-4 text-primary" />
                <span>@{site.instagram}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-primary/10 pt-6 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
          </p>
          <p className="inline-flex items-center gap-1">
            Feito com <Heart className="size-3.5 fill-primary text-primary" /> e muito carinho
          </p>
        </div>
      </div>
    </footer>
  )
}
