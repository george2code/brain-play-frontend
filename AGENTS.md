<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## QuizRoam conventions

- The public brand is **QuizRoam** (capital Q and R, spelled Roam, not Rom). The user purchased `quizroam.net` on 2026-10-21. Use `https://quizroam.net` as the intended production site URL for future SEO and deployment configuration. Domain purchase alone does not confirm DNS, HTTPS, or deployment setup. Preserve legacy `brainplay:*` storage/event keys to retain existing progress and language preferences.
- Read `README.md` and `src/styles/README.md` before changing architecture or styling.
- Render the logo wordmark as lowercase `quizroam.`: black `quiz`, green `roam`, and an orange baseline period. Keep the green brain icon. Use `QuizRoam` in ordinary copy and metadata.
- Keep thin server route files and named screen components as in Show Ring / Tea Shop.
- All interactive copy belongs in `src/i18n/dictionaries.ts` (EN/UK/RU).
- Use shared Tailwind tokens and shadcn Base UI primitives. Base UI uses `render`.
- Demo data must remain separate from API data and must never enter verified rankings.
- Do not add auth endpoints the backend does not implement, store tokens in localStorage, or put database secrets in this frontend.
- Keep API types aligned with actual backend DTOs and Prisma nullability.
- For meaningful behavior changes run typecheck, lint and relevant tests. Use browser checks for game/profile/mobile flows.
