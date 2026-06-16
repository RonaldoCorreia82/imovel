import { NextResponse } from 'next/server'

const BASE = 'https://aurea.com.br'

const IMAGES = [
  {
    src: '/fotos/fachada-residencial-chapada.webp',
    title: 'Fachada principal — Residencial Chapada',
    caption: 'Fachada do Residencial Chapada com jardim tropical, concreto aparente e estrutura de madeira maciça',
  },
  {
    src: '/fotos/varanda-coberta-residencial-chapada.webp',
    title: 'Varanda coberta — Residencial Chapada',
    caption: 'Varanda coberta com teto de ripas de cumaru e mobiliário de madeira no Residencial Chapada',
  },
  {
    src: '/fotos/hall-entrada-residencial-chapada.webp',
    title: 'Hall de entrada — Residencial Chapada',
    caption: 'Hall de entrada com paredes ripadas, jardim interno e iluminação embutida',
  },
  {
    src: '/fotos/banheiro-master-residencial-chapada.webp',
    title: 'Banheiro master — Residencial Chapada',
    caption: 'Banheiro master em pedra natural com chuveiro externo privativo no Residencial Chapada',
  },
  {
    src: '/fotos/sala-cozinha-gourmet-residencial-chapada.webp',
    title: 'Sala e cozinha gourmet — Residencial Chapada',
    caption: 'Sala integrada à cozinha gourmet com ilha central em quartzito no Residencial Chapada',
  },
  {
    src: '/fotos/suite-master-residencial-chapada.webp',
    title: 'Suíte master — Residencial Chapada',
    caption: 'Suíte master com headboard em ripas de madeira e caixilhos pretos de piso a teto',
  },
  {
    src: '/fotos/suite-dois-residencial-chapada.webp',
    title: 'Segunda suíte — Residencial Chapada',
    caption: 'Segunda suíte com vista direta para o jardim tropical no Residencial Chapada',
  },
  {
    src: '/fotos/dormitorio-residencial-chapada.webp',
    title: 'Terceiro dormitório — Residencial Chapada',
    caption: 'Terceiro dormitório com closet integrado e acabamentos em madeira',
  },
  {
    src: '/fotos/planta-baixa-residencial-chapada.webp',
    title: 'Planta baixa — Residencial Chapada',
    caption: 'Planta baixa do Residencial Chapada — 10 ambientes em planta térrea de concepção aberta',
  },
]

export async function GET() {
  const imageEntries = IMAGES.map(
    (img) => `
    <image:image>
      <image:loc>${BASE}${img.src}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`
  ).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${BASE}/</loc>
    <lastmod>2026-06-01</lastmod>${imageEntries}
  </url>
</urlset>`

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  })
}
