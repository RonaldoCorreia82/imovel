'use client'

import { useState, useEffect } from 'react'
import { Wordmark } from '@/components/brand/Wordmark'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

const NAV = [
  { href: '#fotos', label: 'Galeria' },
  { href: '#planta', label: 'Planta' },
  { href: '#sobre', label: 'O Imóvel' },
  { href: '#contato', label: 'Contato' },
]

export function Header() {
  const [solid, setSolid] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  const onDark = !solid
  const navColor = onDark ? 'var(--text-on-dark)' : 'var(--text-primary)'

  return (
    <>
      <header className={`au-header ${solid ? 'is-solid' : ''}`} role="banner">
        <div className="au-header__inner">
          <a href="#top" aria-label="Áurea — página inicial">
            <Wordmark size="sm" onDark={onDark} />
          </a>

          <nav className="au-nav" aria-label="Navegação principal">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="au-nav__link"
                style={{ color: navColor }}
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="au-header__cta">
            <Button href="#contato" variant="outline" size="sm" onDark={onDark}>
              Agende uma visita
            </Button>
          </div>

          <button
            className="au-burger"
            aria-label="Abrir menu"
            onClick={() => setDrawerOpen(true)}
            style={{ color: navColor }}
          >
            <Icon name="menu" size={26} />
          </button>
        </div>
      </header>

      {drawerOpen && (
        <div className="au-drawer" role="dialog" aria-modal="true" aria-label="Menu de navegação">
          <button
            className="au-drawer__close"
            aria-label="Fechar menu"
            onClick={() => setDrawerOpen(false)}
          >
            <Icon name="x" size={26} />
          </button>

          <nav className="au-drawer__nav">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setDrawerOpen(false)}>
                {n.label}
              </a>
            ))}
          </nav>

          <Button href="#contato" onClick={() => setDrawerOpen(false)}>
            Agende uma visita
          </Button>
        </div>
      )}
    </>
  )
}
