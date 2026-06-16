interface TestimonialCardProps {
  quote: string
  name: string
  role?: string
  align?: 'left' | 'center'
  onDark?: boolean
}

export function TestimonialCard({
  quote,
  name,
  role,
  align = 'left',
  onDark = false,
}: TestimonialCardProps) {
  const center = align === 'center'
  const ink = onDark ? 'var(--text-on-dark)' : 'var(--text-primary)'
  const sub = onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'

  return (
    <figure
      className="au-testimonial"
      style={{ alignItems: center ? 'center' : 'flex-start', textAlign: center ? 'center' : 'left' }}
    >
      <span className="au-testimonial__rule" />
      <blockquote className="au-testimonial__quote" style={{ color: ink }}>
        "{quote}"
      </blockquote>
      <figcaption>
        <div className="au-testimonial__name" style={{ color: ink }}>{name}</div>
        {role && <div className="au-testimonial__role" style={{ color: sub }}>{role}</div>}
      </figcaption>
    </figure>
  )
}
