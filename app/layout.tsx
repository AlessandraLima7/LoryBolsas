import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Nunito } from 'next/font/google'
import { site } from '@/lib/site'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: {
    default: 'Lory Bolsas Personalizadas | Feitas com carinho para você',
    template: `%s | ${site.shortName}`,
  },
  description: `${site.description} Peça pelo WhatsApp.`,
  keywords: [
    'bolsas personalizadas',
    'bolsas artesanais',
    'necessaires personalizadas',
    'lembrancinhas personalizadas',
    'bolsas infantis',
    'Teresina',
    'Piauí',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: site.name,
    title: 'Lory Bolsas Personalizadas | Feitas com carinho para você',
    description: site.description,
    images: [
      {
        url: '/og/lory-bolsas-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Bolsas personalizadas artesanais da Lory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lory Bolsas Personalizadas',
    description: site.description,
    images: ['/og/lory-bolsas-og.jpg'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7c6dc',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${nunito.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
