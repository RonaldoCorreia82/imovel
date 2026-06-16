import { Wordmark } from '@/components/brand/Wordmark'

export function Philosophy() {
  return (
    <section className="au-section au-band" id="filosofia" aria-label="Nossa filosofia">
      <div className="au-container au-philosophy__grid">
        {/* Photo (placeholder until real imagery is provided) */}
        <div
          className="au-photo-frame"
          style={{ aspectRatio: '4 / 5', borderRadius: 'var(--radius-sm)' }}
          aria-hidden="true"
        >
          <div className="au-photo-frame__content">
            <span className="au-photo-frame__glyph">◈</span>
            <span className="au-photo-frame__label">Retrato editorial · arquitetura</span>
          </div>
        </div>

        {/* Editorial text block */}
        <div className="au-philosophy__text">
          <span className="au-eyebrow">
            <span className="au-eyebrow__rule" />
            Nossa filosofia
          </span>

          <h2 className="au-h2">
            Discrição, procedência
            <br />
            e um olhar editorial
          </h2>

          <p className="au-p">
            Acreditamos que um imóvel de exceção não se vende — se apresenta. Nosso trabalho
            começa muito antes do anúncio: na escolha criteriosa de cada propriedade e no
            entendimento profundo de quem irá habitá-la.
          </p>

          <p className="au-p">
            Conduzimos cada negociação com a reserva que o patrimônio dos nossos clientes exige,
            unindo a sensibilidade de uma revista de arquitetura ao rigor de uma assessoria
            de investimentos.
          </p>

          <div className="au-signature">
            <span className="au-signature__name">Beatriz Aurélio</span>
            <span className="au-signature__role">Fundadora · Áurea</span>
          </div>
        </div>
      </div>
    </section>
  )
}
