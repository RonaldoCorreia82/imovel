import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

interface HeroProps {
  imageSrc?: string
}

export function Hero({ imageSrc }: HeroProps) {
  return (
    <section className="au-hero" id="top" aria-label="Apresentação">
      {/* Background media */}
      <div className="au-hero__media">
        {imageSrc ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={imageSrc}
            alt="Residência de alto padrão"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          /* Elegant graphite placeholder until real photography is provided */
          <div className="au-hero__placeholder">
            <span className="au-hero__ph-glyph">◈</span>
            <span className="au-hero__ph-label">
              Fotografia cinematográfica · imóvel de alto padrão
            </span>
          </div>
        )}
        <div className="au-hero__scrim" aria-hidden="true" />
      </div>

      {/* Hero copy — lower-left per design spec */}
      <div className="au-hero__content au-reveal">
        <span className="au-hero__eyebrow">
          <span className="au-rule" aria-hidden="true" />
          Curadoria imobiliária · São Paulo
        </span>

        <h1 className="au-hero__title">
          O endereço é apenas
          <br />
          o começo do <em>extraordinário</em>
        </h1>

        <p className="au-hero__lede">
          Residências e coberturas selecionadas para quem reconhece,
          no espaço, uma forma de patrimônio.
        </p>

        <div className="au-hero__actions">
          <Button
            href="#imoveis"
            onDark
            icon={<Icon name="arrow-right" size={16} />}
          >
            Ver portfólio
          </Button>
          <Button href="#contato" variant="outline" onDark>
            Fale com um consultor
          </Button>
        </div>
      </div>

      {/* Scroll cue */}
      <a href="#imoveis" className="au-hero__scroll" aria-label="Rolar para imóveis">
        <span>Explore</span>
        <Icon name="arrow-down" size={16} />
      </a>
    </section>
  )
}
