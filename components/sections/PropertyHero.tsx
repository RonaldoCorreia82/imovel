import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

const PILLS = ['330 m²', '3 Suítes', 'Varanda Coberta', 'Cozinha Gourmet', 'Quintal']

export function PropertyHero() {
  return (
    <section className="au-hero prop-hero" id="top" aria-label="Residencial Chapada">
      <div className="au-hero__media">
        <Image
          src="/fotos/fachada-residencial-chapada.webp"
          alt="Fachada principal do Residencial Chapada — casa térrea de alto padrão com jardim tropical"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
        />
        <div className="au-hero__scrim" aria-hidden="true" />
      </div>

      <div className="au-hero__content">
        <span className="au-hero__eyebrow">
          <span className="au-rule" aria-hidden="true" />
          Curadoria exclusiva · Imóvel residencial
        </span>

        <h1 className="prop-hero__name">
          Residencial
          <br />
          <em>Chapada</em>
        </h1>

        <p className="au-hero__lede">
          Arquitetura tropical contemporânea onde a natureza exuberante
          dialoga com a precisão do design de interiores. 330 m² de
          refinamento em planta térrea de concepção aberta.
        </p>

        <div className="prop-hero__pills" aria-label="Características principais">
          {PILLS.map((p) => (
            <span key={p} className="prop-hero__pill">{p}</span>
          ))}
        </div>

        <div className="au-hero__actions">
          <Button href="#fotos" onDark icon={<Icon name="arrow-down" size={16} />}>
            Ver galeria
          </Button>
          <Button href="#contato" variant="outline" onDark>
            Agendar visita
          </Button>
        </div>
      </div>

      <a href="#fotos" className="au-hero__scroll" aria-label="Ver galeria de fotos">
        <span>Explorar</span>
        <Icon name="arrow-down" size={16} />
      </a>
    </section>
  )
}
