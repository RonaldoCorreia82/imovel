const SPECS = [
  { value: '330 m²', label: 'Área total construída' },
  { value: '3', label: 'Dormitórios' },
  { value: '3', label: 'Banheiros' },
  { value: '2', label: 'Vagas cobertas' },
  { value: 'Casa', label: 'Tipo de imóvel' },
]

export function PropertySpecs() {
  return (
    <section className="au-stats prop-specs" aria-labelledby="specs-heading">
      <h2 id="specs-heading" className="sr-only">
        Ficha técnica do Residencial Chapada
      </h2>
      <div className="prop-specs__inner">
        {SPECS.map((s) => (
          <div key={s.label} className="prop-specs__item">
            <div className="au-stat-value">{s.value}</div>
            <div className="au-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
