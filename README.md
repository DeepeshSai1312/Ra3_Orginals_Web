# Ra3_Orginals_Web

Website for Ra3 Originals, built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4. Code conventions follow `xflow-web`.

## Getting Started

Requires Node.js 20.9+ and Yarn 1.

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script            | What it does                        |
| ----------------- | ----------------------------------- |
| `yarn dev`        | Start the dev server (Turbopack)    |
| `yarn build`      | Production build                    |
| `yarn start`      | Serve the production build          |
| `yarn lint`       | ESLint (Next.js + TypeScript rules) |
| `yarn type-check` | `tsc --noEmit`                      |
| `yarn format`     | Prettier over the whole repo        |

A Husky pre-commit hook runs `lint-staged`: type-check, `eslint --fix` and `prettier --write` on staged files.

## Project structure

```
src/
  app/
    (home)/          # main site route group: layout with Header/Footer + pages
    styles/          # global.css (Tailwind + design tokens)
    layout.tsx       # root layout: fonts, metadata
  components/<Name>/index.tsx
  constants/  hooks/  utils/  types/  assets/
  messages/          # copy and SEO strings (messages/seo/pageSeo.ts)
```

Path aliases: `@components/*`, `@hooks/*`, `@utils/*`, `@constants/*`, `@messages/*`, `@assets/*`, and `@/*` for `src/*`.

Code style: Prettier (single quotes, semicolons, ES5 trailing commas, 2 spaces), components as `const Name = (...) => {}` with a default export, and class names joined with `clsx`.
