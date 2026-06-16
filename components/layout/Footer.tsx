import { Wordmark } from '@/components/brand/Wordmark'
import { Icon } from '@/components/ui/Icon'

const NAV = [
  { href: '#imoveis', label: 'Imóveis' },
  { href: '#filosofia', label: 'Filosofia' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
]

export function Footer() {
  return (
    <footer className="au-footer" role="contentinfo">
      <div className="au-footer__top">
        {/* Brand column */}
        <div className="au-footer__brand">
          <Wordmark size="md" tagline="Curadoria Imobiliária" onDark />
          <p className="au-footer__tagline">
            Curadoria de imóveis excepcionais em São Paulo e no litoral.
            Atendimento por hora marcada.
          </p>
        </div>

        {/* Link columns */}
        <div className="au-footer__cols">
          <div className="au-footer__col">
            <span className="au-foot-h">Navegação</span>
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>{n.label}</a>
            ))}
          </div>

          <div className="au-footer__col">
            <span className="au-foot-h">Contato</span>
            <a href="tel:+551130000000">+55 11 3000-0000</a>
            <a href="mailto:contato@aurea.com.br">contato@aurea.com.br</a>
            <span>Rua Tabapuã, 540 — Itaim Bibi</span>
          </div>

          <div className="au-footer__col">
            <span className="au-foot-h">Social</span>
            <a
              href="https://instagram.com/aureaimoveis"
              target="_blank"
              rel="noopener noreferrer"
              className="au-footer__social-link"
            >
              <Icon name="instagram" size={15} />
              Instagram
            </a>
            <a
              href="https://linkedin.com/company/aureaimoveis"
              target="_blank"
              rel="noopener noreferrer"
              className="au-footer__social-link"
            >
              <Icon name="linkedin" size={15} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="au-footer__base">
        <span>© {new Date().getFullYear()} Áurea Curadoria Imobiliária Ltda.</span>
        <span>CRECI-SP J-00000 · Todos os direitos reservados</span>
      </div>
    </footer>
  )
}
