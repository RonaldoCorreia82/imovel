'use client'

import React from 'react'
import Link from 'next/link'

type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'link'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  onDark?: boolean
  disabled?: boolean
  icon?: React.ReactNode
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  style?: React.CSSProperties
  'aria-label'?: string
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onDark = false,
  disabled = false,
  icon,
  href,
  onClick,
  type = 'button',
  className,
  style,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const sizeClass = size === 'sm' ? ' au-btn--sm' : size === 'lg' ? ' au-btn--lg' : ''

  const variantClass = (() => {
    if (variant === 'primary') return onDark ? 'au-btn--primary-dark' : 'au-btn--primary'
    if (variant === 'outline') return onDark ? 'au-btn--outline-dark' : 'au-btn--outline'
    if (variant === 'ghost') return 'au-btn--ghost'
    return 'au-btn--link'
  })()

  const cls = `au-btn ${variantClass}${sizeClass} ${className ?? ''}`

  const content = (
    <>
      {children}
      {icon && <span className="au-btn__icon">{icon}</span>}
    </>
  )

  if (href) {
    if (href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')) {
      return (
        <a href={href} className={cls} style={style} aria-label={ariaLabel}>
          {content}
        </a>
      )
    }
    return (
      <Link href={href} className={cls} style={style} aria-label={ariaLabel}>
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cls}
      style={{ ...style, opacity: disabled ? 0.45 : undefined, cursor: disabled ? 'not-allowed' : undefined }}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  )
}
