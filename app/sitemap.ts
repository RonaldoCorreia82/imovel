import type { MetadataRoute } from 'next'
import { BASE_URL } from '@/lib/base-url'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: '2026-06-01',
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ]
}
