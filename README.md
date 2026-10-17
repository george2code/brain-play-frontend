# BrainPlay Frontend

Next.js **16.4.1** (App Router) · React **19.3** · TypeScript · Tailwind CSS **4** · shadcn/ui **Base UI / Nova**.

Flag Master работает с Supabase через NestJS backend: 195 флагов, 10 вопросов в партии, образовательные факты и сохранение итогов. Остальные три игры пока локальные демо.

## Запуск

Node.js 24 LTS, npm 11. Зависимости зафиксированы в `package-lock.json`.

```bash
npm ci
npm run dev
```

Открыть http://localhost:3000. Для сохранения партий Flag Master запустить backend на :5000 с подключённой базой; frontend использует `NEXT_PUBLIC_API_URL` из `.env.local` или `http://localhost:5000/api/v1` по умолчанию. Если API недоступен, игра явно переключается на локальное демо.

```bash
npm run build
npm start
```

На текущем Windows-хосте Turbopack и Playwright успешно работают вне ограниченной Codex-песочницы. В песочнице дочерние процессы могут зависать.

## Что работает

- `/`: четыре иллюстрированные карточки, 2 колонки от 640 px, 1 на телефонах; Daily Challenge и блок прогресса.
- `/games/[code]`: Flag Master берёт 10 разных флагов из каталога 195 стран, предлагает 4 ответа и два локализованных факта. Number IQ выбирает 10 заданий из локального банка 300 числовых закономерностей (по 100 на уровень) и показывает разбор сразу после ответа. Geo Challenge и Time Traveler содержат по 3 демонстрационных вопроса. Коды совпадают с backend seed: `geo-challenge`, `number-iq`, `time-traveler`, `flag-master`.
- `/daily`: одна игра дня по UTC, одинаковая для всех браузеров на ту же дату; первый завершённый результат дня сохраняется один раз.
- `/profile`: карточки игр считают все завершённые партии, включая результаты старых версий правил. Кубок Number IQ на главной и в профиле показывает сложность партии с наибольшим счётом (Mixed — золото, Challenge — серебро, Medium — бронза, Easy — зелёный); при равенстве приоритет у более высокого кубка. У Flag Master проверенные серверные партии суммируются с локальными демопартиями; незавершённые раунды не считаются. Поддерживаются никнейм, серия дней, последние результаты и очистка локального прогресса.
- `/leaderboard`: выбор игры и честное пустое состояние до подключения проверенных серверных результатов.
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
  services/                 # API-контракты и Flag Master
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

Демопрофиль хранит **последние 100 локальных партий** в `brainplay:demo-profile:v1`; накопительные итоги и рекорд сохраняются отдельно от этой обрезанной истории. Это не серверный User и не доказательство результата. Flag Master при доступном API хранит завершённые партии на backend в Supabase; в localStorage не кладутся ни игровые токены, ни проверенные результаты. Валидация чтения защищает UI от испорченного JSON. Серия считается по уникальным дням UTC.

Number IQ остаётся локальной демоигрой без таймера. Банк из 300 детерминированных заданий строится из 12 семейств правил в `src/services/demo/number-questions.ts`; партии содержат 10 разных задач, а режим дня использует фиксированный для даты набор. У заданий бывает пропуск в начале, середине или конце ряда; после каждого ответа показывается правило и вычисление на EN/UK/RU. Новые партии имеют `rulesVersion: 2` и 10 вопросов; старые партии из 3 вопросов продолжают читаться в локальном профиле. Geo Challenge и Time Traveler используют по три фиксированных примера. Daily чередует четыре игры; Flag Master использует серверную партию, когда API доступен. Сервер генерирует набор из 10 флагов и проверяет ответы, сохраняя только итог партии. Локальные демоочки не попадают в проверенный рейтинг.

Подготовленные сервисы соответствуют существующим NestJS read endpoints:

| Сервис                             | Endpoint                                    |
| ---------------------------------- | ------------------------------------------- |
| `gameService.list/find`            | `GET /games`, `GET /games/:code`            |
| `gameService.leaderboard`          | `GET /leaderboards/:modeId`                 |
| `createProfileService().me/update` | `GET/PATCH /users/me`                       |
| `.statistics`                      | `GET /statistics/me`                        |
| `.attempts`                        | `GET /game-attempts/me?limit=20&cursor=...` |

Flag Master использует HttpOnly cookie гостевой сессии через `withCredentials`; токены не сохраняются в localStorage или доступных JS cookies. `useGames()` для остальных игр по умолчанию выключен. Когда API недоступен, Flag Master явно сообщает о локальном деморежиме.

Frontend не обращается к базе напрямую. При подключении Supabase используются NestJS API и серверный auth adapter. `DATABASE_URL`, secret/service role и другие серверные ключи здесь не нужны.

## Следующий этап

1. Провести редакторскую проверку исторических фактов и переводов перед публичным запуском; источники и лицензии указаны в `src/services/demo/flags/README.md`.
2. Реализовать Google OAuth/PKCE и безопасное объединение гостевой истории с зарегистрированным аккаунтом.
3. Завершить серверные сценарии остальных игр и Daily Challenge, не импортируя демоочки в проверенный рейтинг.
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

При настройке использованы Context7 и встроенные документы установленного Next.js:

- https://nextjs.org/docs/app/getting-started/server-and-client-components
- https://ui.shadcn.com/docs/installation/next
- https://ui.shadcn.com/docs/tailwind-v4
- https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr
