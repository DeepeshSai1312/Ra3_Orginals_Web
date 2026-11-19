# Ra3_Orginals_Web

Website for Ra3 Originals, built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4. Code conventions follow `xflow-web`.

## Getting Started

Requires Node.js 22 (see `.nvmrc`; Builder's SDK needs it) and Yarn 1.

```bash
nvm use
yarn install
cp .env.example .env.local   # then fill in the keys
yarn dev
```

Without any keys the site still runs: it renders the homepage from the default copy in `src/messages/home.ts` and shows the manual numbers.

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

## Builder.io

Same approach as `xflow-web` (Gen 1 `@builder.io/react` SDK), in RA3's own Builder space.

**One-time setup in Builder**

1. Copy the space's **Public API key** into `NEXT_PUBLIC_BUILDERIO`.
2. Create a **page** model `website-pages`. Set its preview URL to the preview deployment (or `http://localhost:3000` while developing). Add custom fields `title` and `description` for SEO.
3. Create a **data** model `site-settings` with these fields, then add a single entry: `slotsOpen` (number), `totalSlots` (number), `whatsappNumber`, `whatsappMessage`, `phoneDisplay`, `email`, `instagramUrl`, `instagramHandle`, `collectivesInstagramUrl`, `collectivesInstagramHandle`, `footerBlurb`. Empty fields fall back to `src/constants/siteSettings.ts`.
4. On both models add a webhook: `POST https://<site>/api/revalidate` with header `x-revalidate-secret: <REVALIDATE_SECRET>`. Publishing then updates the live site immediately. Without the webhook, changes show within about a minute.
5. Build the homepage as a `website-pages` entry targeted at URL `/`, dragging in the sections (Hero, Brand marquee, Manifesto, Numbers, Selected work, Services, Studio gallery, How it works, Founder + team, RA3 Collectives, Final call to action). Inputs come pre-filled with the design copy, and videos and images are uploaded there.

Until a `/` page is published, the homepage renders the coded defaults. Any other URL published in `website-pages` is served by `src/app/(home)/[...slug]/page.tsx`.

Code: `src/components/Builderio/` (registry + renderer), `src/utils/builderRequestWrapper.ts` (cached fetch), section components in `src/components/Webpages/`.

## Live YouTube / Instagram numbers

Each item in the **Numbers** section has a _Live source_ (`instagram-followers`, `youtube-subscribers`, `youtube-channel-views`, `youtube-video-views`) and an ID: an Instagram username, a YouTube channel ID or @handle, or a video ID. The server fetches them at render time and caches them for a few hours (`src/utils/socialStats.ts`). The item's _Value_ is shown whenever there is no live source or the lookup fails. Rounding is down, so it never over-claims (60,412 → "60K").

- **YouTube:** `YOUTUBE_API_KEY` from Google Cloud (YouTube Data API v3).
- **Instagram:** `INSTAGRAM_BUSINESS_ACCOUNT_ID` + `INSTAGRAM_ACCESS_TOKEN`. @ra3.originals must be a Business/Creator account linked to a Facebook Page, with a Meta app. Follower counts work for any Business/Creator account (Business Discovery). Views of other people's reels need that account's own access.
- Force a refresh: `POST /api/revalidate?target=stats` with the secret header.
