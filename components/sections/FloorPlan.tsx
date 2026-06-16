import Image from 'next/image'

const ROOMS = [
  { name: 'Suíte master', detail: 'com banho privativo e closet' },
  { name: 'Suíte 02', detail: 'com banho integrado' },
  { name: 'Dormitório 03', detail: 'com closet embutido' },
  { name: 'Sala de estar', detail: 'integrada à sala de jantar' },
  { name: 'Sala de jantar', detail: 'em plano aberto' },
  { name: 'Cozinha gourmet', detail: 'com ilha central em quartzito' },
  { name: 'Varanda coberta', detail: 'teto de ripas de cumaru' },
  { name: 'Banheiro social', detail: 'revestido em pedra natural' },
  { name: 'Área de serviço', detail: 'com acesso independente' },
  { name: 'Quintal gramado', detail: 'acesso pela sala de estar' },
]

export function FloorPlan() {
  return (
    <section className="au-section au-band" id="planta" aria-labelledby="floorplan-heading">
      <div className="au-container">
        <div className="prop-floorplan__head">
          <div>
            <span className="au-eyebrow">
              <span className="au-eyebrow__rule" />
              Planta baixa
            </span>
            <h2 id="floorplan-heading" className="au-h2" style={{ marginTop: 16 }}>
              Espaços que respiram
            </h2>
            <p className="au-p" style={{ marginTop: 16 }}>
              Planta térrea de concepção aberta projetada para integrar os ambientes sociais
              à varanda coberta e ao quintal, criando uma transição fluida entre o interior
              e o jardim tropical em todos os ambientes.
            </p>

            <h3 className="prop-floorplan__rooms-title">Ambientes</h3>
            <ul className="prop-floorplan__rooms">
              {ROOMS.map((r) => (
                <li key={r.name} className="prop-floorplan__room">
                  <span className="prop-floorplan__room-dot" aria-hidden="true" />
                  <span>
                    <strong>{r.name}</strong>
                    {' '}
                    <span className="prop-floorplan__room-detail">{r.detail}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="prop-floorplan__img-wrap">
            <Image
              src="/fotos/planta-baixa-residencial-chapada.webp"
              alt="Planta baixa do Residencial Chapada — distribuição dos 10 ambientes em planta térrea aberta"
              width={700}
              height={480}
              style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-md)' }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
