/**
 * Resolves the canonical base URL in order of preference:
 * 1. NEXT_PUBLIC_SITE_URL  — set manually in Vercel project settings (most reliable)
 * 2. VERCEL_PROJECT_PRODUCTION_URL — stable production URL injected by Vercel
 * 3. VERCEL_URL            — deployment-specific URL injected by Vercel (previews)
 * 4. localhost fallback for local development
 */
export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000')
