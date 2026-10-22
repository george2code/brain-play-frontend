# SEO: QuizRoam, первый этап

Основной домен: `https://quizroam.net`. Frontend: Vercel (подтверждено пользователем 21.10.2026).

## Реализовано

- Статические языковые страницы `/en`, `/uk`, `/ru`, включая игры, FAQ и информационные страницы. Язык URL определяет первоначальный HTML; сохранённая настройка браузера его не переопределяет.
- Старые адреса без языка перенаправляются кодом 308 на `/en/...`, сохраняя query-параметры, в том числе OAuth callback. `www.quizroam.net` перенаправляется на основной домен.
- Переключатель сохраняет путь, query и fragment. Начатый раунд передаётся между языковыми страницами только в памяти вкладки, включая ожидающие API-запросы. Обычный уход из игры и возврат начинают новую сессию. Ключи существующего локального прогресса не изменены.
- Отдельные title/description, видимый локализованный текст главной и каждой игры; вводный текст daily доступен до загрузки игры. Canonical без query, взаимные hreflang EN/UK/RU и x-default EN, Open Graph и Twitter metadata.
- Публичный sitemap содержит 24 адреса: главная, 4 игры, daily, FAQ и about × 3 языка. Профиль, рейтинг с клиентской загрузкой и privacy имеют noindex и исключены. Не добавляется вымышленная дата lastmod.
- Неизвестные страницы возвращают 404. Общая Suspense-заглушка удалена: публичный текст виден без JavaScript. Для 404 при динамическом корневом layout используется поддерживаемый установленным Next.js флаг `experimental.globalNotFound`.

## Включение production

По умолчанию `SEO_INDEXABLE=false`: metadata и заголовок `X-Robots-Tag` запрещают индексацию; sitemap пустой. `robots.txt` разрешает обход, чтобы поисковик мог прочитать noindex. Это не механизм контроля доступа.

1. В Vercel проверить проект `quizroam`, production-ветку и домены `quizroam.net` / `www.quizroam.net`. Добавить требуемые Vercel DNS-записи у текущего DNS-провайдера, дождаться HTTPS. Проверить основной домен и редирект www.
2. Настроить действующий `NEXT_PUBLIC_API_URL` для production backend; проверить CORS, cookies и OAuth callback для нового домена. Не публиковать сборку с localhost API как готовый рабочий сайт.
3. Установить `SEO_INDEXABLE=true` **только в Production** и пересобрать deployment. На Vercel дополнительно требуется `VERCEL_ENV=production`; Preview и Development всегда noindex. Не переопределять системную переменную Vercel вручную.
4. Проверить опубликованные `/en`, `/uk`, `/ru` и по одной странице каждой игры: 200, правильный HTML lang, текст и metadata; canonical только на основной домен; `index, follow` без `X-Robots-Tag: noindex`. Адреса deployment на других хостах продолжают получать noindex.
5. Проверить `/robots.txt`, `/sitemap.xml` (24 абсолютных URL), 308 старых адресов и 404 неизвестной игры. Проверить профиль, рейтинг и privacy: noindex даже в production.

Metadata и sitemap генерируются при сборке: изменение флага требует нового build/deployment. Не продвигать preview-сборку как проверенную production-сборку с другими переменными окружения.

## Search Console — после публикации

1. Добавить Domain property `quizroam.net`, получить TXT-запись в Search Console и добавить её у DNS-провайдера. Точное значение выдаёт Google; в репозитории его нет.
2. Подтвердить владение. Оставить TXT-запись в DNS после проверки.
3. Отправить `https://quizroam.net/sitemap.xml` в Sitemaps.
4. В URL Inspection выполнить Live Test для `/en`, `/uk`, `/ru` и игровых страниц: доступность для Google, отсутствие noindex, видимый текст и canonical. Запросить индексацию главных страниц.
5. После обработки проверить Page indexing и выбранный Google canonical. Отправка sitemap и запрос индексации не подтверждают фактическое включение в поиск.

Официальные инструкции: [подтверждение владения](https://support.google.com/webmasters/answer/9008080), [создание и отправка sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

## Проверки

Обычная preview-сборка: `npm run typecheck`, `npm run lint`, `npm test`, `npm run build`, `npm run test:e2e`.

Для проверки открытой индексации локально задать `SEO_INDEXABLE=true`, `VERCEL_ENV=production` при build и запуске, а также `SEO_TEST_INDEXABLE=true` при запуске `tests/e2e/seo.spec.ts`. Тест проверяет содержимое metadata и sitemap; localhost всё равно получает защитный HTTP noindex. После проверки вернуть обычную preview-сборку.

## Состояние запуска на 22.10.2026

- В Vercel-проекте `quizroam` основной домен `quizroam.net` имеет статус `Valid Configuration` и подключён к Production. `www.quizroam.net` также имеет `Valid Configuration` и настроен на постоянный редирект 308 к основному домену. В Cloudflare добавлены две CNAME-записи на указанный Vercel target, обе с `DNS only`.
- Domain property `quizroam.net` в Search Console подтверждён для `yurii.alx@gmail.com` через TXT-запись Cloudflare. TXT-запись необходимо оставить в DNS. Sitemap пока не отправлен: на опубликованном домене ещё старая сборка без языковых URL.
- Проверено открытие `https://quizroam.net/` по HTTPS. Production frontend пока работает со старой сборкой; локальные SEO-изменения ещё не опубликованы. В Vercel не обнаружены переменные окружения проекта, включая `NEXT_PUBLIC_API_URL`; рабочий production backend и его CORS/cookies/OAuth для нового домена ещё не подтверждены. До этого нельзя включать `SEO_INDEXABLE=true` и отправлять sitemap как готовый.
- Подключённый плагин Vercel видит проект, но чтение настроек через API отклонено с 403 для команды `fusta`; настройки доменов проверены в веб-интерфейсе Vercel.
