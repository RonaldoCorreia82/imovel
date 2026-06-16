import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

export function PropertyAbout() {
  return (
    <section className="au-section" id="sobre" aria-label="Sobre o imóvel">
      <div className="au-container prop-about__grid">
        {/* Editorial text */}
        <div className="prop-about__text">
          <span className="au-eyebrow">
            <span className="au-eyebrow__rule" />
            Sobre o imóvel
          </span>

          <h2 className="au-h2" style={{ marginTop: 16 }}>
            Natureza e design
            <br />
            em harmonia perfeita
          </h2>

          <p className="au-p" style={{ marginTop: 24 }}>
            O Residencial Chapada é uma residência térrea de alto padrão projetada
            para integrar o interior ao paisagismo exuberante. A fachada combina
            concreto aparente, pedra natural e estrutura de madeira maciça,
            criando uma identidade visual que respeita e dialoga com a vegetação tropical.
          </p>

          <p className="au-p" style={{ marginTop: 16 }}>
            Os ambientes sociais — sala de estar, sala de jantar e cozinha gourmet com
            ilha central — se abrem em plano único para a varanda coberta por teto de
            ripas de cumaru. A iluminação embutida em todas as áreas cria transições
            suaves entre o dia e a noite, mantendo o caráter acolhedor em qualquer hora.
          </p>

          <p className="au-p" style={{ marginTop: 16 }}>
            As três suítes foram concebidas como refúgios privados: cada uma com
            acesso visual ou direto ao jardim, caixilhos pretos de piso a teto e
            revestimentos em pedra e madeira que estabelecem uma continuidade
            sensorial com o exterior.
          </p>

          <div style={{ marginTop: 40, display: 'flex', alignItems: 'center', gap: 32 }}>
            <Button href="#contato" icon={<Icon name="arrow-right" size={15} />}>
              Agendar visita
            </Button>
            <div>
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'var(--fs-h3)',
                color: 'var(--text-primary)',
              }}>
                R$ 4.800.000
              </div>
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--fs-caption)',
                letterSpacing: 'var(--ls-wide)',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginTop: 4,
              }}>
                Venda · Exclusivo Áurea
              </div>
            </div>
          </div>
        </div>

        {/* Highlight list */}
        <div className="prop-about__highlights">
          <h3 className="prop-about__highlights-title">Diferenciais</h3>
          <ul className="prop-about__list">
            {[
              'Teto de ripas de cumaru na varanda e área externa',
              'Paredes em pedra natural nas fachadas laterais',
              'Caixilhos pretos de piso a teto em todos os ambientes',
              'Cozinha gourmet com ilha em quartzito',
              'Paisagismo tropical com espécies nativas',
              'Banheiro master com chuveiro externo privativo',
              'Iluminação embutida em réguas de LED',
              'Piso de concreto polido e porcelanato em toda a casa',
              'Hall de entrada com paredes ripadas e jardim interno',
              'Quintal gramado com acesso pela sala de estar',
            ].map((item) => (
              <li key={item} className="prop-about__list-item">
                <span className="prop-about__list-rule" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
