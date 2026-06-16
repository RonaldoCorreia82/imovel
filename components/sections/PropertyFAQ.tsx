'use client'

import { useState } from 'react'
import { Icon } from '@/components/ui/Icon'

const FAQ_ITEMS = [
  {
    q: 'Qual é o valor de venda do Residencial Chapada?',
    a: 'O Residencial Chapada está disponível por R$ 4.800.000,00, em venda exclusiva pela Áurea Curadoria Imobiliária. O imóvel aceita propostas e nossa equipe oferece consultoria especializada para estruturação financeira e, se necessário, suporte ao financiamento imobiliário.',
  },
  {
    q: 'Quantas suítes e banheiros possui o imóvel?',
    a: 'O Residencial Chapada conta com 3 dormitórios — suíte master com banho privativo e closet, suíte 02 com banho integrado e terceiro dormitório com closet embutido — além de 1 banheiro social, totalizando 3 banheiros na residência.',
  },
  {
    q: 'Qual é a área total e a metragem construída?',
    a: 'A residência possui 330 m² de área total construída, distribuídos em planta térrea de concepção aberta. O terreno contempla ampla área externa com varanda coberta de ripas de cumaru, jardim lateral e quintal gramado com acesso direto pela sala de estar.',
  },
  {
    q: 'O imóvel possui espaço gourmet?',
    a: 'Sim. A cozinha gourmet com ilha central em quartzito é integrada à sala de jantar e à sala de estar em plano aberto. A varanda coberta por ripas de cumaru complementa o espaço, criando uma sequência fluida do ambiente interno ao externo, ideal para entretenimento.',
  },
  {
    q: 'Como posso agendar uma visita ao Residencial Chapada?',
    a: 'Para agendar uma visita exclusiva, entre em contato com a Áurea Curadoria Imobiliária pelo telefone +55 11 3000-0000, pelo e-mail contato@aurea.com.br ou preencha o formulário de contato nesta página. O atendimento é realizado por hora marcada, com total discrição.',
  },
  {
    q: 'Quais são os principais diferenciais construtivos e de acabamento?',
    a: 'Os destaques incluem teto de ripas de cumaru na varanda, paredes em pedra natural nas fachadas laterais, caixilhos pretos de piso a teto em todos os cômodos, piso de concreto polido e porcelanato, iluminação embutida em réguas de LED, banheiro master com chuveiro externo privativo e paisagismo tropical com espécies nativas.',
  },
]

export function PropertyFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="au-section au-dark prop-faq" id="faq" aria-labelledby="faq-heading">
      <div className="au-container">
        <span className="au-eyebrow prop-faq__eyebrow">
          <span className="au-eyebrow__rule prop-faq__eyebrow-rule" />
          Informações
        </span>

        <h2 id="faq-heading" className="au-h2 prop-faq__title" style={{ marginTop: 16 }}>
          Perguntas frequentes
        </h2>

        <div className="prop-faq__list">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className="prop-faq__item">
                <button
                  className="prop-faq__trigger"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <h3 className="prop-faq__question">{item.q}</h3>
                  <span className={`prop-faq__icon${isOpen ? ' prop-faq__icon--open' : ''}`} aria-hidden="true">
                    <Icon name="arrow-down" size={18} />
                  </span>
                </button>

                <div
                  id={`faq-answer-${i}`}
                  className={`prop-faq__answer-wrap${isOpen ? ' prop-faq__answer-wrap--open' : ''}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                >
                  <p className="prop-faq__answer">{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
