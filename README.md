# Áurea — Curadoria Imobiliária

Site institucional de alto padrão para o mercado imobiliário de luxo. Construído com **Next.js 14** (App Router), **TypeScript** e **Tailwind CSS**.

Design baseado no sistema **Áurea Design System** — paleta ivory & grafite + dourado antigo, tipografia editorial (Cormorant Garamond + Jost) e espaçamento generoso.

---

## Stack

| Tecnologia | Versão |
|---|---|
| Next.js | 14.2.x |
| React | 18.3.x |
| TypeScript | 5.x |
| Tailwind CSS | 3.4.x |

---

## Pré-requisitos

- Node.js 18.17+ (LTS recomendado)
- npm 9+ ou pnpm 8+

---

## Instalação local

```bash
# Clone ou copie o projeto
cd aurea-imoveis

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

---

## Scripts disponíveis

```bash
npm run dev      # Servidor de desenvolvimento (hot-reload)
npm run build    # Build de produção
npm run start    # Servidor de produção (após build)
npm run lint     # Verificação de lint
```

---

## Estrutura de pastas

```
aurea-imoveis/
├── app/
│   ├── globals.css          # Design tokens + estilos globais
│   ├── layout.tsx           # Root layout com metadata e schema.org
│   ├── page.tsx             # Página principal (composição de seções)
│   ├── sitemap.ts           # sitemap.xml gerado automaticamente
│   └── robots.ts            # robots.txt gerado automaticamente
│
├── components/
│   ├── brand/
│   │   └── Wordmark.tsx     # Logotipo tipográfico Áurea
│   ├── layout/
│   │   ├── Header.tsx       # Cabeçalho sticky com glassmorphism no scroll
│   │   └── Footer.tsx       # Rodapé com links e informações legais
│   ├── sections/
│   │   ├── Hero.tsx         # Hero fullscreen com headline de impacto
│   │   ├── Stats.tsx        # Barra de estatísticas (dark)
│   │   ├── FeaturedProperties.tsx  # Grid 3 colunas de imóveis
│   │   ├── Philosophy.tsx   # Sobre / filosofia editorial
│   │   ├── Testimonials.tsx # Depoimentos minimalistas
│   │   └── ContactForm.tsx  # Formulário com validação client-side
│   └── ui/
│       ├── Button.tsx       # Botão (primary / outline / ghost / link)
│       ├── Icon.tsx         # Ícones SVG inline (Lucide, stroke 1.4)
│       ├── PropertyCard.tsx # Card de imóvel com hover lift
│       ├── SectionHeading.tsx # Cabeçalho de seção com eyebrow
│       └── TestimonialCard.tsx # Citação editorial sem estrelas
│
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Design System — tokens principais

### Paleta

| Token | Hex | Uso |
|---|---|---|
| `--paper-100` | `#F4F1EA` | Background principal |
| `--paper-200` | `#ECE7DC` | Seções alternadas |
| `--ink-900` | `#14110D` | Texto principal / dark sections |
| `--gold-500` | `#B08D57` | Acento primário |
| `--gold-700` | `#8A6A3B` | Texto dourado sobre ivory (AA) |
| `--gold-400` | `#C4A572` | Dourado sobre dark |

### Tipografia

| Família | Uso | Google Fonts |
|---|---|---|
| Cormorant Garamond | Títulos, destaques, depoimentos | ✅ |
| Jost | Corpo, UI, labels, botões | ✅ |

---

## Deploy na Vercel

### Via CLI

```bash
# Instale a CLI da Vercel (se necessário)
npm i -g vercel

# Deploy
vercel

# Deploy de produção
vercel --prod
```

### Via GitHub (recomendado)

1. Faça push do projeto para um repositório GitHub
2. Acesse [vercel.com](https://vercel.com) → **New Project** → importe o repositório
3. Framework preset: **Next.js** (detectado automaticamente)
4. Clique em **Deploy**

Nenhuma variável de ambiente é necessária para o funcionamento básico.

---

## Personalização

### Substituir fotografias

O Hero e os cards de imóveis usam placeholders elegantes (gradiente grafite + moldura dourada). Para adicionar imagens reais:

**Hero** — edite `components/sections/Hero.tsx`:
```tsx
<Hero imageSrc="/images/hero.jpg" />
```

**PropertyCard** — adicione a prop `image` em `FeaturedProperties.tsx`:
```tsx
{ image: '/images/residencia-horizonte.jpg', ... }
```

### Atualizar conteúdo

- **Imóveis em destaque**: edite o array `PROPERTIES` em `components/sections/FeaturedProperties.tsx`
- **Estatísticas**: edite o array `STATS` em `components/sections/Stats.tsx`
- **Depoimentos**: edite o array `QUOTES` em `components/sections/Testimonials.tsx`
- **Dados de contato**: edite `components/layout/Footer.tsx` e `components/sections/ContactForm.tsx`

### Atualizar SEO / marca

- Substitua todas as ocorrências de `Áurea` pela marca real
- Atualize `CRECI-SP J-00000` com o número real do CRECI em `components/layout/Footer.tsx`
- Substitua `aurea.com.br` pela URL real em `app/layout.tsx`, `app/sitemap.ts` e `app/robots.ts`
- Adicione a imagem Open Graph em `public/og-image.jpg` (1200×630px)

### Formulário de contato

O formulário atual simula o envio. Para integração real, substitua o `await new Promise(...)` em `ContactForm.tsx` por uma chamada à sua API (ex.: Resend, SendGrid ou endpoint próprio).

---

## SEO incluído

- ✅ Meta tags completas (title, description, keywords)
- ✅ Open Graph (Facebook/LinkedIn)
- ✅ Twitter Card
- ✅ Schema.org `RealEstateAgent` (JSON-LD)
- ✅ `sitemap.xml` gerado automaticamente
- ✅ `robots.txt` gerado automaticamente
- ✅ `lang="pt-BR"` e `<html>` semântico
- ✅ Atributos `aria-label` e roles nos elementos principais

---

## Performance

- ✅ Imagens com `next/image` (lazy load + AVIF/WebP automático)
- ✅ Fontes do Google Fonts com `display=swap`
- ✅ CSS custom properties (zero runtime JS para design tokens)
- ✅ Animações CSS puras (`fadeUp` com `animation-delay` escalonado)
- ✅ Hero com `preload` implícito (above-the-fold)
- ✅ Build totalmente estático (`○` — SSG)

---

## Licença

Projeto proprietário — uso exclusivo da Áurea Curadoria Imobiliária Ltda.
