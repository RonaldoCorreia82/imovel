interface SectionHeadingProps {
  eyebrow?: string
  title: string
  lede?: string
  align?: 'left' | 'center'
  onDark?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'left',
  onDark = false,
}: SectionHeadingProps) {
  const center = align === 'center'

  return (
    <div className={`au-section-heading ${center ? 'au-section-heading--center' : ''}`}>
      {eyebrow && (
        <span className={`au-eyebrow ${onDark ? 'au-eyebrow--dark' : ''}`}>
          <span className="au-eyebrow__rule" />
          {eyebrow}
        </span>
      )}
      <h2 className={`au-h2 ${onDark ? 'au-h2--dark' : ''}`}>{title}</h2>
      {lede && (
        <p className={`au-section-heading__lede ${onDark ? 'au-p--dark' : ''}`}>{lede}</p>
      )}
    </div>
  )
}
