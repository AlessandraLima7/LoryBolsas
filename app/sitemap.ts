import type { MetadataRoute } from 'next'
import { products } from '@/lib/products'
import { site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      images: products.map((product) => `${site.url}${product.image}`),
    },
  ]
}
