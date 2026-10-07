# A Birthday Gift for Giftify — DigitalGiftTZ

Next.js 14 · TypeScript · Tailwind · Framer Motion · Lucide

    npm install
    npm run dev      # http://localhost:3000   (also /gift/giftify)

- Content lives in `lib/giftData.ts` (name, letter, music, contact email). Add more entries to `gifts` for new `/gift/[slug]` pages.
- Music: set `music.src` to an owned/licensed file in `/public`. `null` plays a synthesized placeholder loop.
- Deploy: import the repo in Vercel (zero config).
