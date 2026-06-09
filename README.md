# Lucas Amorim | Portfólio Web

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=111111)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=ffffff)](https://www.typescriptlang.org/)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel)](https://portifolio-programacao-web.vercel.app/)

Portfólio profissional de Lucas dos Santos Amorim Rêgo, desenvolvido com Next.js, React e TypeScript. O site apresenta experiência, formação, stack técnica, canais de contato e metadados de release para facilitar a rastreabilidade entre deploy, commit e versão.

Site em produção: [portifolio-programacao-web.vercel.app](https://portifolio-lucas-theta.vercel.app/)

## Principais recursos

- Interface responsiva para desktop e mobile.
- Alternância entre modo claro e modo escuro com persistência no navegador.
- Conteúdo bilíngue em português e inglês.
- Seções de perfil, stack, experiência, formação e contato.
- Animações de entrada com `IntersectionObserver`.
- Footer dinâmico com release, commit e link para a release no GitHub.
- Workflow de GitHub Actions para criar releases automáticas em cada push na `main`.

## Stack

| Camada | Tecnologias |
| --- | --- |
| Framework | Next.js 16 |
| UI | React 19 |
| Linguagem | TypeScript |
| Ícones | Lucide React, React Icons |
| Estilo | CSS global responsivo com variáveis de tema |
| Deploy | Vercel |
| Automação | GitHub Actions |

## Requisitos

- Node.js `>=20.9.0`
- npm `11.15.0` ou compatível

## Rodando localmente

Clone o repositório e instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra no navegador:

```txt
http://localhost:3000
```

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor local do Next.js |
| `npm run build` | Gera o build de produção |
| `npm run start` | Executa o build de produção localmente |
| `npm run typecheck` | Roda `tsc --noEmit` para validar tipos |

## Estrutura do projeto

```txt
.
+-- app/
|   +-- globals.css       # Estilos globais, tema e responsividade
|   +-- layout.tsx        # Metadata, HTML root e init de tema/idioma
|   +-- page.tsx          # Conteúdo principal, PT/EN e footer dinâmico
|   +-- ScrollReveal.tsx  # Animações baseadas em scroll
|   +-- ThemeToggle.tsx   # Alternância claro/escuro
+-- public/
|   +-- images/           # Assets públicos do portfólio
+-- .github/
|   +-- workflows/
|       +-- auto-release.yml
+-- next.config.ts        # Metadados de build expostos ao frontend
+-- package.json
+-- README.md
```

## Idioma e tema

O idioma e o tema são persistidos no `localStorage`:

| Chave | Uso |
| --- | --- |
| `portfolio-language` | Guarda `pt` ou `en` |
| `portfolio-theme` | Guarda `dark` ou `light` |

O `layout.tsx` aplica esses valores antes da hidratação para reduzir inconsistências visuais.

## Releases automáticas

O workflow [.github/workflows/auto-release.yml](./.github/workflows/auto-release.yml) cria releases automaticamente a cada push na branch `main`.

Formato das tags:

```txt
v<versão-do-package-json>-<sha-curto>
```

Exemplo:

```txt
v2.0.0-a1b2c3d
```

As releases são criadas como `prerelease` para evitar tratar todo commit como release final. Para publicar releases finais automaticamente, remova `--prerelease` do workflow.

## Metadados no footer

O footer mostra a release e o commit do build atual. Esses valores são definidos em `next.config.ts` e expostos como variáveis públicas:

| Variável | Descrição |
| --- | --- |
| `NEXT_PUBLIC_APP_VERSION` | Versão do `package.json` |
| `NEXT_PUBLIC_GIT_BRANCH` | Branch usada no build |
| `NEXT_PUBLIC_GIT_COMMIT_SHA` | SHA curto do commit |
| `NEXT_PUBLIC_RELEASE_TAG` | Tag esperada da release |
| `NEXT_PUBLIC_RELEASE_URL` | Link para a release no GitHub |

Em deploys na Vercel, o projeto usa as variáveis `VERCEL_GIT_COMMIT_SHA` e `VERCEL_GIT_COMMIT_REF`. Em builds locais, usa comandos Git como fallback.

## Validação

Antes de abrir PR, publicar ou fazer deploy, rode:

```bash
npm run typecheck
npm run build
```

Opcionalmente, rode a auditoria de dependências:

```bash
npm audit --audit-level=moderate
```

## Deploy na Vercel

A Vercel detecta Next.js automaticamente.

| Campo | Valor |
| --- | --- |
| Framework Preset | `Next.js` |
| Install Command | `npm install` |
| Build Command | `npm run build` |
| Output Directory | deixe vazio |
| Node.js | `>=20.9.0` |

## Licença

Este projeto está sob a licença descrita em [LICENSE](./LICENSE).
