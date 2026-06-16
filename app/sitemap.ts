import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://aurea.com.br',
      lastModified: '2026-06-01',
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ]
}
