'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

interface FormData {
  name: string
  phone: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  phone?: string
  email?: string
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!data.name.trim()) errors.name = 'Nome é obrigatório'
  if (!data.phone.trim()) errors.phone = 'Telefone é obrigatório'
  if (!data.email.trim()) {
    errors.email = 'E-mail é obrigatório'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'E-mail inválido'
  }
  return errors
}

function Field({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required,
}: {
  label: string
  id: string
  type?: string
  placeholder?: string
  value: string
  onChange: (v: string) => void
  error?: string
  required?: boolean
}) {
  return (
    <label className="au-field" htmlFor={id}>
      <span className="au-field__label">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </span>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="au-field__input"
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        autoComplete={type === 'email' ? 'email' : type === 'tel' ? 'tel' : 'name'}
      />
      {error && (
        <span
          id={`${id}-error`}
          role="alert"
          style={{
            display: 'block',
            marginTop: 6,
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--fs-caption)',
            color: 'var(--gold-400)',
            letterSpacing: '0.04em',
          }}
        >
          {error}
        </span>
      )}
    </label>
  )
}

export function ContactForm() {
  const [form, setForm] = useState<FormData>({ name: '', phone: '', email: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (key: keyof FormData) => (v: string) => {
    setForm((f) => ({ ...f, [key]: v }))
    if (errors[key as keyof FormErrors]) setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setLoading(true)
    /* Simulate async send — replace with real API call */
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    setSent(true)
  }

  return (
    <section className="au-section au-dark" id="contato" aria-label="Formulário de contato">
      <div className="au-container au-contact__grid">
        {/* Contact info */}
        <div className="au-contact__intro">
          <span className="au-eyebrow au-eyebrow--dark">Fale com a Áurea</span>
          <h2 className="au-h2 au-h2--dark">
            Vamos encontrar o
            <br />
            seu próximo endereço
          </h2>
          <p className="au-p au-p--dark">
            Conte-nos o que procura. Um de nossos consultores retornará em até
            um dia útil, com total reserva.
          </p>
          <ul className="au-contact__list">
            <li>
              <Icon name="phone" size={18} />
              <a href="tel:+551130000000">+55 11 3000-0000</a>
            </li>
            <li>
              <Icon name="mail" size={18} />
              <a href="mailto:contato@aurea.com.br">contato@aurea.com.br</a>
            </li>
            <li>
              <Icon name="map-pin" size={18} />
              <span>Rua Tabapuã, 540 — Itaim Bibi, São Paulo</span>
            </li>
          </ul>
        </div>

        {/* Form / thank-you */}
        <div>
          {sent ? (
            <div className="au-form__thanks">
              <Icon name="check" size={26} />
              <h3>Recebemos sua mensagem</h3>
              <p>Em breve um consultor entrará em contato. Obrigado pela confiança.</p>
            </div>
          ) : (
            <form className="au-form" onSubmit={handleSubmit} noValidate>
              <div className="au-form__row">
                <Field
                  label="Nome"
                  id="contact-name"
                  placeholder="Seu nome completo"
                  value={form.name}
                  onChange={set('name')}
                  error={errors.name}
                  required
                />
                <Field
                  label="Telefone"
                  id="contact-phone"
                  type="tel"
                  placeholder="(11) 00000-0000"
                  value={form.phone}
                  onChange={set('phone')}
                  error={errors.phone}
                  required
                />
              </div>

              <Field
                label="E-mail"
                id="contact-email"
                type="email"
                placeholder="voce@email.com"
                value={form.email}
                onChange={set('email')}
                error={errors.email}
                required
              />

              <label className="au-field" htmlFor="contact-message">
                <span className="au-field__label">Mensagem</span>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="O que você procura?"
                  value={form.message}
                  onChange={(e) => set('message')(e.target.value)}
                  className="au-field__textarea"
                />
              </label>

              <div className="au-form__actions">
                <Button type="submit" onDark disabled={loading}>
                  {loading ? 'Enviando…' : 'Enviar mensagem'}
                </Button>
                <span className="au-form__note">Resposta em até 1 dia útil</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
