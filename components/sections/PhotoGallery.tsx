'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Icon } from '@/components/ui/Icon'

const PHOTOS = [
  {
    src: '/fotos/varanda-coberta-residencial-chapada.webp',
    alt: 'Varanda coberta com teto de ripas de cumaru e mobiliário de madeira — Residencial Chapada',
    wide: true,
  },
  {
    src: '/fotos/hall-entrada-residencial-chapada.webp',
    alt: 'Hall de entrada com paredes ripadas, jardim interno e iluminação embutida — Residencial Chapada',
    wide: false,
  },
  {
    src: '/fotos/banheiro-master-residencial-chapada.webp',
    alt: 'Banheiro master em pedra natural com chuveiro externo privativo — Residencial Chapada',
    wide: false,
  },
  {
    src: '/fotos/sala-cozinha-gourmet-residencial-chapada.webp',
    alt: 'Sala integrada à cozinha gourmet com ilha em quartzito — Residencial Chapada',
    wide: true,
  },
  {
    src: '/fotos/suite-master-residencial-chapada.webp',
    alt: 'Suíte master com headboard em ripas de madeira e caixilhos pretos de piso a teto — Residencial Chapada',
    wide: false,
  },
  {
    src: '/fotos/suite-dois-residencial-chapada.webp',
    alt: 'Segunda suíte com vista direta para o jardim tropical — Residencial Chapada',
    wide: false,
  },
  {
    src: '/fotos/dormitorio-residencial-chapada.webp',
    alt: 'Terceiro dormitório com closet integrado e acabamentos em madeira — Residencial Chapada',
    wide: false,
  },
]

const N = PHOTOS.length

export function PhotoGallery() {
  const [active, setActive] = useState<number | null>(null)

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowLeft') setActive(i => i !== null ? (i - 1 + N) % N : null)
      if (e.key === 'ArrowRight') setActive(i => i !== null ? (i + 1) % N : null)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <>
      {/* ── Gallery section ── */}
      <section id="fotos" aria-labelledby="gallery-heading">
        <div className="au-container au-section-tight">
          <span className="au-eyebrow">
            <span className="au-eyebrow__rule" />
            Galeria de fotos
          </span>
          <h2 id="gallery-heading" className="au-h2" style={{ marginTop: 16, maxWidth: '18ch' }}>
            Cada ângulo, uma descoberta
          </h2>
          <p className="au-p" style={{ marginTop: 16, maxWidth: '58ch' }}>
            Nove ambientes fotografados para revelar como a luz natural e os materiais nobres —
            pedra, cumaru, quartzito e concreto polido — constroem uma experiência sensorial única
            ao longo de todo o dia.
          </p>
        </div>

        <div className="prop-gallery__grid" role="list" aria-label="Fotos do Residencial Chapada">
          {PHOTOS.map((photo, i) => (
            <div
              key={i}
              role="button"
              tabIndex={0}
              aria-label={`Ampliar: ${photo.alt}`}
              className={`prop-gallery__item prop-gallery__item--clickable${photo.wide ? ' prop-gallery__item--wide' : ''}`}
              onClick={() => setActive(i)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setActive(i)
                }
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={photo.wide ? '(max-width: 640px) 100vw, 66vw' : '(max-width: 640px) 100vw, 33vw'}
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
              {/* hover zoom indicator */}
              <span className="prop-gallery__hover-veil" aria-hidden="true">
                <span className="prop-gallery__zoom-circle">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                    <path d="M11 8v6M8 11h6" />
                  </svg>
                </span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Lightbox ── */}
      {active !== null && (
        <div
          className="prop-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Visualizar foto ampliada"
          onClick={() => setActive(null)}
        >
          {/* Close */}
          <button
            className="prop-lightbox__close"
            onClick={() => setActive(null)}
            aria-label="Fechar"
          >
            <Icon name="x" size={20} />
          </button>

          {/* Counter */}
          <p className="prop-lightbox__counter" aria-live="polite">
            {active + 1} / {N}
          </p>

          {/* Prev */}
          <button
            className="prop-lightbox__nav prop-lightbox__prev"
            onClick={(e) => { e.stopPropagation(); setActive(i => i !== null ? (i - 1 + N) % N : null) }}
            aria-label="Foto anterior"
          >
            <Icon name="arrow-right" size={18} style={{ transform: 'rotate(180deg)' }} />
          </button>

          {/* Image — stopPropagation so clicking on the image doesn't close */}
          <div className="prop-lightbox__img-wrap" onClick={(e) => e.stopPropagation()}>
            <Image
              key={active}
              src={PHOTOS[active].src}
              alt={PHOTOS[active].alt}
              fill
              style={{ objectFit: 'contain' }}
              sizes="100vw"
              priority
            />
          </div>

          {/* Next */}
          <button
            className="prop-lightbox__nav prop-lightbox__next"
            onClick={(e) => { e.stopPropagation(); setActive(i => i !== null ? (i + 1) % N : null) }}
            aria-label="Próxima foto"
          >
            <Icon name="arrow-right" size={18} />
          </button>
        </div>
      )}
    </>
  )
}
