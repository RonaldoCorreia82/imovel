import type { Metadata } from 'next'
import './globals.css'

const BASE_URL = 'https://aurea.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Residencial Chapada | Casa de Luxo à Venda | Áurea Curadoria Imobiliária',
    template: '%s | Áurea Curadoria Imobiliária',
  },
  description:
    'Casa térrea de luxo com 330 m², 3 suítes, cozinha gourmet com ilha em quartzito, varanda coberta em cumaru e quintal exuberante. R$ 4.800.000. Exclusivo Áurea.',
  keywords: [
    'Residencial Chapada',
    'casa de luxo à venda',
    'imóvel alto padrão',
    'casa térrea 330m2',
    'arquitetura tropical contemporânea',
    '3 suítes cozinha gourmet',
    'varanda coberta cumaru',
    'Áurea curadoria imobiliária',
    'casa exclusiva venda São Paulo',
  ],
  alternates: {
    canonical: BASE_URL,
  },
  authors: [{ name: 'Áurea Curadoria Imobiliária' }],
  creator: 'Áurea Curadoria Imobiliária',
  publisher: 'Áurea Curadoria Imobiliária Ltda.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: BASE_URL,
    siteName: 'Áurea Curadoria Imobiliária',
    title: 'Residencial Chapada | Casa de Luxo com 330 m² e 3 Suítes',
    description:
      'Casa térrea com 330 m², 3 suítes, cozinha gourmet, varanda coberta em cumaru e quintal. Arquitetura tropical contemporânea. R$ 4.800.000.',
    images: [
      {
        url: '/fotos/fachada-residencial-chapada.webp',
        width: 1024,
        height: 559,
        alt: 'Fachada do Residencial Chapada — casa de alto padrão',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Residencial Chapada | Casa de Luxo com 330 m² e 3 Suítes',
    description:
      'Casa térrea com 330 m², 3 suítes, cozinha gourmet, varanda coberta e quintal. R$ 4.800.000.',
    images: ['/fotos/fachada-residencial-chapada.webp'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Schema.org — RealEstateAgent */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateAgent',
              name: 'Áurea Curadoria Imobiliária',
              description:
                'Curadoria de imóveis excepcionais em São Paulo e no litoral. Atendimento por hora marcada.',
              url: BASE_URL,
              telephone: '+55-11-3000-0000',
              email: 'contato@aurea.com.br',
              foundingDate: '2009',
              priceRange: 'R$R$R$R$',
              areaServed: [
                { '@type': 'City', name: 'São Paulo' },
                { '@type': 'City', name: 'Bertioga' },
              ],
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Rua Tabapuã, 540',
                addressLocality: 'Itaim Bibi',
                addressRegion: 'SP',
                addressCountry: 'BR',
              },
              sameAs: [
                'https://instagram.com/aureaimoveis',
                'https://linkedin.com/company/aureaimoveis',
              ],
            }),
          }}
        />
        {/* Schema.org — SingleFamilyResidence (Residencial Chapada) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SingleFamilyResidence',
              name: 'Residencial Chapada',
              description:
                'Residência térrea de alto padrão com arquitetura tropical contemporânea. 330 m², 3 suítes com banho, cozinha gourmet com ilha em quartzito, varanda coberta em ripas de cumaru, paisagismo tropical e quintal gramado.',
              url: BASE_URL,
              numberOfRooms: 10,
              numberOfBedrooms: 3,
              numberOfBathroomsTotal: 3,
              floorSize: {
                '@type': 'QuantitativeValue',
                value: 330,
                unitCode: 'MTK',
              },
              amenityFeature: [
                { '@type': 'LocationFeatureSpecification', name: 'Varanda coberta em cumaru', value: true },
                { '@type': 'LocationFeatureSpecification', name: 'Cozinha gourmet com ilha em quartzito', value: true },
                { '@type': 'LocationFeatureSpecification', name: 'Quintal gramado', value: true },
                { '@type': 'LocationFeatureSpecification', name: 'Garagem coberta para 2 veículos', value: true },
                { '@type': 'LocationFeatureSpecification', name: 'Paisagismo tropical com espécies nativas', value: true },
                { '@type': 'LocationFeatureSpecification', name: 'Suíte master com closet e chuveiro externo', value: true },
                { '@type': 'LocationFeatureSpecification', name: 'Caixilhos pretos de piso a teto', value: true },
                { '@type': 'LocationFeatureSpecification', name: 'Iluminação embutida em réguas de LED', value: true },
              ],
              image: [
                `${BASE_URL}/fotos/fachada-residencial-chapada.webp`,
                `${BASE_URL}/fotos/varanda-coberta-residencial-chapada.webp`,
                `${BASE_URL}/fotos/hall-entrada-residencial-chapada.webp`,
                `${BASE_URL}/fotos/banheiro-master-residencial-chapada.webp`,
                `${BASE_URL}/fotos/sala-cozinha-gourmet-residencial-chapada.webp`,
                `${BASE_URL}/fotos/suite-master-residencial-chapada.webp`,
                `${BASE_URL}/fotos/suite-dois-residencial-chapada.webp`,
                `${BASE_URL}/fotos/dormitorio-residencial-chapada.webp`,
                `${BASE_URL}/fotos/planta-baixa-residencial-chapada.webp`,
              ],
              offers: {
                '@type': 'Offer',
                price: 4800000,
                priceCurrency: 'BRL',
                availability: 'https://schema.org/InStock',
                seller: {
                  '@type': 'RealEstateAgent',
                  name: 'Áurea Curadoria Imobiliária',
                  url: BASE_URL,
                },
              },
            }),
          }}
        />
        {/* Schema.org — FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Qual é o valor de venda do Residencial Chapada?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'O Residencial Chapada está disponível por R$ 4.800.000,00, em venda exclusiva pela Áurea Curadoria Imobiliária. O imóvel aceita propostas e nossa equipe oferece consultoria especializada para estruturação financeira e, se necessário, suporte ao financiamento imobiliário.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Quantas suítes e banheiros possui o imóvel?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'O Residencial Chapada conta com 3 dormitórios — suíte master com banho privativo e closet, suíte 02 com banho integrado e terceiro dormitório com closet embutido — além de 1 banheiro social, totalizando 3 banheiros na residência.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Qual é a área total e a metragem construída?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'A residência possui 330 m² de área total construída, distribuídos em planta térrea de concepção aberta. O terreno contempla ampla área externa com varanda coberta de ripas de cumaru, jardim lateral e quintal gramado com acesso direto pela sala de estar.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'O imóvel possui espaço gourmet?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Sim. A cozinha gourmet com ilha central em quartzito é integrada à sala de jantar e à sala de estar em plano aberto. A varanda coberta por ripas de cumaru complementa o espaço, criando uma sequência fluida do ambiente interno ao externo, ideal para entretenimento.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Como posso agendar uma visita ao Residencial Chapada?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Para agendar uma visita exclusiva, entre em contato com a Áurea Curadoria Imobiliária pelo telefone +55 11 3000-0000, pelo e-mail contato@aurea.com.br ou preencha o formulário de contato nesta página. O atendimento é realizado por hora marcada, com total discrição.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Quais são os principais diferenciais construtivos e de acabamento?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Os destaques incluem teto de ripas de cumaru na varanda, paredes em pedra natural nas fachadas laterais, caixilhos pretos de piso a teto em todos os cômodos, piso de concreto polido e porcelanato, iluminação embutida em réguas de LED, banheiro master com chuveiro externo privativo e paisagismo tropical com espécies nativas.',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
