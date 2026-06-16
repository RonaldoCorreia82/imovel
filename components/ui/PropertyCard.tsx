'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Spec {
  label: string
  value: string
}

interface PropertyCardProps {
  image?: string
  status?: string
  location: string
  title: string
  specs?: Spec[]
  price: string
  priceNote?: string
  href?: string
}

export function PropertyCard({
  image,
  status,
  location,
  title,
  specs = [],
  price,
  priceNote,
  href = '#',
}: PropertyCardProps) {
  const [hover, setHover] = useState(false)

  return (
    <a
      href={href}
      className="au-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        transform: hover ? 'translateY(-6px)' : 'none',
        boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-xs)',
        borderColor: hover ? 'var(--border-strong)' : 'var(--border)',
      }}
    >
      {/* Photo */}
      <div className="au-card__media">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 900px) 100vw, 33vw"
            className="au-card__photo"
            style={{ transform: hover ? 'scale(1.04)' : 'scale(1)' }}
            loading="lazy"
          />
        ) : (
          <div className="au-card__placeholder">
            <span className="au-card__ph-glyph">◈</span>
            <span className="au-card__ph-label">Imóvel em destaque</span>
          </div>
        )}
        {status && <span className="au-card__tag">{status}</span>}
      </div>

      {/* Body */}
      <div className="au-card__body">
        {location && <span className="au-card__location">{location}</span>}
        <h3 className="au-card__title">{title}</h3>

        {specs.length > 0 && (
          <div className="au-card__specs">
            {specs.map((s, i) => (
              <div key={i}>
                <div className="au-card__spec-value">{s.value}</div>
                <div className="au-card__spec-label">{s.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="au-card__footer">
          <span className="au-card__price">{price}</span>
          {priceNote && <span className="au-card__price-note">{priceNote}</span>}
        </div>
      </div>
    </a>
  )
}
