import { SectionHeading } from '@/components/ui/SectionHeading'
import { PropertyCard } from '@/components/ui/PropertyCard'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

const PROPERTIES = [
  {
    status: 'Exclusivo',
    location: 'Jardim Europa · São Paulo',
    title: 'Residência Horizonte',
    specs: [
      { label: 'Área', value: '820 m²' },
      { label: 'Suítes', value: '5' },
      { label: 'Vagas', value: '6' },
    ],
    price: 'R$ 18.500.000',
    priceNote: 'Venda',
    href: '#contato',
  },
  {
    status: 'Lançamento',
    location: 'Vila Nova Conceição · São Paulo',
    title: 'Cobertura Aurora',
    specs: [
      { label: 'Área', value: '540 m²' },
      { label: 'Suítes', value: '4' },
      { label: 'Vagas', value: '5' },
    ],
    price: 'R$ 12.900.000',
    priceNote: 'Venda',
    href: '#contato',
  },
  {
    status: 'Pé na areia',
    location: 'Riviera de São Lourenço · Bertioga',
    title: 'Casa Maresia',
    specs: [
      { label: 'Área', value: '1.100 m²' },
      { label: 'Suítes', value: '6' },
      { label: 'Vagas', value: '8' },
    ],
    price: 'R$ 24.000.000',
    priceNote: 'Venda',
    href: '#contato',
  },
]

export function FeaturedProperties() {
  return (
    <section className="au-section" id="imoveis" aria-label="Imóveis em destaque">
      <div className="au-container">
        <div className="au-featured__head">
          <SectionHeading
            eyebrow="Imóveis em destaque"
            title="Uma seleção que dispensa apresentações"
            lede="Cada propriedade é avaliada por arquitetura, localização e procedência antes de integrar o portfólio."
          />
          <Button
            href="#contato"
            variant="link"
            icon={<Icon name="arrow-right" size={15} />}
          >
            Ver portfólio completo
          </Button>
        </div>

        <div className="au-grid-3">
          {PROPERTIES.map((p, i) => (
            <PropertyCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
