const FEATURES = [
  {
    title: 'Vizinhança',
    text:
      'Bairro consolidado de alto padrão com calçamento diferenciado, arborização madura e baixíssima densidade de tráfego. O quarteirão é composto exclusivamente por residências unifamiliares, preservando silêncio e privacidade em todas as horas do dia.',
  },
  {
    title: 'Infraestrutura',
    text:
      'A menos de 10 minutos dos principais serviços: supermercados premium, farmácias 24h, academias de alto padrão e restaurantes de culinária contemporânea. Excelente oferta de escolas bilíngues e colégios tradicionais a menos de 5 minutos de carro.',
  },
  {
    title: 'Acessos',
    text:
      'Conexão ágil com as principais vias expressas sem atravessar áreas de congestionamento intenso. Endereço exato e detalhes de localização são fornecidos mediante agendamento de visita, preservando a privacidade dos atuais moradores.',
  },
]

export function PropertyLocation() {
  return (
    <section className="au-section prop-location" id="localizacao" aria-labelledby="location-heading">
      <div className="au-container">
        <span className="au-eyebrow">
          <span className="au-eyebrow__rule" />
          Localização
        </span>

        <h2 id="location-heading" className="au-h2" style={{ marginTop: 16, maxWidth: '22ch' }}>
          Endereço privilegiado,
          <br />
          entorno exuberante
        </h2>

        <p className="au-p" style={{ marginTop: 24, maxWidth: '60ch' }}>
          O Residencial Chapada está inserido em área residencial de alto padrão, com ruas
          arborizadas e movimento tranquilo. O entorno imediato combina privacidade e
          comodidade: acesso rápido a parques, colégios de referência, clínicas especializadas
          e centros gastronômicos sofisticados.
        </p>

        <div className="prop-location__grid">
          {FEATURES.map((f) => (
            <div key={f.title} className="prop-location__feature">
              <h3 className="prop-location__feature-title">{f.title}</h3>
              <p className="prop-location__feature-text">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
