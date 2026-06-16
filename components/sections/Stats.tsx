const STATS = [
  { value: 'R$ 2,4 bi', label: 'Em negócios realizados' },
  { value: '15 anos', label: 'De mercado de alto padrão' },
  { value: '300+', label: 'Imóveis exclusivos no portfólio' },
]

export function Stats() {
  return (
    <section className="au-stats" aria-label="Números da Áurea">
      <div className="au-stats__inner">
        {STATS.map((s, i) => (
          <div key={i} className="au-stats__item">
            <div>
              <div className="au-stat-value">{s.value}</div>
              <div className="au-stat-label">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
