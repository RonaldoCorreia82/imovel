import { SectionHeading } from '@/components/ui/SectionHeading'
import { TestimonialCard } from '@/components/ui/TestimonialCard'

const QUOTES = [
  {
    quote:
      'Conduziram a venda da nossa cobertura com uma discrição impecável. Sentimos que cada detalhe estava sob controle.',
    name: 'Helena Vasconcelos',
    role: 'Cliente · Itaim Bibi',
  },
  {
    quote:
      'A curadoria fez toda a diferença. Não vimos dez imóveis — vimos os três certos, e compramos o primeiro.',
    name: 'Ricardo e Marina Salles',
    role: 'Clientes · Jardim Europa',
  },
]

export function Testimonials() {
  return (
    <section className="au-section" id="depoimentos" aria-label="Depoimentos de clientes">
      <div className="au-container">
        <SectionHeading
          eyebrow="Quem confia"
          title="A reputação que se constrói em silêncio"
          align="center"
        />
        <div className="au-testimonials__grid">
          {QUOTES.map((q, i) => (
            <TestimonialCard key={i} {...q} />
          ))}
        </div>
      </div>
    </section>
  )
}
