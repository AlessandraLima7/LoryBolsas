import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Catalog } from '@/components/catalog'
import { Personalize } from '@/components/personalize'
import { HowItWorks } from '@/components/how-it-works'
import { About } from '@/components/about'
import { ContactCta } from '@/components/contact-cta'
import { SiteFooter } from '@/components/site-footer'
import { FloatingWhatsapp } from '@/components/floating-whatsapp'
import { products } from '@/lib/products'
import { site } from '@/lib/site'

export default function Page() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.name,
    description: site.description,
    url: site.url,
    email: site.email,
    telephone: `+${site.whatsappNumber}`,
    image: `${site.url}/og/lory-bolsas-og.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    sameAs: [site.instagramUrl],
    makesOffer: products.map((product) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Product',
        name: product.name,
        description: product.description,
        image: `${site.url}${product.image}`,
        category: product.category,
      },
    })),
  }

  return (
    <div className="flex min-h-dvh flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <Catalog />
        <Personalize />
        <HowItWorks />
        <About />
        <ContactCta />
      </main>
      <SiteFooter />
      <FloatingWhatsapp />
    </div>
  )
}
