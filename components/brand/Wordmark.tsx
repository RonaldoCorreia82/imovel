import React from 'react'

interface WordmarkProps {
  size?: 'sm' | 'md' | 'lg'
  tagline?: string
  onDark?: boolean
  className?: string
}

const sizes = { sm: 20, md: 30, lg: 56 } as const

export function Wordmark({ size = 'md', tagline, onDark = false, className }: WordmarkProps) {
  const fs = sizes[size]
  const tagFs = Math.max(9, fs * 0.26)

  return (
    <span className={`au-wordmark ${onDark ? 'au-wordmark--dark' : ''} ${className ?? ''}`}>
      <span className="au-wordmark__name" style={{ fontSize: fs }}>
        ÁUREA
      </span>
      {tagline && (
        <span className="au-wordmark__tagline" style={{ fontSize: tagFs }}>
          <span className="au-wordmark__tagline-rule" />
          {tagline}
          <span className="au-wordmark__tagline-rule" />
        </span>
      )}
    </span>
  )
}
