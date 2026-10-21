# BrainPlay Frontend

Next.js **16.4.1** (App Router) · React **19.3** · TypeScript · Tailwind CSS **4** · shadcn/ui **Base UI / Nova**.

Все четыре игры сохраняют завершённые партии через NestJS backend в Supabase PostgreSQL. При недоступном API они переходят в локальный деморежим.

## Запуск

Node.js 24 LTS, npm 11. Зависимости зафиксированы в `package-lock.json`.

```bash
npm ci
npm run dev
```

Открыть http://localhost:3000. Для сохранения партий всех четырёх игр запустить backend на :5000 с подключённой базой и выполнить `npm run db:seed` в backend. Frontend использует `NEXT_PUBLIC_API_URL` из `.env.local` или `http://localhost:5000/api/v1` по умолчанию. Если API недоступен, игра явно переключается на локальное демо.

```bash
npm run build
npm start
```

На текущем Windows-хосте production-сборка запускается через Webpack: Turbopack не смог запустить дочерний процесс даже вне ограниченной Codex-песочницы. Playwright успешно работает вне песочницы; внутри неё тестовый сервер может зависать.

## Что работает

- `/`: четыре иллюстрированные карточки, 2 колонки от 640 px, 1 на телефонах; Daily Challenge и блок прогресса.
- `/games/[code]`: Flag Master берёт 10 разных флагов из каталога 195 стран, предлагает 4 ответа и два локализованных факта. Number IQ выбирает 10 заданий из локального банка 300 числовых закономерностей (по 100 на уровень) и показывает разбор сразу после ответа. Geo Challenge даёт 10 заданий на картах Африки, Азии, Европы, Северной и Южной Америки, Океании и штатов США. Карты показывают широкий географический контекст и не менее десяти мест для выбора; мини-карта помогает определить показанную часть материка, а область нажатия небольших стран увеличена для телефона. Южная Америка показана целиком и вертикально. Страны и штаты выбираются нажатием на контур; после ответа показаны выбранное и правильное места. Time Traveler выбирает 10 вопросов из банка 300 иллюстрированных историй, охватывая древнюю историю и XX век; после одного выбора открываются даты всех карточек и исторический факт, дальше игрок переходит вручную. Коды совпадают с backend seed: `geo-challenge`, `number-iq`, `time-traveler`, `flag-master`.
- `/daily`: одна игра дня по UTC, одинаковая для всех браузеров на ту же дату; первый завершённый результат дня сохраняется один раз.
- `/profile`: карточки игр считают все завершённые партии, включая результаты старых версий правил. Кубок Number IQ на главной и в профиле показывает сложность партии с наибольшим счётом (Mixed — золото, Challenge — серебро, Medium — бронза, Easy — зелёный); при равенстве приоритет у более высокого кубка. Проверенные серверные партии четырёх игр суммируются с локальными демопартиями; незавершённые раунды не считаются. Поддерживаются никнейм, серия дней, последние результаты и очистка локального прогресса. Подключение Google доступно в профиле и после партии; кнопка входа активируется после настройки провайдера и включения флага на backend.
- `/leaderboard`: top-50 из API для classic режима актуальной версии выбранной игры; загрузка, ошибка с повтором и пустое состояние. Только серверные результаты зарегистрированных пользователей.
- EN / UK / RU: интерфейс и вопросы, выбор сохраняется в браузере; `html.lang` обновляется. Базовая SSR-страница и SEO metadata пока английские; локализованные URL можно добавить при подготовке публичного запуска.
- Адаптивное меню Sheet, диалоги входа/профиля, toast, skeleton, 404 и error boundary.
- Рекламные слоты с зарезервированными размерами. Скриптов AdSense, аналитики и внешних шрифтов нет.
- На десктопной главной боковой рекламный слот находится между Daily Challenge и прогрессом; на мобильном он скрыт. После результата обычной или ежедневной партии: один рекламный слот, затем «Попробуй ещё» с тремя другими играми. Во время раунда реклама и рекомендации не показываются.

## Структура — по Show Ring и Tea Shop

Изучены локальные `C:/Projects/showRing/show-ring-fe` и `C:/Projects/next/fcms-tea-shop`.

```text
src/
  app/
    (root)/                 # общий layout, тонкие page.tsx + Home/Profile/...tsx
    providers.tsx           # QueryClient, locale, toast
    globals.css
  components/
    ui/                     # официальные shadcn primitives
    layouts/                # Header, Footer
    games/                  # карточки, SVG preview, игровые сессии
    profile/
    auth/
    shared/
  api/                      # Axios public client + factory для session client
  config/                   # маршруты и адрес API
  constants/                # описание четырёх игр
  hooks/                    # Query hooks, browser store, UTC clock
  i18n/                     # типизированные EN/UK/RU словари
  lib/                      # cn
  services/                 # API-контракты и серверные раунды
    demo/flags/flags.json   # 195 флагов и EN/UK/RU факты
  shared/types/             # transport models отдельно от demo models
  styles/                   # tokens.css, utilities.css, README
  utils/                    # чистая логика прогресса
plop-templates/
tests/                      # unit + Playwright
```

`page.tsx` остаются Server Components, интерактивные экраны и providers — Client Components. Redux/persist, Sass, chart/table engines и payment SDK не добавлялись без сценария использования.

### Tailwind и shadcn

Подход Show Ring: семантические цвета в `styles/tokens.css`, повторяемые визуальные паттерны в `styles/utilities.css`, responsive layout рядом с JSX. Подробнее: [styles/README.md](src/styles/README.md).

shadcn: `components.json`, Base UI Nova, aliases `@/*`. Base UI использует `render`, а не Radix `asChild`.

```bash
npx shadcn@latest add popover
```

### Plop и форматирование

В изученных копиях Plop отсутствовал; здесь он настроен явно.

```bash
npm run generate
npm run generate -- component GameSummary games false
npm run generate -- component GameControls games true
npm run generate -- service achievement
npm run format
npm run format:check
```

`component`: PascalCase TSX, выбор раздела, опциональный `use client`. `service`: общий Axios client и отмена через AbortSignal; заменить `unknown` реальным контрактом до использования. Шаблоны исключены из Prettier: HTML-парсер `.hbs` повреждает TypeScript generics. Настроена сортировка импортов через `@trivago/prettier-plugin-sort-imports`.

## Граница demo / API

Демопрофиль хранит **последние 100 локальных партий** в `brainplay:demo-profile:v1`; накопительные итоги и рекорд сохраняются отдельно от этой обрезанной истории. Это не серверный User и не доказательство результата. Все четыре игры при доступном API хранят завершённые партии на backend в Supabase; в localStorage не кладутся ни игровые токены, ни проверенные результаты. Старые демопартии остаются только локальными и не импортируются в проверенные результаты. Валидация чтения защищает UI от испорченного JSON. Серия считается по уникальным дням UTC.

Number IQ использует банк из 300 детерминированных заданий и 12 семейств правил в `src/services/demo/number-questions.ts`; сервер выбирает 10 ID, сохраняет ключ ответов и считает итог. У заданий бывает пропуск в начале, середине или конце ряда; после ответа показывается правило и вычисление на EN/UK/RU. Geo Challenge выбирает 10 вопросов, включая все семь регионов, и сохраняет выбранные коды стран/штатов для проверки на сервере. Режим дня использует фиксированный для UTC-даты набор. Новые партии имеют `rulesVersion: 2`; старые партии из 3 вопросов продолжают читаться в локальном профиле. Карты построены из [Natural Earth через world-atlas](https://github.com/topojson/world-atlas) и [данных Бюро переписи США через us-atlas](https://github.com/topojson/us-atlas); лицензии указаны в пакетах. Time Traveler выдаёт 10 вопросов за партию (версия правил 5); прежние результаты, включая просмотр всех 300 вопросов в версии 4, сохраняются. Игра использует 235 оригинальных иллюстраций из `public/time-traveler`; даты, подписи, вопросы и факты локализованы в `src/i18n/dictionaries.ts`, а источники сохранены с данными. При недоступном API все игры переключаются на локальное демо. Локальные демоочки не попадают в проверенный рейтинг.

Подготовленные сервисы соответствуют существующим NestJS read endpoints:

| Сервис                             | Endpoint                                    |
| ---------------------------------- | ------------------------------------------- |
| `gameService.list/find`            | `GET /games`, `GET /games/:code`            |
| `gameService.leaderboard`          | `GET /leaderboards/:modeId`                 |
| `createProfileService().me/update` | `GET/PATCH /users/me`                       |
| `.statistics`                      | `GET /statistics/me`                        |
| `.attempts`                        | `GET /game-attempts/me?limit=20&cursor=...` |

Четыре серверные игры используют HttpOnly cookie гостевой сессии через `withCredentials`; токены не сохраняются в localStorage или доступных JS cookies. `useGames()` для каталога по умолчанию выключен. Когда API недоступен, экран сообщает о локальном деморежиме. Гостевой профиль удаляется после 30 дней неактивности.

Frontend не обращается к базе напрямую. При подключении Supabase используются NestJS API и серверный auth adapter. `DATABASE_URL`, secret/service role и другие серверные ключи здесь не нужны.

## Следующий этап

1. Провести редакторскую проверку исторических фактов и переводов перед публичным запуском; источники и лицензии указаны в `src/services/demo/flags/README.md`.
2. Настроить Google provider в Supabase и проверить настоящий OAuth-вход. Backend PKCE и объединение гостевой истории реализованы; инструкция находится в `brain-play-backend/docs/GOOGLE_AUTH_SETUP.md`.
3. Реализовать полноценное правило единственного результата Daily Challenge в базе, не импортируя демоочки в проверенный рейтинг.
4. Перед публикацией — локализованные metadata/URL, антибот-защиту гостевого входа, privacy/consent и AdSense publisher/slot IDs. Сейчас preview имеет `noindex`.

## Проверки

```bash
npm run typecheck
npm run lint
npm test
npm run build
npm run test:e2e
```

Playwright запускает отдельный production build на :3100 и использует установленный Microsoft Edge. Запущенный вручную dev-сервер на :3000 не переиспользуется: его streaming-ответы могут отличаться от production. Для другой ОС поменять `channel` в `playwright.config.ts` или установить браузер Playwright. Перед E2E выполнить build. Скриншоты — `test-results/`, каталог не коммитится.

Проверены desktop/mobile: каталог, партии Number IQ и Flag Master, факты до и после ответа, профиль, перезагрузка, никнейм, подтверждение очистки, EN/UK/RU, меню, состояние Google-входа, daily и 404. Отдельный smoke-тест проверил браузер → backend → Supabase → профиль; тестовый гость после него удалён.

Проверка зависимостей 15.10.2026: `npm audit --omit=dev` — **0 уязвимостей**. Полный audit — 12 high предупреждений в инструментах разработки, связанных с `braces` через `micromatch` / `fast-glob` (ESLint, Plop, shadcn). Автоматически предлагаются несовместимые откаты основных пакетов; `audit fix --force` не применялся. shadcn CLI находится в devDependencies.

## Документация

[Результаты ревью и оставшиеся задачи, 21.10.2026](docs/REVIEW-2026-10-21.md). Google-вход запускается через backend, токены остаются в HttpOnly cookies. Статус подключения и выход видны в профиле. Никнейм серверного пользователя сохраняется через PATCH /users/me; уникальность отображаемого имени не требуется.

При настройке использованы Context7 и встроенные документы установленного Next.js:

- https://nextjs.org/docs/app/getting-started/server-and-client-components
- https://ui.shadcn.com/docs/installation/next
- https://ui.shadcn.com/docs/tailwind-v4
- https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr
