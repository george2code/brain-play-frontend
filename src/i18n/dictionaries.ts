import type { Locale } from '@/shared/types/game.types';

const en = {
  games: 'Games',
  daily: 'Daily Challenge',
  leaderboard: 'Leaderboard',
  profile: 'My profile',
  signIn: 'Sign in',
  menu: 'Open menu',
  language: 'Language',
  close: 'Close',
  eyebrow: 'YOUR DAILY DOSE OF DISCOVERY',
  heroFirst: 'A little play.',
  heroSecond: 'A sharper mind.',
  heroDescription:
    'Follow your curiosity. Pick a game, find your rhythm, and make your next break a little more brilliant.',
  explore: 'Find your game',
  noAccount: 'Free to play. No account needed.',
  choose: 'What will you discover today?',
  chooseDescription: 'Four little worlds. Plenty of ways to surprise yourself.',
  allGames: 'All games',
  play: 'Let’s play',
  minutes: '2–3 min',
  quickRound: '3 demo rounds',
  geoRoundSize: '10 map questions per round',
  geoIntro:
    'Find countries and U.S. states directly on the map. Each round visits different parts of the world.',
  geoRules:
    'Select the outlined country or state. Each map is framed for its question; your choice and the right place appear after you answer. No timer.',
  geoAfrica: 'Africa',
  geoAsia: 'Asia',
  geoEurope: 'Europe',
  geoNorthAmerica: 'North America',
  geoSouthAmerica: 'South America',
  geoOceania: 'Oceania',
  geoUnitedStates: 'U.S. states',
  geoMapLabel: 'Interactive map',
  geoMapHint: 'Tap or click a place on the map to answer.',
  geoMapSource: 'Map data: Natural Earth / U.S. Census',
  geoYouSelected: 'You selected:',
  geoIncorrect: 'Not quite. The green area is the right place.',
  geoCorrectMarker: 'Correct place',
  geoWrongMarker: 'Your choice',
  flagRoundSize: '10 flags per round',
  numberRoundSize: '10 number patterns per round',
  numberMinutes: '5–7 min',
  numberIntro:
    'Find the rule behind each sequence. Ten different puzzles in every round.',
  numberRules:
    'Choose a level. Every answer is followed by a short explanation. No timer.',
  numberLevel: 'Difficulty',
  numberMixed: 'Mixed',
  numberEasy: 'Easy',
  numberMedium: 'Medium',
  numberHard: 'Challenge',
  numberMissing: 'Find the missing number.',
  numberNext: 'What comes next?',
  numberSolution: 'How it works',
  flagMinutes: '5–7 min',
  flagSaved: 'Flag results saved',
  resultSaved: 'Results saved to your profile',
  cloudRound: 'Result saved when you finish',
  offlineNotice:
    'The server is unavailable. This round stays in this browser as a demo.',
  saveError: 'Could not save this round. Check your connection and try again.',
  flagCloudRound: 'Result saved when you finish',
  flagSavedDescription:
    'Flag Master, Geo Challenge and Number IQ rounds are saved to your guest profile when the server is available.',
  flagOfflineNotice:
    'The server is unavailable. This round stays in this browser as a demo.',
  flagSaveError:
    'Could not save this round. Check your connection and try again.',
  flagImage: 'Flag to identify',
  flagQuestion: 'Which country does this flag belong to?',
  flagSource: 'Read the source',
  dailyEyebrow: 'A FRESH LITTLE CHALLENGE',
  dailyTitle: 'New day. New discovery.',
  dailyDescription:
    'A daily pick for your curious mind. Give it a go and make a little progress, one day at a time.',
  startDaily: 'Take today’s challenge',
  dailyCompleted: 'Today’s challenge complete',
  tomorrow: 'Come back tomorrow for a new pick.',
  dailyNote: 'Daily pick · refreshes at 00:00 UTC',
  dailyIntro: 'Your daily pick',
  progress: 'Your little victories',
  progressDescription: 'Every game is a chance to surprise yourself.',
  firstTitle: 'Your story starts with a game.',
  firstDescription:
    'Finish your first round to unlock your profile, personal bests, and progress.',
  pickGame: 'Pick a game',
  played: 'Games played',
  accuracy: 'Accuracy',
  streak: 'Day streak',
  best: 'Personal best',
  viewProfile: 'See your progress',
  notPlayed: 'Your first score awaits',
  points: 'pts',
  advertisement: 'ADVERTISEMENT',
  adPlaceholder: 'A little space for our supporters',
  footer: 'A little curiosity goes a long way.',
  demo: 'Preview',
  demoNotice: 'Demo rounds · results stay in this browser',
  practice: 'Practice',
  dailyMode: 'Daily',
  back: 'Back to games',
  start: 'Start round',
  flagStart: 'Start flag round',
  gameIntro:
    'A quick taste of the game. Three questions, a little curiosity, and a new personal best to chase.',
  timeIntro:
    'Explore history through illustrated cards. Every answer reveals a date and a little story.',
  timeRules:
    'Ten questions from 300 illustrated stories. Choose a card, study the dates and story, then continue. Each correct answer earns 100 points.',
  timeRoundSize: '10 illustrated questions',
  timeFact: 'A little history',
  flagGameIntro:
    'Ten flags from around the world. Discover a little history with every answer.',
  flagRules:
    'Ten questions, four choices each, 100 points for every correct answer. No timer.',
  flagResultSaved: 'Your result has been saved to your profile.',
  round: 'Round',
  of: 'of',
  next: 'Next question',
  finish: 'See my result',
  correct: 'You got it!',
  incorrect: 'One to remember!',
  correctAnswer: 'Correct answer:',
  resultTitle: 'Curiosity looks good on you.',
  resultDescription:
    'Another little discovery. Your result has been added to your local profile.',
  again: 'Play again',
  tryAnotherGame: 'Try something new',
  tryAnotherGameDescription:
    'Keep your curiosity going. Explore another little world.',
  saveResult: 'Keep your progress',
  localOnly: 'Local profile',
  localDescription:
    'Demo results stay on this device. Connect Google to keep your online progress across devices.',
  google: 'Continue with Google',
  googleSoon:
    'Google sign-in is not connected yet. You can play without an account.',
  googleLinkTitle: 'Connect your guest profile',
  googleLinkDescription:
    'Connect Google to keep your completed online rounds and join the leaderboard. Demo rounds stay in this browser.',
  googleLinkAction: 'Connect Google',
  googleConnecting: 'Opening Google…',
  googlePrivacy:
    'Only your identity and email are requested. BrainPlay does not access your Gmail.',
  googleSuccess: 'Google connected. Your online progress is saved.',
  googleError: 'Could not complete the request. Please try again.',
  googleConnected: 'Google account connected',
  signOut: 'Sign out',
  rankingMode: 'Classic mode · current rules',
  rankingPlace: 'Place',
  rankingPlayer: 'Player',
  authTitle: 'Make room for more discoveries.',
  authDescription:
    'A profile to keep your scores, your streak, and your favourite games together.',
  editProfile: 'Edit nickname',
  nickname: 'Nickname',
  save: 'Save changes',
  cancel: 'Cancel',
  saved: 'Nickname updated',
  nicknameHint: '2–24 characters',
  history: 'Your recent discoveries',
  historyPages: 'Discovery pages',
  previousPage: 'Previous page',
  nextPage: 'Next page',
  page: 'Page',
  game: 'Game',
  score: 'Score',
  date: 'Date',
  reset: 'Clear local progress',
  resetTitle: 'Start fresh?',
  resetDescription:
    'This will remove your nickname and all demo results from this browser. This cannot be undone.',
  resetConfirm: 'Clear progress',
  rankingTitle: 'A little friendly competition.',
  rankingDescription:
    'Every game has its own leaderboard. Choose a game to explore.',
  rankingEmpty: 'The starting line is open.',
  rankingNote:
    'Complete an online round and connect Google to join. Local demo scores don’t enter the rankings.',
  profileTitle: 'Look how far curiosity takes you.',
  guest: 'Curious player',
  correctAnswers: 'Correct answers',
  comingSoon: 'Coming next',
  about: 'About BrainPlay',
  privacy: 'Privacy',
  privacyText:
    'Language, nickname and demo results stay in this browser. Completed Flag Master, Geo Challenge and Number IQ rounds are saved to a guest profile when the server is available. Clearing browser data removes local progress and access to that guest profile. Inactive guest profiles are deleted after 30 days. No advertising or analytics scripts are loaded.',
  aboutText:
    'BrainPlay is a collection of short games for curious minds. Choose your favourite, practise at your own pace, and enjoy a little discovery every day. This is a frontend preview with sample questions, not an IQ assessment.',
  storageError:
    'Browser storage is unavailable. Progress will only last for this visit.',
  loading: 'Getting things ready…',
  errorTitle: 'That didn’t go as planned.',
  retry: 'Try again',
  notFound: 'This discovery is still off the map.',
  home: 'Back home',
  skip: 'Skip to content',
  roundsHint: 'Choose an answer to continue.',
  demoRules:
    'Each correct answer earns 100 demo points. Take your time — this preview has no timer.',
  dailyDoneNote:
    'Your first completed attempt is today’s daily result. You can still practise freely.',
};
export type Dictionary = { [K in keyof typeof en]: string };
const ru: Dictionary = {
  games: 'Игры',
  daily: 'Задание дня',
  leaderboard: 'Рейтинг',
  profile: 'Мой профиль',
  signIn: 'Войти',
  menu: 'Открыть меню',
  language: 'Язык',
  close: 'Закрыть',
  eyebrow: 'ЕЖЕДНЕВНАЯ ПОРЦИЯ ОТКРЫТИЙ',
  heroFirst: 'Немного игры.',
  heroSecond: 'Больше открытий.',
  heroDescription:
    'Следуй любопытству. Выбери игру, найди свой ритм и преврати короткий перерыв в маленькое открытие.',
  explore: 'Найти свою игру',
  noAccount: 'Бесплатно. Без регистрации.',
  choose: 'Что откроешь для себя сегодня?',
  chooseDescription: 'Четыре маленьких мира. Много способов удивить себя.',
  allGames: 'Все игры',
  play: 'Играть',
  minutes: '2–3 мин',
  quickRound: '3 демораунда',
  geoRoundSize: '10 вопросов с картой за партию',
  geoIntro:
    'Находи страны и штаты США прямо на карте. В каждой партии — разные части света.',
  geoRules:
    'Выбери страну или штат по контуру. Карта подстроена под каждый вопрос; после ответа покажем твой выбор и правильное место. Таймера нет.',
  geoAfrica: 'Африка',
  geoAsia: 'Азия',
  geoEurope: 'Европа',
  geoNorthAmerica: 'Северная Америка',
  geoSouthAmerica: 'Южная Америка',
  geoOceania: 'Океания',
  geoUnitedStates: 'Штаты США',
  geoMapLabel: 'Интерактивная карта',
  geoMapHint: 'Нажми на нужное место на карте, чтобы ответить.',
  geoMapSource: 'Картографические данные: Natural Earth / Бюро переписи США',
  geoYouSelected: 'Ты выбрал:',
  geoIncorrect: 'Неправильно. Зелёным отмечено верное место.',
  geoCorrectMarker: 'Верное место',
  geoWrongMarker: 'Твой выбор',
  flagRoundSize: '10 флагов за партию',
  numberRoundSize: '10 числовых задач за партию',
  numberMinutes: '5–7 мин',
  numberIntro:
    'Найди закономерность ряда. В каждой партии — десять разных задач.',
  numberRules:
    'Выбери сложность. После ответа покажем короткий разбор. Таймера нет.',
  numberLevel: 'Сложность',
  numberMixed: 'Разная',
  numberEasy: 'Легко',
  numberMedium: 'Средне',
  numberHard: 'Сложнее',
  numberMissing: 'Найди пропущенное число.',
  numberNext: 'Какое число следующее?',
  numberSolution: 'Как это решается',
  flagMinutes: '5–7 мин',
  flagSaved: 'Результаты «Флагов» сохранены',
  resultSaved: 'Результаты сохранены в профиле',
  cloudRound: 'Результат сохранится после завершения',
  offlineNotice: 'Сервер недоступен. Эта партия останется в браузере как демо.',
  saveError:
    'Не удалось сохранить партию. Проверьте соединение и попробуйте ещё раз.',
  flagCloudRound: 'Результат сохранится после завершения',
  flagSavedDescription:
    'Партии Flag Master, Geo Challenge и Number IQ сохраняются в гостевом профиле, когда сервер доступен.',
  flagOfflineNotice:
    'Сервер недоступен. Эта партия останется в браузере как демо.',
  flagSaveError:
    'Не удалось сохранить партию. Проверьте соединение и попробуйте ещё раз.',
  flagImage: 'Флаг, страну которого нужно определить',
  flagQuestion: 'Какой стране принадлежит этот флаг?',
  flagSource: 'Читать источник',
  dailyEyebrow: 'НОВЫЙ ДЕНЬ — НОВАЯ ЗАДАЧА',
  dailyTitle: 'Каждый день — открытие.',
  dailyDescription:
    'Ежедневная игра для любопытного ума. Попробуй и двигайся вперёд, день за днём.',
  startDaily: 'Принять вызов дня',
  dailyCompleted: 'Задание дня пройдено',
  tomorrow: 'Возвращайся завтра за новой игрой.',
  dailyNote: 'Игра дня · обновление в 00:00 UTC',
  dailyIntro: 'Твоя игра дня',
  progress: 'Твои маленькие победы',
  progressDescription: 'Каждая игра — повод удивить себя.',
  firstTitle: 'Твоя история начинается с игры.',
  firstDescription:
    'Заверши первую партию, чтобы открыть профиль, личные рекорды и прогресс.',
  pickGame: 'Выбрать игру',
  played: 'Сыграно партий',
  accuracy: 'Точность',
  streak: 'Дней подряд',
  best: 'Личный рекорд',
  viewProfile: 'Мой прогресс',
  notPlayed: 'Первый рекорд впереди',
  points: 'очк.',
  advertisement: 'РЕКЛАМА',
  adPlaceholder: 'Место для тех, кто нас поддержит',
  footer: 'Любопытство ведёт к открытиям.',
  demo: 'Демо',
  demoNotice: 'Демораунды · результаты в этом браузере',
  practice: 'Тренировка',
  dailyMode: 'Задание дня',
  back: 'К играм',
  start: 'Начать партию',
  flagStart: 'Начать партию с флагами',
  gameIntro:
    'Короткое знакомство с игрой. Три вопроса, немного любопытства и новый личный рекорд.',
  timeIntro:
    'Исследуй историю через иллюстрированные карточки. Каждый ответ откроет даты и любопытную деталь.',
  timeRules:
    'Десять вопросов из 300 историй с иллюстрациями. Выбери карточку, изучи даты и любопытную деталь, затем двигайся дальше. За правильный ответ — 100 очков.',
  timeRoundSize: '10 вопросов с иллюстрациями',
  timeFact: 'Любопытная деталь',
  flagGameIntro:
    'Десять флагов со всего мира. После каждого ответа узнаешь немного об их истории.',
  flagRules:
    'Десять вопросов, четыре варианта, по 100 очков за правильный ответ. Таймера нет.',
  flagResultSaved: 'Результат сохранён в вашем профиле.',
  round: 'Раунд',
  of: 'из',
  next: 'Следующий вопрос',
  finish: 'Мой результат',
  correct: 'Верно!',
  incorrect: 'Теперь ты это знаешь!',
  correctAnswer: 'Правильный ответ:',
  resultTitle: 'Любопытство тебе к лицу.',
  resultDescription:
    'Ещё одно открытие. Результат добавлен в твой локальный профиль.',
  again: 'Играть ещё',
  tryAnotherGame: 'Попробуй ещё',
  tryAnotherGameDescription: 'Продолжай открывать новое — выбери другую игру.',
  saveResult: 'Сохрани свой прогресс',
  localOnly: 'Локальный профиль',
  localDescription:
    'Деморезультаты хранятся на этом устройстве. Привяжи Google, чтобы сохранять онлайн-прогресс между устройствами.',
  google: 'Продолжить с Google',
  googleSoon: 'Вход через Google пока не подключён. Можно играть без аккаунта.',
  googleLinkTitle: 'Закрепи гостевой профиль',
  googleLinkDescription:
    'Привяжи Google, чтобы сохранить завершённые онлайн-партии и участвовать в рейтинге. Демопартии останутся в этом браузере.',
  googleLinkAction: 'Привязать Google',
  googleConnecting: 'Открываем Google…',
  googlePrivacy:
    'Запрашиваем только данные профиля и email. Доступа к Gmail у BrainPlay нет.',
  googleSuccess: 'Google подключён. Онлайн-прогресс сохранён.',
  googleError: 'Не удалось выполнить запрос. Попробуй ещё раз.',
  googleConnected: 'Google-аккаунт подключён',
  signOut: 'Выйти',
  rankingMode: 'Классический режим · текущие правила',
  rankingPlace: 'Место',
  rankingPlayer: 'Игрок',
  authTitle: 'Место для новых открытий.',
  authDescription:
    'Результаты, серии дней и любимые игры — всё в одном профиле.',
  editProfile: 'Изменить никнейм',
  nickname: 'Никнейм',
  save: 'Сохранить',
  cancel: 'Отмена',
  saved: 'Никнейм обновлён',
  nicknameHint: 'От 2 до 24 символов',
  history: 'Последние открытия',
  historyPages: 'Страницы истории игр',
  previousPage: 'Предыдущая страница',
  nextPage: 'Следующая страница',
  page: 'Страница',
  game: 'Игра',
  score: 'Результат',
  date: 'Дата',
  reset: 'Удалить локальный прогресс',
  resetTitle: 'Начать заново?',
  resetDescription:
    'Никнейм и все деморезультаты будут удалены из этого браузера. Отменить это действие нельзя.',
  resetConfirm: 'Удалить прогресс',
  rankingTitle: 'Немного дружеского соревнования.',
  rankingDescription:
    'У каждой игры свой рейтинг. Выбери интересную тебе игру.',
  rankingEmpty: 'Стартовая линия свободна.',
  rankingNote:
    'Заверши онлайн-партию и подключи Google для участия. Локальные деморезультаты в рейтинге не участвуют.',
  profileTitle: 'Посмотри, куда ведёт любопытство.',
  guest: 'Любопытный игрок',
  correctAnswers: 'Правильных ответов',
  comingSoon: 'Скоро',
  about: 'О BrainPlay',
  privacy: 'Конфиденциальность',
  privacyText:
    'Язык, никнейм и деморезультаты хранятся в браузере. Завершённые партии Flag Master, Geo Challenge и Number IQ сохраняются в гостевом профиле, когда сервер доступен. Очистка данных браузера удалит локальный прогресс и доступ к гостевому профилю. Неактивные гостевые профили удаляются через 30 дней. Рекламные и аналитические скрипты не загружаются.',
  aboutText:
    'BrainPlay — короткие игры для любопытных. Выбирай любимую, тренируйся в своём темпе и открывай новое каждый день. Это прототип интерфейса с примерами заданий, а не оценка IQ.',
  storageError:
    'Хранилище браузера недоступно. Прогресс сохранится только до закрытия страницы.',
  loading: 'Готовим всё к игре…',
  errorTitle: 'Что-то пошло не так.',
  retry: 'Попробовать снова',
  notFound: 'Этого открытия пока нет на карте.',
  home: 'На главную',
  skip: 'К содержимому',
  roundsHint: 'Выбери ответ, чтобы продолжить.',
  demoRules:
    'За правильный ответ — 100 демоочков. Можно не спешить: в этой версии нет таймера.',
  dailyDoneNote:
    'Первая завершённая партия — твой результат дня. Тренироваться можно сколько угодно.',
};
const uk: Dictionary = {
  games: 'Ігри',
  daily: 'Завдання дня',
  leaderboard: 'Рейтинг',
  profile: 'Мій профіль',
  signIn: 'Увійти',
  menu: 'Відкрити меню',
  language: 'Мова',
  close: 'Закрити',
  eyebrow: 'ЩОДЕННА ПОРЦІЯ ВІДКРИТТІВ',
  heroFirst: 'Трохи гри.',
  heroSecond: 'Більше відкриттів.',
  heroDescription:
    'Довірся цікавості. Обери гру, знайди свій ритм і перетвори коротку перерву на маленьке відкриття.',
  explore: 'Знайти свою гру',
  noAccount: 'Безкоштовно. Без реєстрації.',
  choose: 'Що відкриєш для себе сьогодні?',
  chooseDescription: 'Чотири маленькі світи. Безліч способів здивувати себе.',
  allGames: 'Усі ігри',
  play: 'Грати',
  minutes: '2–3 хв',
  quickRound: '3 демораунди',
  geoRoundSize: '10 запитань із мапою за партію',
  geoIntro:
    'Знаходь країни та штати США безпосередньо на мапі. Кожна партія охоплює різні частини світу.',
  geoRules:
    'Вибери країну або штат за контуром. Мапа підібрана для кожного запитання; після відповіді покажемо твій вибір і правильне місце. Таймера немає.',
  geoAfrica: 'Африка',
  geoAsia: 'Азія',
  geoEurope: 'Європа',
  geoNorthAmerica: 'Північна Америка',
  geoSouthAmerica: 'Південна Америка',
  geoOceania: 'Океанія',
  geoUnitedStates: 'Штати США',
  geoMapLabel: 'Інтерактивна мапа',
  geoMapHint: 'Торкнися потрібного місця на мапі, щоб відповісти.',
  geoMapSource: 'Картографічні дані: Natural Earth / Бюро перепису США',
  geoYouSelected: 'Ти вибрав:',
  geoIncorrect: 'Неправильно. Зеленим позначено правильне місце.',
  geoCorrectMarker: 'Правильне місце',
  geoWrongMarker: 'Твій вибір',
  flagRoundSize: '10 прапорів за партію',
  numberRoundSize: '10 числових задач за партію',
  numberMinutes: '5–7 хв',
  numberIntro:
    'Знайди закономірність ряду. У кожній партії — десять різних задач.',
  numberRules:
    'Обери складність. Після відповіді покажемо короткий розбір. Таймера немає.',
  numberLevel: 'Складність',
  numberMixed: 'Різна',
  numberEasy: 'Легко',
  numberMedium: 'Середньо',
  numberHard: 'Складніше',
  numberMissing: 'Знайди пропущене число.',
  numberNext: 'Яке число наступне?',
  numberSolution: 'Як це розв’язати',
  flagMinutes: '5–7 хв',
  flagSaved: 'Результати «Прапорів» збережено',
  resultSaved: 'Результати збережено у профілі',
  cloudRound: 'Результат збережеться після завершення',
  offlineNotice: 'Сервер недоступний. Ця партія залишиться в браузері як демо.',
  saveError:
    'Не вдалося зберегти партію. Перевірте з’єднання та спробуйте ще раз.',
  flagCloudRound: 'Результат збережеться після завершення',
  flagSavedDescription:
    'Партії Flag Master, Geo Challenge і Number IQ зберігаються у гостьовому профілі, коли сервер доступний.',
  flagOfflineNotice:
    'Сервер недоступний. Ця партія залишиться в браузері як демо.',
  flagSaveError:
    'Не вдалося зберегти партію. Перевірте з’єднання та спробуйте ще раз.',
  flagImage: 'Прапор, країну якого потрібно визначити',
  flagQuestion: 'Якій країні належить цей прапор?',
  flagSource: 'Читати джерело',
  dailyEyebrow: 'НОВИЙ ДЕНЬ — НОВЕ ЗАВДАННЯ',
  dailyTitle: 'Щодня — нове відкриття.',
  dailyDescription:
    'Щоденна гра для допитливого розуму. Спробуй і рухайся вперед, день за днем.',
  startDaily: 'Прийняти виклик дня',
  dailyCompleted: 'Завдання дня пройдено',
  tomorrow: 'Повертайся завтра за новою грою.',
  dailyNote: 'Гра дня · оновлення о 00:00 UTC',
  dailyIntro: 'Твоя гра дня',
  progress: 'Твої маленькі перемоги',
  progressDescription: 'Кожна гра — нагода здивувати себе.',
  firstTitle: 'Твоя історія починається з гри.',
  firstDescription:
    'Заверши першу партію, щоб відкрити профіль, особисті рекорди та прогрес.',
  pickGame: 'Обрати гру',
  played: 'Зіграно партій',
  accuracy: 'Точність',
  streak: 'Днів поспіль',
  best: 'Особистий рекорд',
  viewProfile: 'Мій прогрес',
  notPlayed: 'Перший рекорд попереду',
  points: 'оч.',
  advertisement: 'РЕКЛАМА',
  adPlaceholder: 'Місце для тих, хто нас підтримає',
  footer: 'Цікавість веде до відкриттів.',
  demo: 'Демо',
  demoNotice: 'Демораунди · результати в цьому браузері',
  practice: 'Тренування',
  dailyMode: 'Завдання дня',
  back: 'До ігор',
  start: 'Почати партію',
  flagStart: 'Почати партію з прапорами',
  gameIntro:
    'Коротке знайомство з грою. Три запитання, трохи цікавості та новий особистий рекорд.',
  timeIntro:
    'Досліджуй історію через ілюстровані картки. Кожна відповідь відкриє дати й цікаву деталь.',
  timeRules:
    'Десять запитань із 300 ілюстрованих історій. Обери картку, роздивись дати й цікаву деталь, а потім рухайся далі. За правильну відповідь — 100 очок.',
  timeRoundSize: '10 запитань з ілюстраціями',
  timeFact: 'Цікава деталь',
  flagGameIntro:
    'Десять прапорів з усього світу. Після кожної відповіді дізнаєшся трохи про їхню історію.',
  flagRules:
    'Десять запитань, чотири варіанти, по 100 очок за правильну відповідь. Таймера немає.',
  flagResultSaved: 'Результат збережено у вашому профілі.',
  round: 'Раунд',
  of: 'з',
  next: 'Наступне запитання',
  finish: 'Мій результат',
  correct: 'Правильно!',
  incorrect: 'Тепер ти це знаєш!',
  correctAnswer: 'Правильна відповідь:',
  resultTitle: 'Цікавість тобі личить.',
  resultDescription:
    'Ще одне відкриття. Результат додано до твого локального профілю.',
  again: 'Грати ще',
  tryAnotherGame: 'Спробуй ще',
  tryAnotherGameDescription: 'Продовжуй відкривати нове — обери іншу гру.',
  saveResult: 'Збережи свій прогрес',
  localOnly: 'Локальний профіль',
  localDescription:
    'Деморезультати зберігаються на цьому пристрої. Підключи Google, щоб зберігати онлайн-прогрес між пристроями.',
  google: 'Продовжити з Google',
  googleSoon: 'Вхід через Google ще не підключений. Можна грати без акаунта.',
  googleLinkTitle: 'Закріпи гостьовий профіль',
  googleLinkDescription:
    'Підключи Google, щоб зберегти завершені онлайн-партії та брати участь у рейтингу. Демопартії залишаться в цьому браузері.',
  googleLinkAction: 'Підключити Google',
  googleConnecting: 'Відкриваємо Google…',
  googlePrivacy:
    'Запитуємо лише дані профілю та email. BrainPlay не має доступу до Gmail.',
  googleSuccess: 'Google підключено. Онлайн-прогрес збережено.',
  googleError: 'Не вдалося виконати запит. Спробуй ще раз.',
  googleConnected: 'Google-акаунт підключено',
  signOut: 'Вийти',
  rankingMode: 'Класичний режим · поточні правила',
  rankingPlace: 'Місце',
  rankingPlayer: 'Гравець',
  authTitle: 'Місце для нових відкриттів.',
  authDescription:
    'Результати, серії днів та улюблені ігри — в одному профілі.',
  editProfile: 'Змінити нікнейм',
  nickname: 'Нікнейм',
  save: 'Зберегти',
  cancel: 'Скасувати',
  saved: 'Нікнейм оновлено',
  nicknameHint: 'Від 2 до 24 символів',
  history: 'Останні відкриття',
  historyPages: 'Сторінки історії ігор',
  previousPage: 'Попередня сторінка',
  nextPage: 'Наступна сторінка',
  page: 'Сторінка',
  game: 'Гра',
  score: 'Результат',
  date: 'Дата',
  reset: 'Видалити локальний прогрес',
  resetTitle: 'Почати спочатку?',
  resetDescription:
    'Нікнейм і всі деморезультати буде видалено з цього браузера. Скасувати цю дію неможливо.',
  resetConfirm: 'Видалити прогрес',
  rankingTitle: 'Трохи дружнього змагання.',
  rankingDescription: 'Кожна гра має власний рейтинг. Обери цікаву тобі гру.',
  rankingEmpty: 'Стартова лінія вільна.',
  rankingNote:
    'Заверши онлайн-партію та підключи Google для участі. Локальні деморезультати в рейтингу не беруть участі.',
  profileTitle: 'Поглянь, куди веде цікавість.',
  guest: 'Допитливий гравець',
  correctAnswers: 'Правильних відповідей',
  comingSoon: 'Незабаром',
  about: 'Про BrainPlay',
  privacy: 'Конфіденційність',
  privacyText:
    'Мова, нікнейм і деморезультати зберігаються у браузері. Завершені партії Flag Master, Geo Challenge і Number IQ зберігаються у гостьовому профілі, коли сервер доступний. Очищення даних браузера видалить локальний прогрес і доступ до гостьового профілю. Неактивні гостьові профілі видаляються через 30 днів. Рекламні та аналітичні скрипти не завантажуються.',
  aboutText:
    'BrainPlay — короткі ігри для допитливих. Обирай улюблену, тренуйся у своєму темпі та відкривай нове щодня. Це прототип інтерфейсу з прикладами завдань, а не оцінка IQ.',
  storageError:
    'Сховище браузера недоступне. Прогрес збережеться лише до закриття сторінки.',
  loading: 'Готуємо все до гри…',
  errorTitle: 'Щось пішло не так.',
  retry: 'Спробувати знову',
  notFound: 'Цього відкриття ще немає на мапі.',
  home: 'На головну',
  skip: 'До вмісту',
  roundsHint: 'Обери відповідь, щоб продовжити.',
  demoRules:
    'За правильну відповідь — 100 демоочок. Можна не поспішати: у цій версії немає таймера.',
  dailyDoneNote:
    'Перша завершена партія — твій результат дня. Тренуватися можна скільки завгодно.',
};
export const dictionaries: Record<Locale, Dictionary> = { en, uk, ru };

export const numberRuleCopy = {
  en: {
    add: 'The same amount is added each time.',
    subtract: 'The same amount is subtracted each time.',
    multiply: 'Each number is multiplied by the same factor.',
    squares: 'These are consecutive square numbers with the same extra amount.',
    growing: 'The differences grow by a fixed amount.',
    cubes: 'These are consecutive cube numbers with the same extra amount.',
    lanesAdd: 'Odd and even positions form two separate addition sequences.',
    multiplyAdd: 'Multiply the previous number, then add the same amount.',
    lanesMultiply:
      'Odd and even positions form two separate multiplication sequences.',
    previousSum: 'Each number is the sum of the two before it.',
    alternate: 'The operations alternate: add, then multiply.',
    threeLanes: 'Every third number belongs to the same addition sequence.',
  },
  uk: {
    add: 'До кожного числа додаємо ту саму величину.',
    subtract: 'Від кожного числа віднімаємо ту саму величину.',
    multiply: 'Кожне число множимо на той самий множник.',
    squares: 'Це квадрати послідовних чисел з однаковим додатком.',
    growing: 'Різниця між числами щоразу зростає на ту саму величину.',
    cubes: 'Це куби послідовних чисел з однаковим додатком.',
    lanesAdd: 'Непарні та парні позиції утворюють два окремі ряди додавання.',
    multiplyAdd: 'Помнож попереднє число, а потім додай ту саму величину.',
    lanesMultiply:
      'Непарні та парні позиції утворюють два окремі ряди множення.',
    previousSum: 'Кожне число дорівнює сумі двох попередніх.',
    alternate: 'Дії чергуються: додавання, потім множення.',
    threeLanes: 'Кожне третє число належить до одного ряду додавання.',
  },
  ru: {
    add: 'К каждому числу прибавляем одну и ту же величину.',
    subtract: 'От каждого числа отнимаем одну и ту же величину.',
    multiply: 'Каждое число умножаем на один и тот же множитель.',
    squares: 'Это квадраты последовательных чисел с одинаковой добавкой.',
    growing: 'Разница между числами каждый раз растёт на одну величину.',
    cubes: 'Это кубы последовательных чисел с одинаковой добавкой.',
    lanesAdd: 'Нечётные и чётные позиции образуют два отдельных ряда сложения.',
    multiplyAdd:
      'Умножь предыдущее число, затем прибавь одну и ту же величину.',
    lanesMultiply:
      'Нечётные и чётные позиции образуют два отдельных ряда умножения.',
    previousSum: 'Каждое число равно сумме двух предыдущих.',
    alternate: 'Действия чередуются: сложение, затем умножение.',
    threeLanes: 'Каждое третье число относится к одному ряду сложения.',
  },
} as const;

// Historical answer labels, reveal dates, questions, and facts are kept together
// here so illustrations remain reusable across all three languages.
export const timeTravelerContent = {
  en: {
    cards: {
      sumer: { title: 'Sumerian cities', dates: 'from c. 3200 BCE' },
      egypt: { title: 'Old Kingdom Egypt', dates: 'c. 2650–2150 BCE' },
      shang: { title: 'Shang dynasty', dates: 'c. 1600–1046 BCE' },
      maya: { title: 'Classic Maya', dates: 'c. 250–900 CE' },
      indus: { title: 'Indus Valley cities', dates: 'c. 2600–1900 BCE' },
      persia: { title: 'Achaemenid Persia', dates: 'c. 550–330 BCE' },
      rome: { title: 'Ancient Rome', dates: 'c. 509 BCE–476 CE (West)' },
      mali: { title: 'Mali Empire', dates: '13th–15th centuries CE' },
      song: { title: 'Song dynasty', dates: '960–1279 CE' },
      inca: { title: 'Inca Empire', dates: 'c. 1400–1532 CE' },
      abbasid: { title: 'Abbasid Baghdad', dates: '762–1258 CE' },
      viking: { title: 'Viking Age Scandinavia', dates: 'c. 800–1050 CE' },
      greece: { title: 'Ancient Greece', dates: 'c. 800–146 BCE' },
      phoenicia: { title: 'Phoenician cities', dates: 'c. 1500–300 BCE' },
      aksum: { title: 'Kingdom of Aksum', dates: '1st–8th centuries CE' },
      khmer: { title: 'Khmer Empire', dates: '9th–15th centuries CE' },
      zimbabwe: { title: 'Great Zimbabwe', dates: '11th–15th centuries CE' },
      mexica: { title: 'Mexica Empire', dates: '1428–1521 CE' },
      benin: { title: 'Kingdom of Benin', dates: 'c. 11th–19th centuries CE' },
      mughal: { title: 'Mughal Empire', dates: '1526–1857 CE' },
      un1945: { title: 'United Nations', dates: 'founded 1945' },
      sputnik1957: { title: 'Sputnik 1', dates: '1957' },
      shinkansen1964: { title: 'Tōkaidō Shinkansen', dates: 'opened 1964' },
      apollo1969: { title: 'Apollo 11', dates: '1969' },
      earthDay1970: { title: 'First Earth Day', dates: '1970' },
      voyager1977: { title: 'Voyager probes', dates: 'launched 1977' },
      ibmPc1981: { title: 'IBM PC', dates: 'introduced 1981' },
      berlinWall1989: { title: 'Berlin Wall opening', dates: '1989' },
      babylon: { title: 'Hammurabi’s Babylon', dates: 'c. 1750 BCE' },
      olmec: { title: 'Olmec culture', dates: 'c. 1200–400 BCE' },
      tang: { title: 'Tang dynasty', dates: '618–907 CE' },
      florence: { title: 'Renaissance Florence', dates: '15th century CE' },
      edo: { title: 'Edo-period Japan', dates: '1603–1868 CE' },
      stockton1825: { title: 'Stockton–Darlington', dates: '1825' },
      wright1903: { title: 'Wright Flyer', dates: '1903' },
      penicillin1928: { title: 'Penicillin discovery', dates: '1928' },
      gobekli: { title: 'Göbekli Tepe', dates: 'c. 9600–8200 BCE' },
      catalhoyuk: { title: 'Çatalhöyük', dates: 'c. 7400–6200 BCE' },
      stonehenge: { title: 'Stonehenge', dates: 'c. 3000–1600 BCE' },
      urZiggurat: { title: 'Ziggurat of Ur', dates: 'c. 2100 BCE' },
      knossos: { title: 'Palace of Knossos', dates: '2nd millennium BCE' },
      hattusa: { title: 'Hittite Hattusa', dates: '2nd millennium BCE' },
      mycenae: { title: 'Mycenae', dates: 'c. 1600–1100 BCE' },
      meroe: { title: 'Kushite Meroe', dates: 'c. 300 BCE–350 CE' },
      carthage: { title: 'Punic Carthage', dates: '9th–2nd centuries BCE' },
      cerveteri: {
        title: 'Etruscan Cerveteri',
        dates: '9th–1st centuries BCE',
      },
      qinWarriors: { title: 'Qin terracotta army', dates: 'c. 210 BCE' },
      chavin: { title: 'Chavín', dates: 'c. 1500–300 BCE' },
      nazcaLines: { title: 'Nasca Lines', dates: 'c. 500 BCE–500 CE' },
      jericho: { title: 'Neolithic Jericho', dates: '9th–8th millennia BCE' },
      lascaux: { title: 'Lascaux Cave', dates: 'c. 17,000 BCE' },
      skaraBrae: { title: 'Skara Brae', dates: 'c. 3100–2500 BCE' },
      caral: { title: 'Caral-Supe', dates: 'c. 3000–1800 BCE' },
      ugarit: { title: 'Ugarit', dates: 'c. 1450–1185 BCE' },
      nineveh: { title: 'Assyrian Nineveh', dates: 'c. 700–612 BCE' },
      petra: { title: 'Nabataean Petra', dates: '4th century BCE–106 CE' },
      teotihuacan: { title: 'Teotihuacan', dates: '1st–7th centuries CE' },
      hagiaSophia: { title: 'Hagia Sophia', dates: 'completed 537 CE' },
      aachen: { title: 'Aachen Palatine Chapel', dates: 'c. 790–800 CE' },
      cordoba: { title: 'Córdoba Great Mosque', dates: 'begun 786 CE' },
      borobudur: { title: 'Borobudur', dates: '8th–9th centuries CE' },
      lalibela: { title: 'Lalibela Churches', dates: '12th–13th centuries CE' },
      kilwa: { title: 'Kilwa Kisiwani', dates: 'c. 13th–15th centuries CE' },
      bukhara: { title: 'Medieval Bukhara', dates: '10th–12th centuries CE' },
      samarkand: { title: 'Samarkand', dates: '15th–17th centuries CE' },
      djenne: { title: 'Historic Djenné', dates: '15th–16th centuries CE' },
      cahokia: { title: 'Cahokia', dates: 'c. 1050–1150 CE' },
      chichenItza: { title: 'Chichén Itzá', dates: 'c. 800–1200 CE' },
      alhambra: { title: 'Nasrid Alhambra', dates: '13th–15th centuries CE' },
      haiti1804: { title: 'Haitian Independence', dates: '1804' },
      rocket1829: { title: "Stephenson's Rocket", dates: '1829' },
      faraday1831: { title: "Faraday's Induction", dates: '1831' },
      morse1844: { title: "Morse's Telegraph", dates: '1844' },
      senecaFalls1848: { title: 'Seneca Falls Convention', dates: '1848' },
      greatExhibition1851: { title: 'Great Exhibition', dates: '1851' },
      nightingale1854: { title: 'Nightingale at Scutari', dates: '1854–1856' },
      darwin1859: { title: "Darwin's Origin of Species", dates: '1859' },
      emancipation1863: { title: 'Emancipation Proclamation', dates: '1863' },
      meiji1868: { title: 'Meiji Restoration', dates: 'from 1868' },
      suez1869: { title: 'Suez Canal Opening', dates: '1869' },
      bell1876: { title: "Bell's Telephone", dates: '1876' },
      lightbulb1879: { title: 'Menlo Park Electric Light', dates: '1879' },
      liberty1886: { title: 'Statue of Liberty', dates: 'dedicated 1886' },
      eiffel1889: { title: 'Eiffel Tower', dates: '1889' },
      xray1895: { title: "Röntgen's X-rays", dates: '1895' },
      olympics1896: { title: 'Athens Olympic Games', dates: '1896' },
      adwa1896: { title: 'Battle of Adwa', dates: '1896' },
      philippines1896: { title: 'Philippine Revolution', dates: 'began 1896' },
      marconi1897: { title: "Marconi's Wireless Signals", dates: '1897' },
      blitz1940: { title: 'London Blitz Shelters', dates: '1940–1941' },
      normandy1944: { title: 'Normandy Landings', dates: '6 June 1944' },
      partition1947: { title: 'Partition of British India', dates: '1947' },
      udhr1948: { title: 'Human Rights Declaration', dates: '1948' },
      dna1953: { title: 'DNA Double Helix', dates: '1953' },
      brown1954: { title: 'Brown v. Board of Education', dates: '1954' },
      bandung1955: { title: 'Bandung Conference', dates: '1955' },
      nasa1958: { title: 'NASA Founded', dates: '1958' },
      gagarin1961: { title: "Gagarin's Vostok 1", dates: '1961' },
      march1963: { title: 'March on Washington', dates: '1963' },
      mexico1968: { title: 'Mexico City Olympics', dates: '1968' },
      microprocessor1971: { title: 'Intel 4004 Microprocessor', dates: '1971' },
      mobile1973: { title: 'Handheld Mobile Phone', dates: '1973' },
      apolloSoyuz1975: { title: 'Apollo–Soyuz Docking', dates: '1975' },
      smallpox1980: { title: 'Smallpox Eradication', dates: 'declared 1980' },
      internet1983: { title: 'ARPANET TCP/IP Switch', dates: '1983' },
      liveAid1985: { title: 'Live Aid Concerts', dates: '1985' },
      chornobyl1986: { title: 'Chornobyl Nuclear Accident', dates: '1986' },
      montreal1987: { title: 'Montreal Protocol', dates: '1987' },
      web1989: { title: 'World Wide Web Proposal', dates: '1989' },
      chauvet: { title: 'Chauvet Cave', dates: 'c. 32,000–30,000 years ago' },
      carnac: { title: 'Carnac Megaliths', dates: '5th–3rd millennia BCE' },
      banChiang: { title: 'Ban Chiang', dates: '2nd–1st millennia BCE' },
      dilmun: { title: 'Dilmun Burial Mounds', dates: 'c. 2050–1750 BCE' },
      giza: { title: 'Great Pyramid of Giza', dates: 'c. 2600 BCE' },
      abuSimbel: { title: 'Abu Simbel', dates: '13th century BCE' },
      thebes: { title: 'Ancient Thebes', dates: '2nd–1st millennia BCE' },
      sanchi: { title: 'Sanchi Stupas', dates: 'from 3rd century BCE' },
      ajanta: {
        title: 'Ajanta Caves',
        dates: '2nd century BCE–6th century CE',
      },
      pasargadae: { title: 'Pasargadae', dates: '6th century BCE' },
      ephesus: { title: 'Roman Ephesus', dates: '1st–2nd centuries CE' },
      pompeii: { title: 'Pompeii', dates: 'buried 79 CE' },
      colosseum: { title: 'Roman Colosseum', dates: 'opened 80 CE' },
      hadriansWall: { title: "Hadrian's Wall", dates: 'from 122 CE' },
      palmyra: { title: 'Palmyra', dates: '1st–3rd centuries CE' },
      hegra: {
        title: 'Nabataean Hegra',
        dates: '1st century BCE–1st century CE',
      },
      leptisMagna: { title: 'Leptis Magna', dates: '2nd–3rd centuries CE' },
      delphi: { title: 'Delphi Sanctuary', dates: '6th–4th centuries BCE' },
      mogao: { title: 'Mogao Caves', dates: 'from 4th century CE' },
      anuradhapura: { title: 'Anuradhapura', dates: 'from 4th century BCE' },
      kyivSophia: { title: 'Saint Sophia of Kyiv', dates: '11th century CE' },
      bulguksa: { title: 'Bulguksa Temple', dates: '8th century CE' },
      himeji: { title: 'Himeji Castle', dates: 'early 17th century CE' },
      forbiddenCity: { title: 'Forbidden City', dates: 'completed 1420 CE' },
      machuPicchu: { title: 'Machu Picchu', dates: '15th century CE' },
      marrakesh: { title: 'Medieval Marrakesh', dates: 'from 1070 CE' },
      fez: { title: 'Medina of Fez', dates: '9th–14th centuries CE' },
      kairouan: { title: 'Kairouan', dates: 'founded 670 CE' },
      timbuktu: { title: 'Timbuktu', dates: '15th–16th centuries CE' },
      askia: { title: 'Tomb of Askia', dates: '1495 CE' },
      sukhothai: {
        title: 'Sukhothai Kingdom',
        dates: '13th–14th centuries CE',
      },
      bagan: { title: 'Bagan', dates: '11th–13th centuries CE' },
      bamiyan: { title: 'Bamiyan Valley', dates: '6th–7th centuries CE' },
      greatWall: { title: 'Ming Great Wall', dates: '14th–17th centuries CE' },
      montSaintMichel: {
        title: 'Mont-Saint-Michel',
        dates: '11th–16th centuries CE',
      },
      venice: { title: 'Medieval Venice', dates: '13th–15th centuries CE' },
      lubeck: { title: 'Hanseatic Lübeck', dates: '13th–15th centuries CE' },
      novgorod: { title: 'Medieval Novgorod', dates: '11th–15th centuries CE' },
      haeinsa: { title: 'Haeinsa Woodblocks', dates: '13th century CE' },
      shibam: { title: 'Old Shibam', dates: '16th century CE' },
      zhengHe: { title: "Zheng He's Voyages", dates: '1405–1433 CE' },
      gutenberg: { title: "Gutenberg's Press", dates: 'c. 1455 CE' },
      istanbul1453: { title: 'Ottoman Constantinople', dates: '1453 CE' },
      tenochtitlan: { title: 'Tenochtitlan', dates: '14th–16th centuries CE' },
      fatehpurSikri: { title: 'Fatehpur Sikri', dates: '1570s–1580s CE' },
      sistineCeiling: {
        title: 'Sistine Chapel Ceiling',
        dates: '1508–1512 CE',
      },
      copernicus1543: { title: "Copernicus's Book", dates: '1543 CE' },
      suleymaniye: { title: 'Süleymaniye Mosque', dates: '1550–1557 CE' },
      globe1599: { title: 'The Globe Theatre', dates: 'opened 1599 CE' },
      galileo1609: { title: "Galileo's Telescope", dates: 'from 1609 CE' },
      tajMahal: { title: 'Taj Mahal', dates: '1632–1648 CE' },
      isfahan: { title: 'Safavid Isfahan', dates: '17th century CE' },
      versailles: {
        title: 'Palace of Versailles',
        dates: '17th–18th centuries CE',
      },
      newton1687: { title: "Newton's Principia", dates: '1687 CE' },
      petersburg1703: {
        title: 'Founding Saint Petersburg',
        dates: 'from 1703 CE',
      },
      declaration1776: {
        title: 'US Declaration of Independence',
        dates: '1776 CE',
      },
      montgolfier1783: { title: 'Montgolfier Balloon', dates: '1783 CE' },
      french1789: { title: 'French Revolution', dates: 'from 1789 CE' },
      wollstonecraft1792: { title: 'Rights of Woman', dates: '1792 CE' },
      jenner1796: { title: "Jenner's Vaccination", dates: '1796 CE' },
      nobel1901: { title: 'First Nobel Prizes', dates: '1901' },
      einstein1905: { title: "Einstein's Miracle Year", dates: '1905' },
      modelT1908: { title: 'Ford Model T', dates: '1908' },
      southPole1911: {
        title: 'Amundsen at the South Pole',
        dates: '14 December 1911',
      },
      titanic1912: { title: "Titanic's Voyage", dates: '1912' },
      panama1914: { title: 'Panama Canal Opens', dates: '1914' },
      russian1917: { title: 'Russian Revolution', dates: '1917' },
      flu1918: { title: '1918 Influenza Pandemic', dates: '1918–1919' },
      suffrage1920: { title: 'US Nineteenth Amendment', dates: '1920' },
      tutankhamun1922: {
        title: "Tutankhamun's Tomb",
        dates: 'discovered 1922',
      },
      turkey1923: { title: 'Republic of Türkiye', dates: '1923' },
      lindbergh1927: { title: 'Spirit of St. Louis', dates: '1927' },
      crash1929: { title: 'Wall Street Crash', dates: '1929' },
      saltMarch1930: { title: 'Salt March', dates: '1930' },
      earhart1932: { title: "Earhart's Atlantic Flight", dates: '1932' },
      war1939: { title: 'War in Europe Begins', dates: '1939' },
      hubble1990: { title: 'Hubble Space Telescope', dates: '1990' },
      mandela1994: { title: 'South Africa Votes', dates: '1994' },
      pathfinder1997: { title: 'Mars Pathfinder', dates: '1997' },
      iss1998: { title: 'ISS Assembly Begins', dates: '1998' },
      monteAlban: { title: 'Monte Albán', dates: 'c. 500 BCE–900 CE' },
      palenque: { title: 'Maya Palenque', dates: 'c. 500–700 CE' },
      tiwanaku: { title: 'Tiwanaku', dates: 'c. 500–900 CE' },
      mesaVerde: {
        title: 'Mesa Verde Dwellings',
        dates: '12th–13th centuries CE',
      },
      rapaNui: { title: 'Rapa Nui Moai', dates: 'c. 13th–16th centuries CE' },
      brihadeeswara: { title: 'Brihadisvara Temple', dates: 'c. 1010 CE' },
      mapungubwe: { title: 'Kingdom of Mapungubwe', dates: 'c. 1200–1300 CE' },
      harar: { title: 'Walled Harar', dates: 'from 16th century CE' },
      ussr1991: { title: 'End of the Soviet Union', dates: '1991' },
      beijing1995: { title: "Beijing Women's Conference", dates: '1995' },
      dolly1996: { title: 'Dolly the Sheep', dates: 'born 1996' },
      liverpool1830: {
        title: 'Liverpool–Manchester Railway',
        dates: 'opened 1830',
      },
      tokyo1964: { title: 'Tokyo Olympic Games', dates: '1964' },
      transcontinental1915: {
        title: 'Transcontinental telephone call',
        dates: '1915',
      },
      transatlantic1927: {
        title: 'Transatlantic telephone call',
        dates: '1927',
      },
      segoviaAqueduct: { title: 'Segovia Aqueduct', dates: 'Roman era' },
      tarragonaAqueduct: { title: 'Les Ferreres Aqueduct', dates: 'Roman era' },
      elvasAqueduct: {
        title: 'Amoreira Aqueduct',
        dates: 'late 16th–early 17th century',
      },
      epidaurusTheatre: {
        title: 'Theatre of Epidaurus',
        dates: '4th century BCE',
      },
      benz1886: { title: 'Benz Patent-Motorwagen', dates: '1886' },
      beetle1945: {
        title: 'Volkswagen Beetle',
        dates: 'mass production from 1945',
      },
      mini1959: { title: 'Classic Mini', dates: 'launched 1959' },
      scott1912: {
        title: 'Scott’s South Pole expedition',
        dates: 'reached the pole in 1912',
      },
      mawson1911: {
        title: 'Mawson’s Antarctic expedition',
        dates: '1911–1914',
      },
      shackleton1914: {
        title: 'Shackleton’s Endurance expedition',
        dates: '1914–1917',
      },
      charlesBalloon1783: {
        title: 'Charles’s hydrogen balloon',
        dates: '1783',
      },
      blanchardBalloon1785: {
        title: 'Balloon crossing of the Channel',
        dates: '1785',
      },
      zeppelin1900: { title: 'First Zeppelin flight', dates: '1900' },
      oscars1929: { title: 'First Academy Awards', dates: '1929' },
      pulitzer1917: { title: 'First Pulitzer Prizes', dates: '1917' },
      fields1936: { title: 'First Fields Medals', dates: '1936' },
      panic1907: { title: 'Panic of 1907', dates: '1907' },
      blackMonday1987: { title: 'Black Monday', dates: '1987' },
      crisis2008: { title: 'Global financial crisis', dates: '2007–2009' },
      kamakuraSamurai: { title: 'Kamakura samurai', dates: '1185–1333 CE' },
      sengokuSamurai: {
        title: 'Sengoku samurai',
        dates: '15th–16th centuries CE',
      },
      edoSamurai: { title: 'Edo-period samurai', dates: '1603–1868 CE' },
      merian1705: { title: 'Merian’s insect studies', dates: 'published 1705' },
      wallace1854: { title: 'Wallace’s Malay expedition', dates: '1854–1862' },
      mendel1865: { title: 'Mendel’s pea experiments', dates: 'reported 1865' },
      tgv1981: { title: 'French TGV', dates: 'service began 1981' },
      ice1991: { title: 'German ICE', dates: 'service began 1991' },
      eurostar1994: { title: 'Eurostar', dates: 'service began 1994' },
      dynatac1984: {
        title: 'DynaTAC handheld phone',
        dates: 'commercially available 1984',
      },
      vodafone1985: { title: 'First Vodafone mobile call', dates: '1985' },
      sms1992: { title: 'First SMS message', dates: '1992' },
    },
    questions: {
      clay: {
        prompt:
          'A scribe presses wedge-shaped marks into a clay tablet. Which civilization began this writing tradition?',
        fact: 'The earliest writing in Sumerian cities helped people record and distribute food supplies.',
      },
      papyrus: {
        prompt:
          'During which of these periods were the great pyramids at Giza built?',
        fact: 'The three famous Giza pyramids belonged to the kings Khufu, Khafre, and Menkaure.',
      },
      bronze: {
        prompt:
          'Which dynasty cast elaborate bronze vessels for rituals honoring ancestors?',
        fact: 'Shang bronze vessels could hold food or drink offerings. Their intricate surfaces often showed animal motifs.',
      },
      cacao: {
        prompt:
          'At whose ancient courts might a noble drink frothy cacao from a decorated cup?',
        fact: 'Classic Maya artists painted cacao cups; pouring the drink between vessels helped create its froth.',
      },
      indusDrain: {
        prompt:
          'At Mohenjo-daro, which civilization built brick streets with drains and public baths?',
        fact: 'The city had wells, bathing areas, and an elaborate drainage system beneath its planned streets.',
      },
      indusSeals: {
        prompt:
          'Which civilization left small stone seals with animal images and signs still not securely deciphered?',
        fact: 'Many Indus seals show an animal above a short line of signs that scholars still cannot read with certainty.',
      },
      persiaPersepolis: {
        prompt:
          'At which empire’s ceremonial center did stone stairways show processions of gift bearers?',
        fact: 'The reliefs of Persepolis portrayed people from across the Achaemenid Empire approaching the royal court.',
      },
      persiaRoad: {
        prompt:
          'Which empire linked Sardis and Susa with a Royal Road for travel and messages?',
        fact: 'The Persian Royal Road helped communication, trade, and taxation across a vast empire.',
      },
      romeAqueduct: {
        prompt:
          'Which civilization built the Pont du Gard aqueduct to carry water toward Nîmes?',
        fact: 'The Pont du Gard carried water across a river on a roughly 50-kilometer route to ancient Nîmes.',
      },
      romeAppia: {
        prompt:
          'The Via Appia first connected Rome and Capua in 312 BCE. Who built it?',
        fact: 'The Appian Way later grew into a major route for travel, trade, and Roman expansion.',
      },
      maliMusa: {
        prompt:
          'Mansa Musa’s famous pilgrimage to Mecca drew attention to the wealth of which empire?',
        fact: 'His 1324–25 journey through Cairo made Mali’s gold wealth known far beyond West Africa.',
      },
      maliTimbuktu: {
        prompt:
          'Which empire helped Timbuktu grow as a crossroads for salt, gold, and books?',
        fact: 'Timbuktu’s merchants traded salt and gold, while its scholars collected and exchanged manuscripts.',
      },
      songType: {
        prompt:
          'In which dynasty did Bi Sheng arrange reusable clay pieces to print pages?',
        fact: 'Bi Sheng developed clay movable type around 1041–1048, though woodblock printing remained common.',
      },
      songMoney: {
        prompt: 'Which dynasty issued government paper money in the 1120s?',
        fact: 'Song China’s growing trade helped make paper currency useful in everyday exchange.',
      },
      incaQuipu: {
        prompt:
          'Which empire’s officials recorded goods and people with knotted cords called quipu?',
        fact: 'The cords, colors, and knots of a quipu could record counts and other information.',
      },
      incaRoad: {
        prompt:
          'Whose road network crossed the Andes with stone paths, stairs, and bridges?',
        fact: 'The Qhapaq Ñan extended more than 30,000 kilometers and reached its widest extent in the 15th century.',
      },
      abbasidWisdom: {
        prompt:
          'Under which rulers did Baghdad’s House of Wisdom gather and study scientific texts?',
        fact: 'Scholars in Abbasid Baghdad translated, studied, and preserved knowledge from several traditions.',
      },
      abbasidTranslations: {
        prompt:
          'In which dynasty’s Baghdad were works in Greek, Sanskrit, and Persian translated into Arabic?',
        fact: 'Between the 8th and 10th centuries, Baghdad became a major center of scientific study.',
      },
      vikingShips: {
        prompt:
          'Which seafarers crossed the North Atlantic in ships to settle Iceland and Greenland?',
        fact: 'Scandinavian voyagers reached Britain, Iceland, Greenland, and even North America by sea.',
      },
      vikingGreenland: {
        prompt:
          'Who sailed from Scandinavia to Greenland centuries before Columbus crossed the Atlantic?',
        fact: 'Viking seafarers reached Greenland in stages across the North Atlantic.',
      },
      greeceOlympia: {
        prompt:
          'Where were the Olympic Games held every four years beginning in 776 BCE?',
        fact: 'Athletes from Greek cities gathered at Olympia; victors received olive wreaths.',
      },
      greeceParthenon: {
        prompt:
          'Which civilization built the Parthenon on the Acropolis of Athens?',
        fact: 'The Parthenon was built in the 5th century BCE during an ambitious Athenian building program.',
      },
      phoeniciaPurple: {
        prompt:
          'Which seafaring cities made prized purple dye from murex sea snails?',
        fact: 'Phoenician Tyre and Sidon traded purple cloth throughout the Mediterranean.',
      },
      phoeniciaAlphabet: {
        prompt: 'Whose alphabet was adopted and adapted by the ancient Greeks?',
        fact: 'Phoenician traders spread their alphabet around the Mediterranean; Greek letters grew from it.',
      },
      aksumStelae: {
        prompt:
          'Which kingdom raised giant carved stone stelae in the Ethiopian highlands?',
        fact: 'Some Aksumite stelae were carved to resemble multistory buildings.',
      },
      aksumTrade: {
        prompt:
          'Which African kingdom controlled Red Sea trade through the port of Adulis?',
        fact: 'Aksum linked inland African routes with Arabia and the wider Red Sea world.',
      },
      khmerWat: {
        prompt: 'Which empire built the great temple complex of Angkor Wat?',
        fact: 'Angkor Wat is one of many monumental temples in the vast Angkor landscape.',
      },
      khmerWater: {
        prompt:
          'Whose capital at Angkor included vast reservoirs, canals, and dykes?',
        fact: 'The Khmer landscape at Angkor combined temples with an extensive water system.',
      },
      zimbabweWalls: {
        prompt:
          'Which African city raised a vast granite enclosure without mortar?',
        fact: 'Shona builders at Great Zimbabwe stacked carefully cut granite blocks into sweeping walls.',
      },
      zimbabweTrade: {
        prompt:
          'Where did archaeologists find Chinese porcelain and coins from Kilwa among stone ruins?',
        fact: 'Finds at Great Zimbabwe reveal trade connections reaching the Indian Ocean world.',
      },
      mexicaLake: {
        prompt:
          'Whose capital Tenochtitlan stood in Lake Texcoco, linked to shore by causeways?',
        fact: 'Canoes moved along Tenochtitlan’s canals, while three raised causeways crossed the lake.',
      },
      mexicaPrecinct: {
        prompt:
          'Which empire’s lake capital had a great sacred precinct at its center?',
        fact: 'Tenochtitlan’s sacred precinct included temples, a ballcourt, and schools for young nobles.',
      },
      beninPlaques: {
        prompt:
          'Which kingdom decorated its royal palace pillars with cast brass relief plaques?',
        fact: 'Benin’s plaques portrayed court life, rulers, rituals, and historical events.',
      },
      beninCasting: {
        prompt:
          'Whose court artists cast brass plaques using the lost-wax technique?',
        fact: 'Many famous “Benin Bronzes” are actually made of brass, not bronze.',
      },
      mughalTaj: {
        prompt: 'Which empire built the Taj Mahal in memory of Mumtaz Mahal?',
        fact: 'Shah Jahan commissioned the white-marble mausoleum in Agra in the 17th century.',
      },
      mughalFatehpur: {
        prompt:
          'Under which empire did Akbar build the planned capital of Fatehpur Sikri?',
        fact: 'Fatehpur Sikri served as a Mughal capital for only about ten years.',
      },
      unCharter: {
        prompt:
          'After World War II, delegates from 50 countries signed a Charter in San Francisco. What did they create?',
        fact: 'The United Nations Charter was signed in June 1945 and came into force that October.',
      },
      unAssembly: {
        prompt:
          'Delegates from 51 countries first met as a General Assembly in London in 1946. Which organization was it?',
        fact: 'The first UN General Assembly opened on 10 January 1946 at Central Hall, Westminster.',
      },
      sputnikFirst: {
        prompt:
          'Which small metal sphere with four antennas became the first artificial satellite of Earth?',
        fact: 'The Soviet Union launched Sputnik 1 on 4 October 1957, opening the Space Age.',
      },
      sputnikSignals: {
        prompt:
          'Radio listeners heard simple beeps from which object orbiting Earth in 1957?',
        fact: 'Sputnik 1 circled Earth roughly every 96 minutes and broadcast a radio signal.',
      },
      shinkansenRoute: {
        prompt:
          'Which new train line linked Tokyo and Osaka when it opened in 1964?',
        fact: 'The Tōkaidō Shinkansen began service in 1964, connecting Japan’s largest metropolitan areas.',
      },
      shinkansenTime: {
        prompt:
          'Which train cut the Tokyo–Osaka journey from 6½ hours to four when it opened?',
        fact: 'At first, the Tōkaidō Shinkansen cut the Tokyo–Osaka journey from 6½ hours to four.',
      },
      apolloLanding: {
        prompt: 'Which mission first landed people on the Moon in July 1969?',
        fact: 'Apollo 11’s lunar module Eagle landed in the Sea of Tranquility.',
      },
      apolloCollins: {
        prompt:
          'Armstrong and Aldrin walked on the Moon while Michael Collins waited in orbit. Which mission was this?',
        fact: 'Collins piloted Apollo 11’s command module Columbia as the others explored the surface.',
      },
      earthDayCrowds: {
        prompt:
          'What 1970 event drew roughly 20 million Americans into environmental demonstrations?',
        fact: 'The first Earth Day took place on 22 April 1970 across the United States.',
      },
      earthDayAgency: {
        prompt:
          'Which 1970 public event helped put environmental protection on the U.S. national agenda?',
        fact: 'The first Earth Day came months before the U.S. Environmental Protection Agency was created.',
      },
      voyagerRecord: {
        prompt:
          'Which twin spacecraft carried gold-plated records of Earth’s images and sounds?',
        fact: 'Both Voyager probes carried Golden Records with greetings, music, natural sounds, and images.',
      },
      voyagerOrder: {
        prompt:
          'In which 1977 space project did the craft numbered “2” launch before “1”?',
        fact: 'Voyager 2 launched on 20 August 1977; Voyager 1 followed on 5 September.',
      },
      ibmPcLaunch: {
        prompt:
          'Which 1981 computer helped make an open architecture an industry standard?',
        fact: 'The IBM 5150 became so influential that “PC” grew into a general term.',
      },
      ibmPcSoftware: {
        prompt:
          'Which 1981 desktop computer launched with VisiCalc and EasyWriter software?',
        fact: 'The original IBM PC could process text and spreadsheets as well as run games.',
      },
      berlinWallOpening: {
        prompt:
          'Which barrier opened at Berlin border crossings on 9 November 1989?',
        fact: 'After a new travel rule was announced, crowds streamed through the Berlin Wall crossings.',
      },
      berlinWallBorder: {
        prompt:
          'People celebrated New Year’s Eve 1989 atop which former barrier by Brandenburg Gate?',
        fact: 'The Berlin Wall opened in November; by the end of December, Berliners celebrated on top of it.',
      },
      babylonStele: {
        prompt:
          'Which kingdom’s ruler had hundreds of judgments carved on a black stone stele?',
        fact: 'Hammurabi’s stele records 282 legal judgments about family, trade, work, and more.',
      },
      babylonShamash: {
        prompt:
          'Which kingdom left a stele showing King Hammurabi before the sun god Shamash?',
        fact: 'The relief at the top of the Babylonian stele shows Shamash granting the king symbols of authority.',
      },
      olmecHeads: {
        prompt:
          'Which culture carved enormous stone heads with distinctive headdresses?',
        fact: 'Olmec sculptors gave each basalt head individual features; many may portray rulers.',
      },
      olmecBasalt: {
        prompt:
          'Who moved huge basalt boulders along rivers before carving them into heads?',
        fact: 'The Olmec brought heavy stone from the Tuxtla Mountains to ceremonial centers such as La Venta.',
      },
      tangSutra: {
        prompt:
          'During which dynasty was the dated Diamond Sutra scroll printed in 868 CE?',
        fact: 'The Diamond Sutra is the earliest surviving complete printed book with a date.',
      },
      tangChangan: {
        prompt:
          'Which dynasty’s capital Chang’an welcomed merchants and pilgrims from the Silk Roads?',
        fact: 'Tang Chang’an was a cosmopolitan city where visitors brought goods, faiths, and new ideas.',
      },
      florenceDome: {
        prompt:
          'In which city did Brunelleschi build the great brick dome completed in 1436?',
        fact: 'The cathedral’s huge dome took 16 years to build; its lantern was added later.',
      },
      florenceConstruction: {
        prompt:
          'Which Renaissance city lifted millions of bricks to build its cathedral dome?',
        fact: 'Workers raised vast loads of materials above Florence with machines designed for the dome project.',
      },
      edoPrints: {
        prompt:
          'In which period did artists, carvers, and printers make colorful ukiyo-e prints?',
        fact: 'A single Edo print often involved a publisher, an artist, a woodblock carver, and a printer.',
      },
      edoCapital: {
        prompt:
          'Which period made Edo, now Tokyo, the seat of Japan’s shoguns?',
        fact: 'During the Edo period, printmakers turned street life, theater, and landscapes into art.',
      },
      stocktonPassengers: {
        prompt:
          'Which 1825 railway carried public passengers behind a steam locomotive?',
        fact: 'The Stockton and Darlington Railway opened as the first public railway to haul passengers by steam.',
      },
      stocktonLocomotion: {
        prompt:
          'What historic journey featured a steam engine named Locomotion No. 1?',
        fact: 'At the railway’s 1825 opening, Locomotion pulled a train of wagons before large crowds.',
      },
      wrightFlight: {
        prompt:
          'Which machine made a controlled powered flight over North Carolina’s dunes in 1903?',
        fact: 'Orville Wright piloted the first flight; his brother Wilbur made the longest flight that day.',
      },
      wrightSeconds: {
        prompt:
          'Which breakthrough lasted just 12 seconds and traveled 120 feet?',
        fact: 'The Wright Flyer’s first flight covered about 36 meters on 17 December 1903.',
      },
      penicillinMold: {
        prompt:
          'What did Fleming discover after mold left a bacteria-free ring in a culture dish?',
        fact: 'The mold released a substance that stopped nearby bacteria from growing.',
      },
      penicillinName: {
        prompt:
          'Which discovery did Alexander Fleming name after a Penicillium mold?',
        fact: 'Fleming noticed the effect in 1928; later researchers developed penicillin into a treatment.',
      },
      gobekliPillars: {
        prompt:
          'Where did hunter-gatherers raise T-shaped pillars carved with wild animals?',
        fact: 'Göbekli Tepe’s stone enclosures were built before pottery became common in the region.',
      },
      catalhoyukRoofs: {
        prompt:
          'In which Neolithic settlement did people enter clustered houses through their roofs?',
        fact: 'Çatalhöyük had no ordinary streets between its tightly packed homes.',
      },
      stonehengeCircle: {
        prompt:
          'Which prehistoric site on Salisbury Plain became famous for its standing stone circle?',
        fact: 'Stonehenge formed part of a wider landscape of prehistoric monuments and burial mounds.',
      },
      urZiggurat: {
        prompt:
          'Which Sumerian city raised a towering stepped ziggurat above the Mesopotamian plain?',
        fact: 'The ziggurat of Ur stood among the great cities of the Tigris–Euphrates delta.',
      },
      knossosFrescoes: {
        prompt:
          'Which Cretan palace had colorful frescoes, courtyards, and rooms for stored goods?',
        fact: 'Minoan palatial centers combined administrative, economic, and religious activity.',
      },
      hattusaLionGate: {
        prompt:
          'Which Hittite capital had a monumental gate guarded by stone lions?',
        fact: 'Hattusa’s long walls enclosed temples, royal buildings, and several decorated gateways.',
      },
      mycenaeWalls: {
        prompt:
          'Which Bronze Age Greek citadel had massive “Cyclopean” walls and Linear B tablets?',
        fact: 'Mycenaean tablets preserve some of the earliest written evidence of the Greek language.',
      },
      meroePyramids: {
        prompt:
          'Where did rulers of the Kingdom of Kush build steep-sided pyramids near the Nile?',
        fact: 'From the 3rd century BCE, Meroe became a major burial place for Kushite royalty.',
      },
      carthageHarbor: {
        prompt:
          'Which North African city had Punic harbors filled with Mediterranean ships?',
        fact: 'Carthage’s ancient ports show how trade connected cultures across the Mediterranean.',
      },
      cerveteriTombs: {
        prompt:
          'Which Etruscan cemetery was laid out with tombs, streets, and small squares?',
        fact: 'The tombs at Cerveteri sometimes imitated the rooms and furnishings of Etruscan homes.',
      },
      qinClayArmy: {
        prompt:
          'Which ruler’s tomb complex was surrounded by thousands of life-sized clay soldiers?',
        fact: 'The terracotta warriors at the first Qin emperor’s mausoleum have varied faces and equipment.',
      },
      chavinTemple: {
        prompt:
          'Which Andean ceremonial center had stone terraces and carved animal imagery?',
        fact: 'Chavín drew pilgrims to a high valley in the Peruvian Andes.',
      },
      nazcaGeoglyphs: {
        prompt:
          'Where were huge bird and plant figures scratched into the Peruvian desert surface?',
        fact: 'The Nasca geoglyphs spread across hundreds of square kilometers of arid plain.',
      },
      jerichoTower: {
        prompt:
          'Which oasis settlement built a stone tower and walls thousands of years before the pyramids of Egypt?',
        fact: 'Neolithic Jericho already had a monumental tower, wall, and ditch in the 9th–8th millennia BCE.',
      },
      lascauxAnimals: {
        prompt:
          'Which cave preserves Ice Age paintings of horses, cattle, and other animals?',
        fact: 'The Lascaux paintings are prized for their careful observation, vivid color, and lively animals.',
      },
      skaraBraeHouses: {
        prompt:
          'Which windswept island settlement had stone houses linked by narrow covered passages?',
        fact: 'Skara Brae is one of the best-preserved Neolithic villages in northwestern Europe.',
      },
      caralPlazas: {
        prompt:
          'Which ancient Peruvian city built monumental platform mounds and sunken circular plazas?',
        fact: 'Caral-Supe rose above the green Supe River valley about 5,000 years ago.',
      },
      ugaritAlphabet: {
        prompt:
          'Which Bronze Age port left clay tablets written with an early alphabetic cuneiform script?',
        fact: 'Ugaritic scribes used a system of about thirty signs to write their language.',
      },
      ninevehReliefs: {
        prompt:
          'In which Assyrian capital were palace walls covered with carved scenes of campaigns and royal life?',
        fact: 'Stone reliefs from Nineveh recorded events in remarkable detail across palace walls.',
      },
      petraRockCity: {
        prompt:
          'Which caravan city carved grand tombs into rose-red sandstone cliffs?',
        fact: 'Petra’s builders also made channels, cisterns, and dams to store precious desert water.',
      },
      teotihuacanAvenue: {
        prompt:
          'In which ancient Mexican city did the Avenue of the Dead pass the Pyramids of the Sun and Moon?',
        fact: 'Teotihuacan became one of the largest cities of the ancient Americas between the 1st and 7th centuries CE.',
      },
      hagiaSophiaDome: {
        prompt:
          'Which building stunned 6th-century Constantinople with a vast central dome?',
        fact: 'Hagia Sophia was completed in 537 CE; its dome shaped later church and mosque architecture.',
      },
      aachenOctagon: {
        prompt:
          'Where did Charlemagne build an octagonal palace chapel north of the Alps?',
        fact: 'The Palatine Chapel began around 790–800; Charlemagne was buried at Aachen in 814.',
      },
      cordobaArches: {
        prompt:
          'Which Andalusian monument is famous for rows of red-and-white double arches?',
        fact: 'Construction of Córdoba’s Great Mosque began in 786 and continued over later centuries.',
      },
      borobudurTerraces: {
        prompt:
          'Which Javanese Buddhist monument rises through terraces crowned with bell-shaped stupas?',
        fact: 'Borobudur joins the forms of a stupa, temple, and mountain in one vast structure.',
      },
      lalibelaRockChurches: {
        prompt:
          'Where were eleven medieval churches carved down into living rock in the Ethiopian highlands?',
        fact: 'Lalibela’s churches are linked by trenches and passages cut into the stone.',
      },
      kilwaOceanTrade: {
        prompt:
          'Which Swahili island city traded across the Indian Ocean from the East African coast?',
        fact: 'Kilwa’s coral-stone ruins include a Great Mosque and the vast Husuni Kubwa palace.',
      },
      bukharaSilkRoad: {
        prompt:
          'Which Silk Road city preserves the patterned brick mausoleum of Ismail Samani?',
        fact: 'The mausoleum is a masterpiece of 10th-century architecture in Bukhara.',
      },
      samarkandCrossroads: {
        prompt:
          'Which Central Asian city became famous for its blue-tiled Timurid monuments?',
        fact: 'Samarkand grew at a crossroads of cultures in the Zerafshan River oasis.',
      },
      djenneEarthenCity: {
        prompt:
          'Which West African market city became known for monumental earthen architecture?',
        fact: 'Djenné connected regional trade and the trans-Saharan gold routes.',
      },
      cahokiaMound: {
        prompt:
          'Which pre-Columbian city raised the enormous earthen Monks Mound near the Mississippi?',
        fact: 'Cahokia was the largest known pre-Columbian settlement north of Mexico.',
      },
      chichenItzaCaracol: {
        prompt:
          'Which Maya city contains El Castillo and the circular building called El Caracol?',
        fact: 'Chichén Itzá combines Maya building traditions with influences from central Mexico.',
      },
      alhambraPalace: {
        prompt:
          'Which palace complex above Granada is known for Nasrid courtyards, carved walls, and pools?',
        fact: 'The Alhambra and nearby Generalife form a celebrated ensemble of medieval Andalusi architecture.',
      },
      haitiFreedom: {
        prompt:
          'Which Caribbean nation won independence from France after a revolution led by formerly enslaved people?',
        fact: 'Haiti declared independence in 1804, becoming the first independent Black republic.',
      },
      rocketRainhill: {
        prompt:
          'Which yellow steam locomotive won the Rainhill Trials in 1829?',
        fact: 'Rocket helped demonstrate that steam locomotives could power the Liverpool and Manchester Railway.',
      },
      faradayInduction: {
        prompt:
          'Which laboratory discovery showed that changing magnetism could produce electric current?',
        fact: 'Michael Faraday discovered electromagnetic induction in 1831, a principle behind generators.',
      },
      morseTelegraph: {
        prompt:
          'Which invention carried a message from Washington to Baltimore along a wire in 1844?',
        fact: 'Morse sent his famous first public telegram over an experimental line on 24 May 1844.',
      },
      senecaDeclaration: {
        prompt:
          "At which gathering did reformers adopt the Declaration of Sentiments calling for women's rights?",
        fact: 'The 1848 Seneca Falls convention drew more than 300 people to Wesleyan Chapel.',
      },
      greatExhibitionGlass: {
        prompt:
          "Which international exhibition filled London's iron-and-glass Crystal Palace with inventions?",
        fact: 'More than six million visitors came to the Great Exhibition in Hyde Park in 1851.',
      },
      nightingaleScutari: {
        prompt:
          'Which hospital story brought Florence Nightingale and her nurses into the Crimean War?',
        fact: 'Nightingale and her team cared for wounded soldiers at Scutari near Constantinople.',
      },
      darwinOrigin: {
        prompt:
          'Which 1859 book explained how natural selection could shape species over generations?',
        fact: "Darwin's On the Origin of Species helped transform the study of life.",
      },
      emancipationProclamation: {
        prompt:
          'Which 1863 proclamation declared enslaved people free in areas rebelling against the United States?',
        fact: "Lincoln's proclamation applied to the rebel areas; ending slavery across the United States required further change.",
      },
      meijiRestoration: {
        prompt:
          "Which change of government ended Tokugawa shogunal rule and began Japan's Meiji era?",
        fact: 'The Meiji Restoration of 1868 shifted power to a new government centered on the emperor.',
      },
      suezOpening: {
        prompt:
          'Which new waterway let ships sail between the Mediterranean and Red seas without circling Africa?',
        fact: 'The Suez Canal opened on 17 November 1869 after years of excavation.',
      },
      bellTelephone: {
        prompt:
          "Which device carried Alexander Graham Bell's spoken words to Thomas Watson in 1876?",
        fact: 'Bell patented a telephone in March 1876 and made a successful speech transmission days later.',
      },
      edisonLighting: {
        prompt:
          "Which invention lit Thomas Edison's Menlo Park laboratory for a public demonstration in 1879?",
        fact: 'Edison and his team worked on a practical incandescent lighting system, displayed in December 1879.',
      },
      libertyDedication: {
        prompt:
          'Which copper monument was dedicated in New York Harbor in October 1886?',
        fact: 'France made the statue, shipped it in pieces, and workers assembled it on its New York pedestal.',
      },
      eiffelExposition: {
        prompt: "Which iron tower rose over the Paris World's Fair of 1889?",
        fact: 'The Eiffel Tower was built for the Exposition Universelle marking a century since the French Revolution.',
      },
      rontgenXray: {
        prompt:
          'Which discovery let Wilhelm Röntgen make a shadow image of bones in 1895?',
        fact: "Röntgen's X-rays earned the first Nobel Prize in Physics in 1901.",
      },
      athensOlympics: {
        prompt:
          'Which city hosted the first Olympic Games of the modern era in 1896?',
        fact: 'Athletes competed at Athens in nine sports during the first modern Games.',
      },
      adwaVictory: {
        prompt:
          'Where did Ethiopian forces defeat an invading Italian army in 1896?',
        fact: "The victory at Adwa became a powerful symbol of Ethiopia's defense of independence.",
      },
      philippineRevolution: {
        prompt:
          'Which 1896 uprising against Spanish rule was led in part by the Katipunan?',
        fact: 'Andrés Bonifacio and fellow Katipuneros fought for Filipino independence.',
      },
      marconiWireless: {
        prompt:
          'Which technology sent messages across the Bristol Channel without a connecting wire?',
        fact: 'Marconi demonstrated wireless telegraphy in Britain and formed a company in 1897.',
      },
      blitzShelters: {
        prompt:
          'During which wartime event did Londoners shelter overnight on Underground platforms?',
        fact: 'During the Blitz, families used Tube stations as shelters from repeated air raids.',
      },
      normandyLandings: {
        prompt:
          'Which operation sent Allied landing craft onto the beaches of northern France on 6 June 1944?',
        fact: 'The Normandy landings opened a path for Allied forces to advance into occupied Western Europe.',
      },
      partitionTrains: {
        prompt:
          'Which division of British India sent millions of people across new borders, often by train?',
        fact: 'Partition in 1947 created India and Pakistan and forced mass migration amid violence.',
      },
      humanRightsDeclaration: {
        prompt:
          'Which document did the UN General Assembly adopt in Paris in December 1948?',
        fact: 'The Universal Declaration of Human Rights set out rights and freedoms for everyone.',
      },
      dnaDoubleHelix: {
        prompt:
          "Which molecule's double-helix structure was described in 1953 using clues from X-ray images?",
        fact: "Rosalind Franklin's and Maurice Wilkins's diffraction work helped reveal DNA's structure.",
      },
      brownDecision: {
        prompt:
          'Which US Supreme Court decision ruled racial segregation in public schools unconstitutional?',
        fact: 'The 1954 Brown ruling rejected the legal basis for segregating children in public schools.',
      },
      bandungConference: {
        prompt:
          'Which conference brought Asian and African leaders together in Indonesia in April 1955?',
        fact: 'The Bandung meeting gathered delegates to discuss cooperation and independence.',
      },
      nasaFounded: {
        prompt:
          'Which civilian space agency opened in the United States in October 1958?',
        fact: 'NASA was created after Sputnik and opened for business on 1 October 1958.',
      },
      gagarinOrbit: {
        prompt: 'Which flight carried the first human to orbit Earth?',
        fact: 'Yuri Gagarin orbited Earth in Vostok 1 on 12 April 1961; the flight lasted 108 minutes.',
      },
      washingtonMarch: {
        prompt:
          'Which 1963 gathering filled the National Mall to demand jobs and civil rights?',
        fact: 'About 250,000 people joined the March on Washington for Jobs and Freedom.',
      },
      mexicoOlympics: {
        prompt: 'Which Olympic Games were the first held in Latin America?',
        fact: 'Mexico City hosted the 1968 Games at an altitude of about 2,300 meters.',
      },
      intel4004: {
        prompt:
          'Which tiny 1971 device put a programmable central processor on a single chip?',
        fact: 'The Intel 4004 was first designed for a calculator, then sold as a general-purpose chip.',
      },
      mobileCall: {
        prompt:
          'What did Martin Cooper demonstrate with a call on a New York sidewalk in 1973?',
        fact: "Cooper's Motorola team built an early handheld cellular phone about the size of a brick.",
      },
      apolloSoyuzHandshake: {
        prompt:
          'Which mission brought American and Soviet crews together for a handshake in Earth orbit?',
        fact: 'The Apollo and Soyuz spacecraft docked on 17 July 1975 during a joint mission.',
      },
      smallpoxEradication: {
        prompt:
          'Which disease did the World Health Assembly officially declare eradicated in 1980?',
        fact: 'A worldwide vaccination and surveillance campaign ended natural smallpox transmission.',
      },
      tcpIpSwitch: {
        prompt:
          'Which 1983 network change made TCP/IP the shared protocol of ARPANET computers?',
        fact: 'The coordinated switch on 1 January 1983 helped separate and connect networks into the Internet.',
      },
      liveAidConcert: {
        prompt:
          'Which 1985 benefit concerts linked huge audiences in London and Philadelphia?',
        fact: 'Live Aid raised awareness and funds for famine relief; its archive is held by the National Library of Ireland.',
      },
      chornobylAccident: {
        prompt:
          'Which nuclear power plant suffered an explosion and fire in Ukraine in April 1986?',
        fact: 'The Chornobyl accident released radioactive material and forced many people from their homes.',
      },
      montrealProtocol: {
        prompt:
          'Which 1987 global agreement aimed to phase out chemicals that damage the ozone layer?',
        fact: 'The Montreal Protocol was signed in 1987 and took effect in 1989.',
      },
      webProposal: {
        prompt:
          'What did Tim Berners-Lee propose at CERN in 1989 to link scientific documents?',
        fact: 'His first Web proposal led to a server and browser operating at CERN by the end of 1990.',
      },
      chauvetAnimals: {
        prompt:
          "Which cave's walls show lions, rhinos, and other animals drawn more than 30,000 years ago?",
        fact: "Chauvet's artists used shading and the shape of the rock to suggest animals in motion.",
      },
      carnacRows: {
        prompt:
          'Where do thousands of Neolithic standing stones form long rows across Brittany?',
        fact: "Carnac's alignments stretch across several kilometres; their exact purpose remains debated.",
      },
      banChiangPots: {
        prompt:
          'At which prehistoric site in Thailand did people make ceramics with striking red spiral designs?',
        fact: "Ban Chiang's pottery and burials reveal a long tradition of farming and craft in Southeast Asia.",
      },
      dilmunMounds: {
        prompt:
          'Which Bronze Age trading society on Bahrain left thousands of burial mounds?',
        fact: 'The mound fields show how many people lived in Dilmun, a hub between Mesopotamia and the Indus region.',
      },
      gizaKhufu: {
        prompt:
          'Which monument was built as the tomb of the Egyptian king Khufu?',
        fact: 'The Great Pyramid is the only ancient Wonder of the World still standing.',
      },
      abuSimbelStatues: {
        prompt:
          'Which rock-cut Egyptian temple greets visitors with four colossal seated statues of Ramesses II?',
        fact: 'In the 1960s, engineers moved the temple uphill to save it from the rising waters of Lake Nasser.',
      },
      thebesKarnak: {
        prompt:
          'At which Egyptian city did generations of pharaohs enlarge the vast Karnak temple complex?',
        fact: "Karnak's giant columns and sanctuaries were built and changed over many centuries.",
      },
      sanchiStupa: {
        prompt:
          'Which Indian Buddhist site has a great stupa approached through carved stone gateways?',
        fact: "Sanchi's gateways tell stories through lively carvings of people, animals, and symbols.",
      },
      ajantaPaintings: {
        prompt:
          'Which caves in India preserve Buddhist wall paintings inside rock-cut monasteries?',
        fact: "Ajanta's painted caves were created in phases separated by several centuries.",
      },
      pasargadaeCyrus: {
        prompt:
          'Where is the stepped stone tomb traditionally identified as that of Cyrus the Great?',
        fact: 'Cyrus founded the Achaemenid Empire; Pasargadae was one of its earliest royal centres.',
      },
      ephesusLibrary: {
        prompt:
          'In which ancient city can you find the monumental facade of the Library of Celsus?',
        fact: 'The library was built in the Roman city of Ephesus in the early second century CE.',
      },
      pompeiiAsh: {
        prompt:
          'Which Roman town was buried by the eruption of Mount Vesuvius in 79 CE?',
        fact: 'The ash preserved streets, houses, and everyday objects that reveal Roman urban life.',
      },
      colosseumArena: {
        prompt:
          'Which Roman amphitheatre opened in 80 CE and hosted public spectacles?',
        fact: "The Colosseum's many entrances helped enormous crowds move through the building.",
      },
      hadriansWallFrontier: {
        prompt:
          'Which Roman frontier stretched across northern Britain from the reign of Emperor Hadrian?',
        fact: 'The wall included forts, milecastles, and gates; it was more than a simple stone barrier.',
      },
      palmyraCaravans: {
        prompt:
          'Which oasis city became a caravan crossroads between the Roman world and lands farther east?',
        fact: "Palmyra's long colonnaded street reflected the wealth brought by long-distance trade.",
      },
      hegraTombs: {
        prompt:
          'Where did Nabataean builders carve monumental tomb facades into Arabian sandstone?',
        fact: "Hegra was the Nabataeans' southern major city; many tombs have inscriptions naming their owners.",
      },
      leptisForum: {
        prompt:
          'Which Roman city on the coast of present-day Libya gained grand monuments under Septimius Severus?',
        fact: 'Severus was born at Leptis Magna and sponsored ambitious building projects there.',
      },
      delphiOracle: {
        prompt:
          'At which Greek sanctuary did visitors seek prophecies from the oracle of Apollo?',
        fact: "Greek city-states also displayed offerings and treasuries along the path to Apollo's temple.",
      },
      mogaoSilkRoad: {
        prompt:
          'Which cave temples near Dunhuang preserved Buddhist art along the Silk Roads?',
        fact: "Mogao's murals show religious stories as well as glimpses of trade and daily life.",
      },
      anuradhapuraCity: {
        prompt:
          'Which ancient Sri Lankan capital grew around Buddhist monasteries and great dome-shaped stupas?',
        fact: 'Anuradhapura remained an important political and religious centre for more than a millennium.',
      },
      chauvetSealed: {
        prompt:
          'Which painted cave stayed sealed by a rockfall until its rediscovery in 1994?',
        fact: 'Its sealed entrance helped protect more than a thousand drawings from later damage.',
      },
      carnacMenhirs: {
        prompt: 'Where would you walk between huge rows of Breton menhirs?',
        fact: "A menhir is a single upright stone; Carnac has one of the world's largest concentrations.",
      },
      banChiangBurials: {
        prompt:
          'Which Southeast Asian site revealed prehistoric graves, pottery, and evidence of metalworking?',
        fact: "Ban Chiang's excavated layers span many centuries, showing changing craft traditions.",
      },
      dilmunTrade: {
        prompt:
          'Which Gulf trading centre linked Mesopotamia with the Indus world during the Bronze Age?',
        fact: 'Dilmun occupied islands on routes sailed by merchants carrying goods between distant societies.',
      },
      gizaWonder: {
        prompt:
          'Which ancient Wonder can you still visit largely standing today?',
        fact: "The Great Pyramid remained the world's tallest human-made structure for thousands of years.",
      },
      abuSimbelRescue: {
        prompt:
          'Which ancient temple was cut into blocks and moved to higher ground in the 1960s?',
        fact: 'An international campaign saved Abu Simbel from being submerged by a new reservoir.',
      },
      thebesNecropolis: {
        prompt:
          'Which ancient capital stood opposite the Valley of the Kings on the Nile?',
        fact: 'The Theban west bank held royal tombs while temple complexes rose on the east bank.',
      },
      sanchiGateways: {
        prompt:
          'Which site has four elaborate gateways around a Buddhist stupa?',
        fact: "The carved gateways were added after the stupa's earliest phase.",
      },
      ajantaCliff: {
        prompt:
          'Which Buddhist monasteries were carved into a horseshoe-shaped cliff?',
        fact: 'The caves include prayer halls and monastic living spaces as well as paintings.',
      },
      pasargadaeCapital: {
        prompt:
          'Which early Achaemenid capital was founded by Cyrus the Great?',
        fact: "Its surviving remains include palaces, gardens, and Cyrus's tomb.",
      },
      ephesusArtemis: {
        prompt:
          'Near which city stood the Temple of Artemis, counted among the ancient Wonders?',
        fact: 'The Artemis sanctuary made Ephesus famous long before its Roman library was built.',
      },
      pompeiiFrescoes: {
        prompt:
          'Where can archaeologists still study Roman house murals preserved after a volcanic disaster?',
        fact: "Pompeii's walls and objects offer unusually detailed evidence of everyday life.",
      },
      colosseumFlavian: {
        prompt:
          'Which landmark was originally called the Flavian Amphitheatre?',
        fact: 'Its construction began under Emperor Vespasian and it opened under his son Titus.',
      },
      hadriansWallForts: {
        prompt:
          'Along which Roman landmark would you find milecastles and frontier forts?',
        fact: 'Soldiers controlled crossings and movement at gates built into the frontier.',
      },
      palmyraColumns: {
        prompt:
          'Which Syrian oasis city was famed for a grand colonnaded street?',
        fact: 'Palmyra blended local and Greco-Roman artistic traditions in its monuments.',
      },
      hegraInscriptions: {
        prompt:
          'At which Nabataean site do tomb inscriptions sometimes identify the people buried there?',
        fact: "The carved facades at Hegra make the city's cemetery visible across the desert landscape.",
      },
      leptisSeverus: {
        prompt:
          'Which North African city was the birthplace of Roman emperor Septimius Severus?',
        fact: "Severus's patronage left a monumental forum and other public buildings.",
      },
      delphiTreasuries: {
        prompt:
          "Where did Greek city-states place small treasury buildings beside the route to Apollo's oracle?",
        fact: 'Treasuries displayed offerings given by communities from across the Greek world.',
      },
      mogaoMurals: {
        prompt:
          'Which Silk Road caves contain centuries of murals depicting Buddhist stories?',
        fact: 'The caves were enriched by travelers and patrons from different communities over time.',
      },
      anuradhapuraBodhi: {
        prompt:
          'Which Sri Lankan sacred city is associated with an ancient revered bodhi tree?',
        fact: 'The Sri Maha Bodhi remains a major pilgrimage focus within Anuradhapura.',
      },
      kyivMosaics: {
        prompt:
          'Which Kyiv cathedral still preserves mosaics from the era of Rus?',
        fact: 'Its medieval mosaics combine Byzantine art with local traditions.',
      },
      bulguksaSilla: {
        prompt: 'Which Korean temple was built under the Silla kingdom?',
        fact: 'It forms a Buddhist complex with the nearby Seokguram grotto.',
      },
      himejiWhite: {
        prompt: 'Which Japanese castle is called the White Heron?',
        fact: 'Its winding paths and many gates strengthened its defences.',
      },
      forbiddenPalace: {
        prompt: 'Which Beijing palace housed Ming and Qing emperors?',
        fact: "Its great halls line up along Beijing's central axis.",
      },
      machuRidge: {
        prompt: 'Which Inca settlement sits on a steep Andean ridge?',
        fact: 'Its terraces and fitted stone walls blend into the mountain.',
      },
      marrakeshAlmoravid: {
        prompt: 'Which Moroccan city did the Almoravids found?',
        fact: 'It became a major capital influencing North Africa and al-Andalus.',
      },
      fezMedina: {
        prompt: 'Which Moroccan medina flourished under the Marinids?',
        fact: 'Its historic lanes still hold madrasas, markets, and fountains.',
      },
      kairouanMosque: {
        prompt: 'Which Tunisian city has a famous Great Mosque?',
        fact: 'Founded in 670, it became a spiritual centre of the Maghreb.',
      },
      timbuktuScholars: {
        prompt: 'Which Saharan city drew scholars and merchants?',
        fact: 'Its mosques and manuscripts made it a centre of learning.',
      },
      askiaTomb: {
        prompt: 'Which earthen monument was built in Gao for a Songhai ruler?',
        fact: 'Its pyramidal tower reflects Sahelian building traditions.',
      },
      sukhothaiWriting: {
        prompt: 'Which early Thai kingdom left inscriptions among its temples?',
        fact: 'They help historians study early Thai writing and government.',
      },
      baganTemples: {
        prompt:
          'Which Myanmar plain filled with thousands of Buddhist temples?',
        fact: "Rulers and donors built Bagan's monuments across several centuries.",
      },
      bamiyanBuddhas: {
        prompt: 'Which Afghan valley once held two huge cliff-carved Buddhas?',
        fact: 'The statues were destroyed in 2001; their cliff niches remain.',
      },
      greatWallMing: {
        prompt: 'Which frontier was rebuilt in brick and stone under the Ming?',
        fact: 'It includes many walls, passes, and watchtowers built in different ages.',
      },
      montTides: {
        prompt: 'Which medieval abbey rises from a Norman tidal island?',
        fact: 'Pilgrims crossed shifting sands to reach its church.',
      },
      veniceLagoon: {
        prompt: 'Which maritime republic grew on lagoon islands?',
        fact: 'Its canals linked merchants and shipyards to Mediterranean routes.',
      },
      lubeckHansa: {
        prompt: 'Which Baltic city led a Hanseatic merchant network?',
        fact: 'Its brick Gothic buildings reflect wealth from medieval trade.',
      },
      novgorodTrade: {
        prompt: 'Which Rus city linked Baltic routes with lands farther east?',
        fact: 'Its merchants traded goods such as furs and wax.',
      },
      haeinsaBlocks: {
        prompt:
          'Which Korean temple protects the Tripitaka Koreana woodblocks?',
        fact: 'Timber repositories were designed to keep the printing blocks dry.',
      },
      shibamTowers: {
        prompt: 'Which Yemeni town is famed for mud-brick tower houses?',
        fact: 'Its tall houses used limited space inside the town walls.',
      },
      kyivOrans: {
        prompt:
          'Which cathedral contains the great Orans mosaic of the Virgin Mary?',
        fact: 'The image has watched over Kyiv for nearly a thousand years.',
      },
      bulguksaSeokguram: {
        prompt:
          'Which temple shares a mountain setting with the Seokguram Buddha grotto?',
        fact: 'Both sites were created during the flourishing of the Silla kingdom.',
      },
      himejiDefences: {
        prompt:
          'At which castle do winding approaches lead past gates toward a white keep?',
        fact: 'The complicated route was designed to slow attackers.',
      },
      forbiddenAxis: {
        prompt:
          "Which palace complex follows Beijing's central north–south axis?",
        fact: 'The layout separated ceremonial outer courts from private inner courts.',
      },
      machuTerraces: {
        prompt:
          'Where did Inca builders fit terraces into a high mountain landscape?',
        fact: 'The site stands more than 2,400 metres above sea level.',
      },
      marrakeshWalls: {
        prompt: 'Which Almoravid capital gave its name to Morocco?',
        fact: 'Its red walls and gates still shape the old city.',
      },
      fezMarinids: {
        prompt:
          'Where did the Marinid rulers sponsor madrasas in a dense Moroccan medina?',
        fact: "Fez was Morocco's capital during its 13th- and 14th-century peak.",
      },
      kairouanAghlabids: {
        prompt: 'Which city flourished under the Aghlabids in the 9th century?',
        fact: "Kairouan's mosque is among the major early monuments of Islamic North Africa.",
      },
      timbuktuMosques: {
        prompt:
          'Which West African centre is known for Djingareyber, Sankore, and Sidi Yahia mosques?',
        fact: "The three mosques are landmarks of Timbuktu's scholarly past.",
      },
      askiaGao: {
        prompt:
          "Which monument marks Gao's time as capital of the Songhai Empire?",
        fact: 'Askia Mohamed built the tower in 1495.',
      },
      sukhothaiTemples: {
        prompt:
          "Where can inscriptions illuminate an early Thai kingdom's society and rule?",
        fact: 'The historic towns preserve temples and monuments of Sukhothai.',
      },
      baganPlain: {
        prompt:
          'Which sacred landscape spreads brick stupas across a Myanmar plain?',
        fact: 'The monuments range widely in size and design.',
      },
      bamiyanNiches: {
        prompt: 'Where do empty cliff niches recall Buddhas destroyed in 2001?',
        fact: 'The surrounding valley also contains caves and ancient wall paintings.',
      },
      greatWallWatchtowers: {
        prompt:
          'Which Chinese frontier network connects walls, passes, and watchtowers?',
        fact: 'Different dynasties built and rebuilt sections across many centuries.',
      },
      montPilgrims: {
        prompt:
          'Which tidal island drew medieval pilgrims to an abbey of Saint Michael?',
        fact: 'The abbey had to be built upward on a narrow rocky island.',
      },
      veniceGalleys: {
        prompt: 'From which lagoon city did medieval merchant galleys sail?',
        fact: 'Sea trade helped Venice become a powerful republic.',
      },
      lubeckBrick: {
        prompt:
          'Which Hanseatic city is celebrated for its brick Gothic old town?',
        fact: 'Brick was a defining building material on the Baltic coast.',
      },
      novgorodSophia: {
        prompt:
          'Which medieval city on eastern trade routes has a Saint Sophia Cathedral?',
        fact: "Novgorod's churches preserve centuries of regional art.",
      },
      haeinsaRepository: {
        prompt:
          'Where were thousands of Buddhist printing blocks stored in special timber halls?',
        fact: 'The Tripitaka Koreana blocks are an extraordinary feat of carving and preservation.',
      },
      shibamSkyscrapers: {
        prompt:
          'Which old Yemeni town is nicknamed a city of desert skyscrapers?',
        fact: 'Its tall earthen houses cluster within defensive walls.',
      },
      zhengFleet: {
        prompt: 'Whose Ming fleets sailed across the Indian Ocean?',
        fact: 'The voyages connected China with ports across Asia and East Africa.',
      },
      gutenbergBible: {
        prompt:
          'Which Mainz workshop printed a famous early European Bible with movable type?',
        fact: "Gutenberg's Mainz workshop helped transform European book production.",
      },
      istanbulConquest: {
        prompt:
          'Which city became an Ottoman capital after its capture in 1453?',
        fact: 'The city linked the Black Sea and Mediterranean worlds.',
      },
      tenochtitlanCanals: {
        prompt: 'Which Mexica capital rose from islands in Lake Texcoco?',
        fact: 'Causeways and canals connected its markets and neighborhoods.',
      },
      fatehpurAkbar: {
        prompt: 'Which red-sandstone Mughal capital did Emperor Akbar build?',
        fact: 'The court used the planned city as a capital for only about a decade.',
      },
      sistineMichelangelo: {
        prompt: 'Which ceiling did Michelangelo paint for Pope Julius II?',
        fact: 'He painted scenes inspired by Genesis high above the chapel floor.',
      },
      copernicusSun: {
        prompt:
          'Which 1543 work placed the Sun near the centre of the planetary system?',
        fact: 'Copernicus challenged the older Earth-centred picture of the cosmos.',
      },
      suleymaniyeMosque: {
        prompt:
          "Which great Ottoman mosque crowns a hill above Istanbul's Golden Horn?",
        fact: 'Architect Sinan designed it for Sultan Süleyman the Magnificent.',
      },
      globeStage: {
        prompt: "Which open-air London playhouse staged Shakespeare's plays?",
        fact: 'Spectators stood in the yard or watched from galleries around the stage.',
      },
      galileoMoon: {
        prompt:
          "Which astronomer's improved telescope revealed details of the Moon?",
        fact: "Galileo's observations soon revealed mountains on the Moon and moons of Jupiter.",
      },
      tajMumtaz: {
        prompt: 'Which marble mausoleum did Shah Jahan build for Mumtaz Mahal?',
        fact: 'Artisans came from across the Mughal Empire, Central Asia, and Iran.',
      },
      isfahanSquare: {
        prompt: 'Which Persian city has the vast Naqsh-e Jahan square?',
        fact: 'Its mosques, palace, and bazaar frame a Safavid-era public space.',
      },
      versaillesLouis: {
        prompt: 'Which palace became the grand court of Louis XIV?',
        fact: 'Its formal gardens influenced royal residences across Europe.',
      },
      newtonPrincipia: {
        prompt: 'Which work set out laws of motion and universal gravitation?',
        fact: "Edmond Halley helped bring Newton's book to print.",
      },
      petersburgFounding: {
        prompt: 'Which city did Peter the Great build on the Neva delta?',
        fact: 'New canals and stone buildings rose from marshy ground.',
      },
      declarationCongress: {
        prompt:
          'Which document did the Continental Congress adopt on 4 July 1776?',
        fact: 'The famous parchment copy was signed mostly in August, after adoption.',
      },
      montgolfierBalloon: {
        prompt: 'Which invention began the age of human flight in 1783?',
        fact: 'The Montgolfier brothers first launched a hot-air balloon at Annonay, France.',
      },
      bastille1789: {
        prompt:
          'Which upheaval began with events including the storming of the Bastille?',
        fact: '14 July 1789 became a symbolic date in French history.',
      },
      wollstonecraftRights: {
        prompt: "Which 1792 book argued for women's education and equality?",
        fact: 'Mary Wollstonecraft became a landmark voice in early feminist thought.',
      },
      jennerVaccine: {
        prompt:
          "Which medical advance grew from Edward Jenner's 1796 cowpox experiment?",
        fact: 'His method paved the way for vaccination against smallpox.',
      },
      zhengPorts: {
        prompt:
          "Which admiral's voyages reached ports around the Indian Ocean in the early 1400s?",
        fact: 'His fleet made seven major expeditions between 1405 and 1433.',
      },
      gutenbergType: {
        prompt:
          'Which printing workshop could reuse individual metal letters to make new pages?',
        fact: 'Reusable type sped up the production of many similar books.',
      },
      istanbulBosphorus: {
        prompt:
          'Which city controlled the waterway between the Black Sea and the Mediterranean?',
        fact: 'The Bosphorus made the city a strategic bridge between regions.',
      },
      tenochtitlanChinampas: {
        prompt:
          'Where did farmers cultivate garden plots in the shallow waters of Lake Texcoco?',
        fact: 'Chinampas helped supply the large island capital with food.',
      },
      fatehpurDecade: {
        prompt:
          'Which planned Mughal city served as capital for only about ten years?',
        fact: 'Akbar moved his court away in the 1580s, leaving grand buildings behind.',
      },
      sistineGenesis: {
        prompt:
          "Where can visitors look up at Michelangelo's painted scenes from Genesis?",
        fact: 'The ceiling was completed in roughly four years.',
      },
      copernicusEarth: {
        prompt:
          'Which book challenged the idea that Earth sits motionless at the centre of everything?',
        fact: 'Its mathematical model put Earth among the planets orbiting the Sun.',
      },
      suleymaniyeSinan: {
        prompt:
          'Which Istanbul mosque did the architect Sinan design for Sultan Süleyman?',
        fact: "Its dome and minarets still dominate Istanbul's skyline.",
      },
      globeAudience: {
        prompt:
          'At which theatre could Londoners watch a play while standing around an open stage?',
        fact: 'The original building opened in 1599 and later burned down.',
      },
      galileoJupiter: {
        prompt:
          "Which astronomer's telescope revealed four large moons orbiting Jupiter?",
        fact: 'The moons showed that not everything in the sky revolves around Earth.',
      },
      tajYamuna: {
        prompt:
          'Which white-marble monument stands by the Yamuna River in Agra?',
        fact: 'Its garden and water channels create a carefully balanced setting.',
      },
      isfahanPolo: {
        prompt:
          'Which Safavid city framed a vast square with palace, mosques, and bazaar?',
        fact: 'The square hosted ceremonies, commerce, and even polo.',
      },
      versaillesGardens: {
        prompt:
          'Which royal residence became famous for its vast formal gardens?',
        fact: 'Generations of artists and gardeners reshaped Versailles.',
      },
      newtonHalley: {
        prompt:
          "Which 1687 science book reached print with Edmond Halley's help?",
        fact: 'Its three books transformed the study of motion and gravity.',
      },
      petersburgNeva: {
        prompt: 'Which new capital rose from marshes around the Neva River?',
        fact: 'Peter the Great founded the city in 1703.',
      },
      declarationAugust: {
        prompt:
          'Which 1776 declaration was adopted in July but mostly signed on parchment in August?',
        fact: 'Printed copies spread the news before the famous parchment was signed.',
      },
      montgolfierAnnonay: {
        prompt:
          'What rose above Annonay, France, in a famous 1783 demonstration?',
        fact: 'The first public flight carried no person; human flights followed later that year.',
      },
      bastilleJuly: {
        prompt:
          'Which revolution has the fall of the Bastille as an enduring symbol?',
        fact: 'The fortress fell on 14 July 1789 amid a wider political crisis.',
      },
      wollstonecraftEducation: {
        prompt:
          "Which writer's 1792 work argued girls deserved serious education?",
        fact: "Wollstonecraft argued that education shapes women's freedom and opportunities.",
      },
      jennerCowpox: {
        prompt: 'Which breakthrough used cowpox to protect against smallpox?',
        fact: 'The word vaccination comes from the Latin word for cow.',
      },
      nobelFirst: {
        prompt:
          "Which awards were first presented in 1901 according to Alfred Nobel's will?",
        fact: 'The first five prizes covered science, literature, medicine, and peace.',
      },
      einsteinPapers: {
        prompt:
          'Whose 1905 papers transformed ideas about light, atoms, and time?',
        fact: 'Einstein worked in a Bern patent office during this extraordinary year.',
      },
      fordModelT: {
        prompt: 'Which car was introduced by Ford in 1908?',
        fact: 'Later production methods helped make the Model T affordable to many buyers.',
      },
      amundsenPole: {
        prompt: 'Whose expedition first reached the South Pole in 1911?',
        fact: "Roald Amundsen and four companions arrived ahead of Robert Scott's party.",
      },
      titanicVoyage: {
        prompt: 'Which ocean liner sank on its maiden Atlantic voyage in 1912?',
        fact: 'The disaster led to major changes in maritime safety rules.',
      },
      panamaOpening: {
        prompt:
          'Which waterway opened to ships crossing between the Atlantic and Pacific in 1914?',
        fact: 'The SS Ancon made the ceremonial opening transit on 15 August.',
      },
      russianRevolution: {
        prompt:
          'Which 1917 upheaval ended the Romanov monarchy and later brought the Bolsheviks to power?',
        fact: 'The February and October revolutions were distinct stages of change.',
      },
      fluPandemic: {
        prompt:
          'Which global health crisis spread during the final year of World War I?',
        fact: "An estimated third of the world's population became infected.",
      },
      suffrageAmendment: {
        prompt:
          'Which constitutional change barred denying US citizens the vote because of sex?',
        fact: 'Ratification followed decades of organizing, but discriminatory barriers remained.',
      },
      tutTomb: {
        prompt: 'Whose Egyptian royal tomb did Howard Carter uncover in 1922?',
        fact: "The rich burial became one of archaeology's most famous discoveries.",
      },
      turkeyRepublic: {
        prompt: 'Which republic was proclaimed in Ankara on 29 October 1923?',
        fact: "Mustafa Kemal became the new republic's first president.",
      },
      lindberghAtlantic: {
        prompt:
          'Which aircraft carried Charles Lindbergh alone from New York to Paris?',
        fact: 'The nonstop flight lasted about 33 and a half hours.',
      },
      stockCrash: {
        prompt:
          'Which financial shock sent New York share prices plunging in October 1929?',
        fact: "The crash deepened economic trouble but was only one part of the Great Depression's causes.",
      },
      gandhiSalt: {
        prompt:
          'Which peaceful protest marched to the Indian coast against a colonial salt law?',
        fact: "Gandhi's march from Sabarmati to Dandi lasted about 24 days.",
      },
      earhartSolo: {
        prompt:
          'Who became the first woman to fly solo across the Atlantic in 1932?',
        fact: 'Amelia Earhart flew a Lockheed Vega from Newfoundland to Northern Ireland.',
      },
      warOutbreak: {
        prompt:
          'Which conflict began in Europe after Germany invaded Poland in September 1939?',
        fact: 'Britain and France declared war on Germany two days after the invasion.',
      },
      hubbleLaunch: {
        prompt:
          'Which orbiting telescope was deployed from shuttle Discovery in April 1990?',
        fact: "It sees the cosmos above much of Earth's distorting atmosphere.",
      },
      saElection: {
        prompt:
          'Which country held its first democratic national elections in April 1994?',
        fact: 'Nelson Mandela became president after the vote, ending apartheid rule.',
      },
      pathfinderMars: {
        prompt: 'Which mission delivered the tiny Sojourner rover to Mars?',
        fact: 'The lander touched down on 4 July 1997 and sent pictures home.',
      },
      issModules: {
        prompt:
          'Which space station began with the Zarya and Unity modules joined in orbit?',
        fact: "The two modules were joined in December 1998 by shuttle Endeavour's crew.",
      },
      monteAlbanHill: {
        prompt: 'Which Zapotec city occupied a flattened hilltop above Oaxaca?',
        fact: 'Its plazas and temples commanded views over the Oaxaca valleys.',
      },
      palenqueMaya: {
        prompt:
          'Which Maya city is known for elegant temples and carved reliefs in a rainforest?',
        fact: "Palenque's art preserves stories of its rulers and beliefs.",
      },
      tiwanakuGateway: {
        prompt:
          'Which Andean centre near Lake Titicaca has a monumental Gate of the Sun?',
        fact: 'Its stone monuments survive at nearly 3,850 metres above sea level.',
      },
      mesaCliffs: {
        prompt:
          'Which Ancestral Puebloan community built stone homes beneath cliff overhangs?',
        fact: 'Some Mesa Verde cliff dwellings contain more than one hundred rooms.',
      },
      rapaMoai: {
        prompt:
          'On which Pacific island did communities raise giant stone moai?',
        fact: 'Many statues stood on ceremonial stone platforms called ahu.',
      },
      cholaTemple: {
        prompt:
          'Which towering South Indian temple was built by the Chola dynasty at Thanjavur?',
        fact: 'The Chola temples display brilliant stonework and bronze-casting traditions.',
      },
      mapungubweGold: {
        prompt:
          'Which southern African kingdom traded gold and ivory through Indian Ocean routes?',
        fact: 'Its hilltop centre grew near the Limpopo and Shashe rivers.',
      },
      hararWalls: {
        prompt: 'Which Ethiopian historic town is enclosed by the Jugol wall?',
        fact: "Harar's gates opened onto routes that carried people, goods, and ideas.",
      },
      ussrDissolution: {
        prompt:
          'Which state dissolved in December 1991 as its republics became independent?',
        fact: 'Its dissolution reshaped the political map of Eurasia.',
      },
      beijingWomen: {
        prompt:
          "Which 1995 UN gathering adopted a global platform for women's rights?",
        fact: 'Delegates met in Beijing to agree on goals for equality and opportunity.',
      },
      dollyClone: {
        prompt:
          'Which 1996 breakthrough showed that an adult cell could be used to clone a mammal?',
        fact: "Dolly was born at Scotland's Roslin Institute in July 1996.",
      },
      monteAlbanPlaza: {
        prompt:
          'Where did Zapotec builders level a mountaintop for a great ceremonial plaza?',
        fact: 'Monte Albán became a major centre of the Oaxaca Valley.',
      },
      palenqueReliefs: {
        prompt:
          'Which Maya city left delicate stone reliefs of rulers and mythology?',
        fact: 'Its artistry flourished especially between the sixth and eighth centuries.',
      },
      tiwanakuAltiplano: {
        prompt:
          'Which pre-Inca city flourished high on the Altiplano near Titicaca?',
        fact: 'Tiwanaku influenced a broad area of the southern Andes.',
      },
      mesaManyRooms: {
        prompt:
          'At which site do some cliff dwellings contain more than a hundred rooms?',
        fact: 'Ancestral Puebloan communities lived across the Mesa Verde plateau for centuries.',
      },
      rapaAhu: {
        prompt: 'Where were moai set on stone ceremonial platforms called ahu?',
        fact: 'The statues are part of a wider landscape of island archaeology.',
      },
      cholaBronzes: {
        prompt:
          'Which South Indian dynasty built monumental temples and excelled in bronze casting?',
        fact: 'The Brihadisvara temple at Thanjavur is a landmark of Chola architecture.',
      },
      mapungubweRivers: {
        prompt:
          "Which kingdom's royal centre rose near the Limpopo–Shashe river confluence?",
        fact: 'Trade connected Mapungubwe with East African ports and lands beyond.',
      },
      hararGates: {
        prompt:
          'Which Ethiopian walled town has historic gates and many mosques?',
        fact: 'Harar developed a distinctive urban and religious culture over centuries.',
      },
    },
  },
  uk: {
    cards: {
      sumer: { title: 'Шумерські міста', dates: 'від бл. 3200 р. до н. е.' },
      egypt: {
        title: 'Давнє царство Єгипту',
        dates: 'бл. 2650–2150 рр. до н. е.',
      },
      shang: { title: 'Династія Шан', dates: 'бл. 1600–1046 рр. до н. е.' },
      maya: { title: 'Класичні мая', dates: 'бл. 250–900 рр. н. е.' },
      indus: {
        title: 'Міста долини Інду',
        dates: 'бл. 2600–1900 рр. до н. е.',
      },
      persia: {
        title: 'Ахеменідська Персія',
        dates: 'бл. 550–330 рр. до н. е.',
      },
      rome: {
        title: 'Стародавній Рим',
        dates: 'бл. 509 р. до н. е. — 476 р. н. е. (Захід)',
      },
      mali: { title: 'Імперія Малі', dates: 'XIII–XV ст. н. е.' },
      song: { title: 'Династія Сун', dates: '960–1279 рр. н. е.' },
      inca: { title: 'Імперія інків', dates: 'бл. 1400–1532 рр. н. е.' },
      abbasid: { title: 'Багдад Аббасидів', dates: '762–1258 рр. н. е.' },
      viking: {
        title: 'Скандинавія доби вікінгів',
        dates: 'бл. 800–1050 рр. н. е.',
      },
      greece: { title: 'Стародавня Греція', dates: 'бл. 800–146 рр. до н. е.' },
      phoenicia: {
        title: 'Фінікійські міста',
        dates: 'бл. 1500–300 рр. до н. е.',
      },
      aksum: { title: 'Аксумське царство', dates: 'I–VIII ст. н. е.' },
      khmer: { title: 'Кхмерська імперія', dates: 'IX–XV ст. н. е.' },
      zimbabwe: { title: 'Велике Зімбабве', dates: 'XI–XV ст. н. е.' },
      mexica: { title: 'Імперія мешиків', dates: '1428–1521 рр. н. е.' },
      benin: { title: 'Бенінське царство', dates: 'бл. XI–XIX ст. н. е.' },
      mughal: {
        title: 'Імперія Великих Моголів',
        dates: '1526–1857 рр. н. е.',
      },
      un1945: {
        title: 'ООН',
        dates: '1945 р.',
      },
      sputnik1957: { title: 'Супутник-1', dates: '1957 р.' },
      shinkansen1964: {
        title: 'Токайдо-сінкансен',
        dates: 'відкритий 1964 р.',
      },
      apollo1969: { title: 'Аполлон-11', dates: '1969 р.' },
      earthDay1970: { title: 'Перший День Землі', dates: '1970 р.' },
      voyager1977: { title: 'Зонди «Вояджер»', dates: 'запущені 1977 р.' },
      ibmPc1981: {
        title: 'Комп’ютер IBM PC',
        dates: '1981 р.',
      },
      berlinWall1989: {
        title: 'Відкриття Берлінського муру',
        dates: '1989 р.',
      },
      babylon: { title: 'Вавилон Хаммурапі', dates: 'бл. 1750 р. до н. е.' },
      olmec: { title: 'Культура ольмеків', dates: 'бл. 1200–400 рр. до н. е.' },
      tang: { title: 'Династія Тан', dates: '618–907 рр. н. е.' },
      florence: { title: 'Флоренція Відродження', dates: 'XV ст. н. е.' },
      edo: { title: 'Японія доби Едо', dates: '1603–1868 рр. н. е.' },
      stockton1825: { title: 'Стоктон — Дарлінгтон', dates: '1825 р.' },
      wright1903: { title: 'Літак братів Райт', dates: '1903 р.' },
      penicillin1928: { title: 'Відкриття пеніциліну', dates: '1928 р.' },
      gobekli: { title: 'Гебеклі-Тепе', dates: 'бл. 9600–8200 рр. до н. е.' },
      catalhoyuk: { title: 'Чатал-Гююк', dates: 'бл. 7400–6200 рр. до н. е.' },
      stonehenge: { title: 'Стоунхендж', dates: 'бл. 3000–1600 рр. до н. е.' },
      urZiggurat: { title: 'Зикурат Ура', dates: 'бл. 2100 р. до н. е.' },
      knossos: { title: 'Палац Кносса', dates: 'II тис. до н. е.' },
      hattusa: { title: 'Хетська Хаттуса', dates: 'II тис. до н. е.' },
      mycenae: { title: 'Мікени', dates: 'бл. 1600–1100 рр. до н. е.' },
      meroe: {
        title: 'Кушитське Мерое',
        dates: 'бл. 300 р. до н. е. — 350 р. н. е.',
      },
      carthage: { title: 'Пунічний Карфаген', dates: 'IX–II ст. до н. е.' },
      cerveteri: { title: 'Етруське Черветері', dates: 'IX–I ст. до н. е.' },
      qinWarriors: {
        title: 'Теракотове військо Цінь',
        dates: 'бл. 210 р. до н. е.',
      },
      chavin: { title: 'Чавін', dates: 'бл. 1500–300 рр. до н. е.' },
      nazcaLines: {
        title: 'Лінії Наска',
        dates: 'бл. 500 р. до н. е. — 500 р. н. е.',
      },
      jericho: { title: 'Неолітичний Єрихон', dates: 'IX–VIII тис. до н. е.' },
      lascaux: { title: 'Печера Ласко', dates: 'бл. 17 000 р. до н. е.' },
      skaraBrae: { title: 'Скара-Брей', dates: 'бл. 3100–2500 рр. до н. е.' },
      caral: { title: 'Караль-Супе', dates: 'бл. 3000–1800 рр. до н. е.' },
      ugarit: { title: 'Угарит', dates: 'бл. 1450–1185 рр. до н. е.' },
      nineveh: {
        title: 'Ассирійська Ніневія',
        dates: 'бл. 700–612 рр. до н. е.',
      },
      petra: {
        title: 'Набатейська Петра',
        dates: 'IV ст. до н. е. — 106 р. н. е.',
      },
      teotihuacan: { title: 'Теотіуакан', dates: 'I–VII ст. н. е.' },
      hagiaSophia: { title: 'Собор Святої Софії', dates: 'завершений 537 р.' },
      aachen: { title: 'Палацова капела в Ахені', dates: 'бл. 790–800 рр.' },
      cordoba: { title: 'Велика мечеть Кордови', dates: 'закладена 786 р.' },
      borobudur: { title: 'Боробудур', dates: 'VIII–IX ст.' },
      lalibela: { title: 'Церкви Лалібели', dates: 'XII–XIII ст.' },
      kilwa: { title: 'Кілва-Кісівані', dates: 'бл. XIII–XV ст.' },
      bukhara: { title: 'Середньовічна Бухара', dates: 'X–XII ст.' },
      samarkand: { title: 'Самарканд', dates: 'XV–XVII ст.' },
      djenne: { title: 'Історичне Дженне', dates: 'XV–XVI ст.' },
      cahokia: { title: 'Кахокія', dates: 'бл. 1050–1150 рр.' },
      chichenItza: { title: 'Чичен-Іца', dates: 'бл. 800–1200 рр.' },
      alhambra: { title: 'Альгамбра Насрідів', dates: 'XIII–XV ст.' },
      haiti1804: { title: 'Незалежність Гаїті', dates: '1804 р.' },
      rocket1829: { title: 'Паровоз «Ракета»', dates: '1829 р.' },
      faraday1831: { title: 'Індукція Фарадея', dates: '1831 р.' },
      morse1844: { title: 'Телеграф Морзе', dates: '1844 р.' },
      senecaFalls1848: { title: "З'їзд у Сенека-Фоллз", dates: '1848 р.' },
      greatExhibition1851: { title: 'Велика виставка', dates: '1851 р.' },
      nightingale1854: {
        title: 'Найтінгейл у Скутарі',
        dates: '1854–1856 рр.',
      },
      darwin1859: { title: '«Походження видів» Дарвіна', dates: '1859 р.' },
      emancipation1863: {
        title: 'Прокламація про звільнення',
        dates: '1863 р.',
      },
      meiji1868: { title: 'Реставрація Мейдзі', dates: 'від 1868 р.' },
      suez1869: { title: 'Відкриття Суецького каналу', dates: '1869 р.' },
      bell1876: { title: 'Телефон Белла', dates: '1876 р.' },
      lightbulb1879: {
        title: 'Електричне світло Менло-Парку',
        dates: '1879 р.',
      },
      liberty1886: { title: 'Статуя Свободи', dates: 'відкрита 1886 р.' },
      eiffel1889: { title: 'Ейфелева вежа', dates: '1889 р.' },
      xray1895: { title: 'Рентгенівські промені', dates: '1895 р.' },
      olympics1896: { title: 'Олімпійські ігри в Афінах', dates: '1896 р.' },
      adwa1896: { title: 'Битва при Адуа', dates: '1896 р.' },
      philippines1896: {
        title: 'Філіппінська революція',
        dates: 'розпочалася 1896 р.',
      },
      marconi1897: { title: 'Бездротові сигнали Марконі', dates: '1897 р.' },
      blitz1940: { title: 'Укриття під час Бліцу', dates: '1940–1941 рр.' },
      normandy1944: { title: 'Висадка в Нормандії', dates: '6 червня 1944 р.' },
      partition1947: { title: 'Поділ Британської Індії', dates: '1947 р.' },
      udhr1948: { title: 'Декларація прав людини', dates: '1948 р.' },
      dna1953: { title: 'Подвійна спіраль ДНК', dates: '1953 р.' },
      brown1954: { title: '«Браун проти Ради освіти»', dates: '1954 р.' },
      bandung1955: { title: 'Бандунзька конференція', dates: '1955 р.' },
      nasa1958: { title: 'Заснування NASA', dates: '1958 р.' },
      gagarin1961: { title: '«Восток-1» Гагаріна', dates: '1961 р.' },
      march1963: { title: 'Марш на Вашингтон', dates: '1963 р.' },
      mexico1968: { title: 'Олімпіада в Мехіко', dates: '1968 р.' },
      microprocessor1971: {
        title: 'Мікропроцесор Intel 4004',
        dates: '1971 р.',
      },
      mobile1973: { title: 'Ручний мобільний телефон', dates: '1973 р.' },
      apolloSoyuz1975: {
        title: 'Стикування «Аполлон — Союз»',
        dates: '1975 р.',
      },
      smallpox1980: {
        title: 'Ліквідація натуральної віспи',
        dates: 'оголошено 1980 р.',
      },
      internet1983: { title: 'Перехід ARPANET на TCP/IP', dates: '1983 р.' },
      liveAid1985: { title: 'Концерти Live Aid', dates: '1985 р.' },
      chornobyl1986: {
        title: 'Аварія на Чорнобильській АЕС',
        dates: '1986 р.',
      },
      montreal1987: { title: 'Монреальський протокол', dates: '1987 р.' },
      web1989: { title: 'Пропозиція Всесвітньої павутини', dates: '1989 р.' },
      chauvet: { title: 'Печера Шове', dates: 'бл. 32 000–30 000 років тому' },
      carnac: { title: 'Мегаліти Карнака', dates: 'V–III тис. до н. е.' },
      banChiang: { title: 'Бан-Чіанг', dates: 'II–I тис. до н. е.' },
      dilmun: {
        title: 'Кургани Дільмуна',
        dates: 'бл. 2050–1750 рр. до н. е.',
      },
      giza: { title: 'Велика піраміда Гізи', dates: 'бл. 2600 р. до н. е.' },
      abuSimbel: { title: 'Абу-Сімбел', dates: 'XIII ст. до н. е.' },
      thebes: { title: 'Стародавні Фіви', dates: 'II–I тис. до н. е.' },
      sanchi: { title: 'Ступи Санчі', dates: 'від III ст. до н. е.' },
      ajanta: {
        title: 'Печери Аджанти',
        dates: 'II ст. до н. е. — VI ст. н. е.',
      },
      pasargadae: { title: 'Пасаргади', dates: 'VI ст. до н. е.' },
      ephesus: { title: 'Римський Ефес', dates: 'I–II ст. н. е.' },
      pompeii: { title: 'Помпеї', dates: 'поховане 79 р. н. е.' },
      colosseum: { title: 'Римський Колізей', dates: 'відкритий 80 р. н. е.' },
      hadriansWall: { title: 'Вал Адріана', dates: 'від 122 р. н. е.' },
      palmyra: { title: 'Пальміра', dates: 'I–III ст. н. е.' },
      hegra: {
        title: 'Набатейська Хегра',
        dates: 'I ст. до н. е. — I ст. н. е.',
      },
      leptisMagna: { title: 'Лептіс-Магна', dates: 'II–III ст. н. е.' },
      delphi: { title: 'Святилище Дельф', dates: 'VI–IV ст. до н. е.' },
      mogao: { title: 'Печери Могао', dates: 'від IV ст. н. е.' },
      anuradhapura: { title: 'Анурадхапура', dates: 'від IV ст. до н. е.' },
      kyivSophia: { title: 'Софія Київська', dates: 'XI ст.' },
      bulguksa: { title: 'Храм Пульгукса', dates: 'VIII ст.' },
      himeji: { title: 'Замок Хімедзі', dates: 'початок XVII ст.' },
      forbiddenCity: { title: 'Заборонене місто', dates: 'завершено 1420 р.' },
      machuPicchu: { title: 'Мачу-Пікчу', dates: 'XV ст.' },
      marrakesh: { title: 'Середньовічний Марракеш', dates: 'від 1070 р.' },
      fez: { title: 'Медіна Феса', dates: 'IX–XIV ст.' },
      kairouan: { title: 'Кайруан', dates: 'заснований 670 р.' },
      timbuktu: { title: 'Тімбукту', dates: 'XV–XVI ст.' },
      askia: { title: 'Гробниця Аскії', dates: '1495 р.' },
      sukhothai: { title: 'Королівство Сукхотай', dates: 'XIII–XIV ст.' },
      bagan: { title: 'Баган', dates: 'XI–XIII ст.' },
      bamiyan: { title: 'Долина Баміан', dates: 'VI–VII ст.' },
      greatWall: { title: 'Великий мур доби Мін', dates: 'XIV–XVII ст.' },
      montSaintMichel: { title: 'Мон-Сен-Мішель', dates: 'XI–XVI ст.' },
      venice: { title: 'Середньовічна Венеція', dates: 'XIII–XV ст.' },
      lubeck: { title: 'Ганзейський Любек', dates: 'XIII–XV ст.' },
      novgorod: { title: 'Середньовічний Новгород', dates: 'XI–XV ст.' },
      haeinsa: { title: 'Дошки храму Хеїнса', dates: 'XIII ст.' },
      shibam: { title: 'Старе місто Шибам', dates: 'XVI ст.' },
      zhengHe: { title: 'Подорожі Чжен Хе', dates: '1405–1433 рр.' },
      gutenberg: { title: 'Друкарня Гутенберга', dates: 'бл. 1455 р.' },
      istanbul1453: { title: 'Османський Константинополь', dates: '1453 р.' },
      tenochtitlan: { title: 'Теночтітлан', dates: 'XIV–XVI ст.' },
      fatehpurSikri: { title: 'Фатехпур-Сікрі', dates: '1570–1580-ті рр.' },
      sistineCeiling: {
        title: 'Стеля Сікстинської капели',
        dates: '1508–1512 рр.',
      },
      copernicus1543: { title: 'Книга Коперника', dates: '1543 р.' },
      suleymaniye: { title: 'Мечеть Сулейманіє', dates: '1550–1557 рр.' },
      globe1599: { title: 'Театр «Глобус»', dates: 'відкритий 1599 р.' },
      galileo1609: { title: 'Телескоп Галілея', dates: 'від 1609 р.' },
      tajMahal: { title: 'Тадж-Махал', dates: '1632–1648 рр.' },
      isfahan: { title: 'Сефевідський Ісфаган', dates: 'XVII ст.' },
      versailles: { title: 'Версальський палац', dates: 'XVII–XVIII ст.' },
      newton1687: { title: '«Начала» Ньютона', dates: '1687 р.' },
      petersburg1703: {
        title: 'Заснування Санкт-Петербурга',
        dates: 'від 1703 р.',
      },
      declaration1776: {
        title: 'Декларація незалежності США',
        dates: '1776 р.',
      },
      montgolfier1783: { title: 'Куля Монгольф’є', dates: '1783 р.' },
      french1789: { title: 'Французька революція', dates: 'від 1789 р.' },
      wollstonecraft1792: { title: '«На захист прав жінок»', dates: '1792 р.' },
      jenner1796: { title: 'Щеплення Дженнера', dates: '1796 р.' },
      nobel1901: { title: 'Перші Нобелівські премії', dates: '1901 р.' },
      einstein1905: { title: 'Рік відкриттів Ейнштейна', dates: '1905 р.' },
      modelT1908: { title: 'Форд Модел Т', dates: '1908 р.' },
      southPole1911: {
        title: 'Амундсен на Південному полюсі',
        dates: '14 грудня 1911 р.',
      },
      titanic1912: { title: 'Подорож «Титаніка»', dates: '1912 р.' },
      panama1914: { title: 'Відкриття Панамського каналу', dates: '1914 р.' },
      russian1917: { title: 'Російська революція', dates: '1917 р.' },
      flu1918: { title: 'Пандемія грипу 1918 року', dates: '1918–1919 рр.' },
      suffrage1920: {
        title: '19-та поправка до Конституції США',
        dates: '1920 р.',
      },
      tutankhamun1922: {
        title: 'Гробниця Тутанхамона',
        dates: 'відкрита 1922 р.',
      },
      turkey1923: { title: 'Турецька Республіка', dates: '1923 р.' },
      lindbergh1927: { title: '«Дух Сент-Луїса»', dates: '1927 р.' },
      crash1929: { title: 'Крах на Волл-стріт', dates: '1929 р.' },
      saltMarch1930: { title: 'Соляний похід', dates: '1930 р.' },
      earhart1932: { title: 'Політ Ергарт через Атлантику', dates: '1932 р.' },
      war1939: { title: 'Початок війни в Європі', dates: '1939 р.' },
      hubble1990: { title: 'Телескоп «Габбл»', dates: '1990 р.' },
      mandela1994: { title: 'Вибори в Південній Африці', dates: '1994 р.' },
      pathfinder1997: { title: '«Марс Пасфайндер»', dates: '1997 р.' },
      iss1998: { title: 'Початок складання МКС', dates: '1998 р.' },
      monteAlban: {
        title: 'Монте-Альбан',
        dates: 'бл. 500 р. до н. е. — 900 р. н. е.',
      },
      palenque: { title: 'Майянський Паленке', dates: 'бл. 500–700 рр.' },
      tiwanaku: { title: 'Тіуанако', dates: 'бл. 500–900 рр.' },
      mesaVerde: { title: 'Оселі Меса-Верде', dates: 'XII–XIII ст.' },
      rapaNui: { title: 'Моаї Рапа-Нуї', dates: 'бл. XIII–XVI ст.' },
      brihadeeswara: { title: 'Храм Брігадішвара', dates: 'бл. 1010 р.' },
      mapungubwe: {
        title: 'Королівство Мапунгубве',
        dates: 'бл. 1200–1300 рр.',
      },
      harar: { title: 'Мурований Харар', dates: 'від XVI ст.' },
      ussr1991: { title: 'Кінець Радянського Союзу', dates: '1991 р.' },
      beijing1995: { title: 'Пекінська конференція жінок', dates: '1995 р.' },
      dolly1996: { title: 'Вівця Доллі', dates: 'народилася 1996 р.' },
      liverpool1830: {
        title: 'Залізниця Ліверпуль — Манчестер',
        dates: 'відкрита 1830 р.',
      },
      tokyo1964: { title: 'Олімпійські ігри в Токіо', dates: '1964 р.' },
      transcontinental1915: {
        title: 'Трансконтинентальний телефонний дзвінок',
        dates: '1915 р.',
      },
      transatlantic1927: {
        title: 'Трансатлантичний телефонний дзвінок',
        dates: '1927 р.',
      },
      segoviaAqueduct: { title: 'Акведук Сеговії', dates: 'римська доба' },
      tarragonaAqueduct: {
        title: 'Акведук Лес-Ферререс',
        dates: 'римська доба',
      },
      elvasAqueduct: {
        title: 'Акведук Аморейра',
        dates: 'кінець XVI — початок XVII ст.',
      },
      epidaurusTheatre: { title: 'Театр Епідавра', dates: 'IV ст. до н. е.' },
      benz1886: { title: 'Автомобіль Бенца', dates: '1886 р.' },
      beetle1945: {
        title: 'Volkswagen Beetle',
        dates: 'серійне виробництво з 1945 р.',
      },
      mini1959: { title: 'Класичний Mini', dates: 'представлений 1959 р.' },
      scott1912: {
        title: 'Експедиція Скотта до Південного полюса',
        dates: 'досягла полюса 1912 р.',
      },
      mawson1911: {
        title: 'Антарктична експедиція Моусона',
        dates: '1911–1914 рр.',
      },
      shackleton1914: {
        title: 'Експедиція Шеклтона на «Ендюранс»',
        dates: '1914–1917 рр.',
      },
      charlesBalloon1783: { title: 'Воднева куля Шарля', dates: '1783 р.' },
      blanchardBalloon1785: {
        title: 'Переліт протоки Ла-Манш на кулі',
        dates: '1785 р.',
      },
      zeppelin1900: { title: 'Перший політ цепеліна', dates: '1900 р.' },
      oscars1929: { title: 'Перша церемонія «Оскара»', dates: '1929 р.' },
      pulitzer1917: { title: 'Перші Пулітцерівські премії', dates: '1917 р.' },
      fields1936: { title: 'Перші медалі Філдса', dates: '1936 р.' },
      panic1907: { title: 'Фінансова паніка 1907 року', dates: '1907 р.' },
      blackMonday1987: { title: '«Чорний понеділок»', dates: '1987 р.' },
      crisis2008: { title: 'Світова фінансова криза', dates: '2007–2009 рр.' },
      kamakuraSamurai: {
        title: 'Самураї періоду Камакура',
        dates: '1185–1333 рр.',
      },
      sengokuSamurai: { title: 'Самураї періоду Сенґоку', dates: 'XV–XVI ст.' },
      edoSamurai: { title: 'Самураї періоду Едо', dates: '1603–1868 рр.' },
      merian1705: {
        title: 'Дослідження комах Меріан',
        dates: 'опубліковані 1705 р.',
      },
      wallace1854: {
        title: 'Малайська експедиція Воллеса',
        dates: '1854–1862 рр.',
      },
      mendel1865: {
        title: 'Досліди Менделя з горохом',
        dates: 'представлені 1865 р.',
      },
      tgv1981: { title: 'Французький TGV', dates: 'початок руху 1981 р.' },
      ice1991: { title: 'Німецький ICE', dates: 'початок руху 1991 р.' },
      eurostar1994: { title: 'Eurostar', dates: 'початок руху 1994 р.' },
      dynatac1984: {
        title: 'Мобільний телефон DynaTAC',
        dates: 'у продажу з 1984 р.',
      },
      vodafone1985: {
        title: 'Перший мобільний дзвінок Vodafone',
        dates: '1985 р.',
      },
      sms1992: { title: 'Перше SMS-повідомлення', dates: '1992 р.' },
    },
    questions: {
      clay: {
        prompt:
          'Писар залишає клиноподібні знаки на глиняній табличці. Яка цивілізація започаткувала цю писемну традицію?',
        fact: 'Найдавніше письмо в шумерських містах допомагало обліковувати й розподіляти запаси їжі.',
      },
      papyrus: {
        prompt: 'У який із цих періодів побудували великі піраміди Гізи?',
        fact: 'Три знамениті піраміди Гізи належали фараонам Хуфу, Хафрі та Менкаурі.',
      },
      bronze: {
        prompt:
          'Яка династія відливала оздоблені бронзові посудини для ритуалів на честь предків?',
        fact: 'У бронзових посудинах Шан приносили їжу або напої. Їхні складні орнаменти часто зображали тварин.',
      },
      cacao: {
        prompt:
          'При чиєму давньому дворі знатна людина могла пити пінний какао з розписаної чаші?',
        fact: 'Митці класичних мая розписували чаші для какао. Напій переливали між посудинами, щоб утворилася піна.',
      },
      indusDrain: {
        prompt:
          'Яка цивілізація збудувала в Мохенджо-Даро цегляні вулиці зі стоками та громадські купальні?',
        fact: 'У місті були колодязі, купальні й розгалужена система водовідведення під спланованими вулицями.',
      },
      indusSeals: {
        prompt:
          'Яка цивілізація залишила кам’яні печатки із зображеннями тварин і досі не розшифрованими знаками?',
        fact: 'На багатьох печатках долини Інду над коротким рядком знаків зображено тварину. Ці знаки досі не вдалося надійно прочитати.',
      },
      persiaPersepolis: {
        prompt:
          'У церемоніальному центрі якої імперії кам’яні сходи прикрашали процесії людей із дарами?',
        fact: 'Рельєфи Персеполя зображали людей з різних частин Ахеменідської імперії біля царського двору.',
      },
      persiaRoad: {
        prompt:
          'Яка імперія з’єднала Сарди й Сузи Царською дорогою для подорожей і передачі звісток?',
        fact: 'Перська Царська дорога полегшувала зв’язок, торгівлю та збір податків у величезній імперії.',
      },
      romeAqueduct: {
        prompt:
          'Яка цивілізація збудувала акведук Пон-дю-Гар для постачання води до Німа?',
        fact: 'Пон-дю-Гар проводив воду через річку на шляху завдовжки близько 50 кілометрів до давнього Німа.',
      },
      romeAppia: {
        prompt:
          'Аппієва дорога з’єднала Рим і Капую у 312 році до н. е. Хто її збудував?',
        fact: 'Згодом Аппієва дорога стала важливим шляхом для подорожей, торгівлі та розширення Риму.',
      },
      maliMusa: {
        prompt:
          'Знамените паломництво Манси Муси до Мекки привернуло увагу до багатства якої імперії?',
        fact: 'Після його подорожі через Каїр у 1324–1325 роках про золото Малі дізналися далеко за межами Західної Африки.',
      },
      maliTimbuktu: {
        prompt:
          'Яка імперія допомогла Тімбукту стати перехрестям торгівлі сіллю, золотом і книгами?',
        fact: 'Купці Тімбукту торгували сіллю й золотом, а вчені збирали та обмінювали рукописи.',
      },
      songType: {
        prompt:
          'За якої династії Бі Шен складав сторінки з багаторазових глиняних літер?',
        fact: 'Бі Шен створив рухомий глиняний шрифт близько 1041–1048 років, хоча друк із дерев’яних дощок залишався поширеним.',
      },
      songMoney: {
        prompt:
          'Яка династія запровадила державні паперові гроші у 1120-х роках?',
        fact: 'Зростання торгівлі в Китаї доби Сун зробило паперові гроші корисними для розрахунків.',
      },
      incaQuipu: {
        prompt:
          'Посадовці якої імперії обліковували людей і товари за допомогою вузликових шнурів кіпу?',
        fact: 'Шнури, кольори й вузлики кіпу допомагали записувати кількість та інші відомості.',
      },
      incaRoad: {
        prompt:
          'Чия мережа доріг перетинала Анди кам’яними шляхами, сходами й мостами?',
        fact: 'Мережа Капак-Ньян простягалася більш ніж на 30 000 кілометрів і досягла найбільшого розмаху в XV столітті.',
      },
      abbasidWisdom: {
        prompt:
          'За правління якої династії багдадський Дім мудрості збирав і вивчав наукові тексти?',
        fact: 'Учені в Багдаді Аббасидів перекладали, досліджували й зберігали знання різних традицій.',
      },
      abbasidTranslations: {
        prompt:
          'За якої династії в Багдаді перекладали арабською твори з грецької, санскриту й перської?',
        fact: 'Між VIII і X століттями Багдад став важливим центром наукових досліджень.',
      },
      vikingShips: {
        prompt:
          'Які мореплавці перетинали Північну Атлантику, щоб оселитися в Ісландії та Гренландії?',
        fact: 'Скандинавські мореплавці дісталися Британії, Ісландії, Гренландії й навіть Північної Америки.',
      },
      vikingGreenland: {
        prompt:
          'Хто доплив зі Скандинавії до Гренландії за багато століть до подорожі Колумба через Атлантику?',
        fact: 'Мореплавці доби вікінгів дісталися Гренландії через острови Північної Атлантики.',
      },
      greeceOlympia: {
        prompt:
          'Де з 776 року до н. е. кожні чотири роки проводили Олімпійські ігри?',
        fact: 'Атлети з грецьких міст збиралися в Олімпії, а переможців нагороджували оливковими вінками.',
      },
      greeceParthenon: {
        prompt: 'Яка цивілізація збудувала Парфенон на афінському Акрополі?',
        fact: 'Парфенон спорудили у V столітті до н. е. під час великої будівельної програми Афін.',
      },
      phoeniciaPurple: {
        prompt:
          'Міста яких мореплавців виготовляли цінний пурпуровий барвник із молюсків мурексів?',
        fact: 'Фінікійські Тір і Сідон торгували пурпуровими тканинами по всьому Середземномор’ю.',
      },
      phoeniciaAlphabet: {
        prompt:
          'Чий алфавіт давні греки перейняли й пристосували до своєї мови?',
        fact: 'Фінікійські купці поширювали свій алфавіт Середземномор’ям; від нього походять грецькі літери.',
      },
      aksumStelae: {
        prompt:
          'Яке царство спорудило велетенські різьблені кам’яні стели в Ефіопському нагір’ї?',
        fact: 'Деякі аксумські стели вирізьблені так, ніби це багатоповерхові будинки.',
      },
      aksumTrade: {
        prompt:
          'Яке африканське царство контролювало торгівлю Червоним морем через порт Адуліс?',
        fact: 'Аксум з’єднував торгові шляхи внутрішньої Африки з Аравією та Червоним морем.',
      },
      khmerWat: {
        prompt:
          'Яка імперія збудувала величезний храмовий комплекс Ангкор-Ват?',
        fact: 'Ангкор-Ват — один із багатьох монументальних храмів великого міста Ангкор.',
      },
      khmerWater: {
        prompt: 'Чия столиця Ангкор мала великі водосховища, канали й дамби?',
        fact: 'У ландшафті кхмерського Ангкора храми поєднувалися з розгалуженою водною системою.',
      },
      zimbabweWalls: {
        prompt:
          'Яке африканське місто звело величезну гранітну огорожу без розчину?',
        fact: 'Будівничі народу шона у Великому Зімбабве складали ретельно оброблені гранітні блоки в довгі мури.',
      },
      zimbabweTrade: {
        prompt:
          'Де серед кам’яних руїн археологи знайшли китайську порцеляну й монети з Кілви?',
        fact: 'Знахідки у Великому Зімбабве свідчать про торгові зв’язки зі світом Індійського океану.',
      },
      mexicaLake: {
        prompt:
          'Чия столиця Теночтітлан стояла на озері Тескоко й сполучалася з берегом дамбами?',
        fact: 'Канали Теночтітлана наповнювали човни, а через озеро вели три підняті дороги-дамби.',
      },
      mexicaPrecinct: {
        prompt: 'У столиці якої імперії на озері був великий священний центр?',
        fact: 'У священному центрі Теночтітлана були храми, майданчик для гри в м’яч і школи для знатних юнаків.',
      },
      beninPlaques: {
        prompt:
          'Яке царство прикрашало колони свого палацу рельєфними латунними плитами?',
        fact: 'Плити Беніну зображали придворне життя, правителів, обряди й історичні події.',
      },
      beninCasting: {
        prompt:
          'Придворні майстри якого царства відливали латунні плити методом втраченого воску?',
        fact: 'Багато знаменитих «бенінських бронз» насправді зроблені з латуні.',
      },
      mughalTaj: {
        prompt: 'Яка імперія збудувала Тадж-Махал на згадку про Мумтаз-Махал?',
        fact: 'Шах Джахан замовив біломармуровий мавзолей в Агрі у XVII столітті.',
      },
      mughalFatehpur: {
        prompt:
          'За якої імперії Акбар збудував сплановану столицю Фатехпур-Сікрі?',
        fact: 'Фатехпур-Сікрі був столицею імперії Великих Моголів лише близько десяти років.',
      },
      unCharter: {
        prompt:
          'Після Другої світової війни представники 50 країн підписали Статут у Сан-Франциско. Що вони створили?',
        fact: 'Статут ООН підписали в червні 1945 року, а чинності він набув у жовтні.',
      },
      unAssembly: {
        prompt:
          'Представники 51 країни вперше зібралися на Генеральну Асамблею в Лондоні 1946 року. Що це була за організація?',
        fact: 'Перша Генеральна Асамблея ООН відкрилася 10 січня 1946 року в лондонському Сентрал-голі.',
      },
      sputnikFirst: {
        prompt:
          'Яка невелика металева куля з чотирма антенами стала першим штучним супутником Землі?',
        fact: 'СРСР запустив «Супутник-1» 4 жовтня 1957 року — так почалася космічна ера.',
      },
      sputnikSignals: {
        prompt:
          'Сигнали якого об’єкта, що обертався навколо Землі 1957 року, чули радіоаматори?',
        fact: '«Супутник-1» облітав Землю приблизно за 96 хвилин і передавав радіосигнал.',
      },
      shinkansenRoute: {
        prompt:
          'Яка нова залізниця з’єднала Токіо й Осаку після відкриття 1964 року?',
        fact: 'Токайдо-сінкансен почав роботу 1964 року й з’єднав найбільші міські райони Японії.',
      },
      shinkansenTime: {
        prompt:
          'Який поїзд після відкриття скоротив подорож між Токіо й Осакою з 6,5 до чотирьох годин?',
        fact: 'Спочатку Токайдо-сінкансен скоротив поїздку між Токіо й Осакою з 6,5 до чотирьох годин.',
      },
      apolloLanding: {
        prompt: 'Яка місія вперше висадила людей на Місяць у липні 1969 року?',
        fact: 'Місячний модуль «Орел» місії «Аполлон-11» сів у Морі Спокою.',
      },
      apolloCollins: {
        prompt:
          'Армстронг і Олдрін ходили Місяцем, а Майкл Коллінз чекав на орбіті. Яка це була місія?',
        fact: 'Коллінз пілотував командний модуль «Колумбія», поки інші досліджували поверхню.',
      },
      earthDayCrowds: {
        prompt:
          'Яка подія 1970 року зібрала близько 20 мільйонів американців на природоохоронні демонстрації?',
        fact: 'Перший День Землі відбувся 22 квітня 1970 року в різних містах США.',
      },
      earthDayAgency: {
        prompt:
          'Яка громадська подія 1970 року допомогла зробити захист довкілля важливою темою в США?',
        fact: 'Перший День Землі відбувся за кілька місяців до створення Агентства з охорони довкілля США.',
      },
      voyagerRecord: {
        prompt:
          'Які два космічні апарати несли позолочені платівки із зображеннями та звуками Землі?',
        fact: 'Обидва «Вояджери» взяли із собою Золоті платівки з привітаннями, музикою, звуками природи й зображеннями.',
      },
      voyagerOrder: {
        prompt:
          'У якій космічній програмі 1977 року апарат із номером «2» стартував раніше за «1»?',
        fact: '«Вояджер-2» стартував 20 серпня 1977 року, а «Вояджер-1» — 5 вересня.',
      },
      ibmPcLaunch: {
        prompt:
          'Який комп’ютер 1981 року допоміг зробити відкриту архітектуру галузевим стандартом?',
        fact: 'Модель IBM 5150 стала настільки впливовою, що «ПК» перетворилося на загальну назву.',
      },
      ibmPcSoftware: {
        prompt:
          'Який настільний комп’ютер 1981 року постачали з програмами VisiCalc та EasyWriter?',
        fact: 'Перший IBM PC давав змогу працювати з текстами й таблицями, а також грати.',
      },
      berlinWallOpening: {
        prompt:
          'Який мур відкрили на берлінських прикордонних переходах 9 листопада 1989 року?',
        fact: 'Після оголошення нових правил виїзду люди масово рушили через переходи Берлінського муру.',
      },
      berlinWallBorder: {
        prompt:
          'На якому колишньому бар’єрі біля Бранденбурзьких воріт люди святкували Новий рік 1989-го?',
        fact: 'Берлінський мур відкрили в листопаді, а наприкінці грудня люди святкували просто на ньому.',
      },
      babylonStele: {
        prompt:
          'Правитель якого царства звелів висікти сотні судових рішень на чорній кам’яній стелі?',
        fact: 'Стела Хаммурапі містить 282 рішення про сім’ю, торгівлю, працю та інші справи.',
      },
      babylonShamash: {
        prompt:
          'Стела якого царства показує царя Хаммурапі перед богом сонця Шамашем?',
        fact: 'Рельєф угорі вавилонської стели показує, як Шамаш передає цареві символи влади.',
      },
      olmecHeads: {
        prompt:
          'Яка культура вирізьблювала велетенські кам’яні голови в особливих головних уборах?',
        fact: 'Ольмецькі скульптори надали базальтовим головам різних рис; можливо, це портрети правителів.',
      },
      olmecBasalt: {
        prompt:
          'Хто перевозив річками величезні базальтові брили, а потім вирізьблював із них голови?',
        fact: 'Ольмеки доставляли важкий камінь із гір Тустла до церемоніальних центрів, зокрема Ла-Венти.',
      },
      tangSutra: {
        prompt:
          'За якої династії у 868 році надрукували датований сувій «Діамантової сутри»?',
        fact: '«Діамантова сутра» — найдавніша збережена повна друкована книга з указаною датою.',
      },
      tangChangan: {
        prompt:
          'Столиця якої династії, Чан’ань, приймала купців і паломників Шовкового шляху?',
        fact: 'У багатокультурному Чан’ані доби Тан гості привозили товари, вірування й нові ідеї.',
      },
      florenceDome: {
        prompt:
          'У якому місті Брунеллескі звів величезний цегляний купол, завершений 1436 року?',
        fact: 'Купол собору будували 16 років, а ліхтар на його вершині додали пізніше.',
      },
      florenceConstruction: {
        prompt:
          'У якому місті доби Відродження підняли мільйони цеглин для купола собору?',
        fact: 'Будівельники підіймали матеріали високо над Флоренцією за допомогою спеціальних механізмів.',
      },
      edoPrints: {
        prompt:
          'У яку добу художники, різьбярі й друкарі створювали барвисті гравюри укійо-е?',
        fact: 'Над однією гравюрою Едо часто працювали видавець, художник, різьбяр і друкар.',
      },
      edoCapital: {
        prompt:
          'За якої доби місто Едо, нині Токіо, стало резиденцією японських сьоґунів?',
        fact: 'Майстри доби Едо зображали на гравюрах вуличне життя, театр і краєвиди.',
      },
      stocktonPassengers: {
        prompt: 'Яка залізниця 1825 року возила пасажирів за паровозом?',
        fact: 'Стоктон-Дарлінгтонська залізниця стала першою громадською залізницею з паровою тягою для пасажирів.',
      },
      stocktonLocomotion: {
        prompt: 'Під час відкриття якого шляху їхав паровоз Locomotion No. 1?',
        fact: 'На відкритті залізниці 1825 року Locomotion тягнув вагони перед великими натовпами.',
      },
      wrightFlight: {
        prompt:
          'Який апарат здійснив керований політ із двигуном над дюнами Північної Кароліни 1903 року?',
        fact: 'Перший політ пілотував Орвілл Райт, а його брат Вілбур того дня здійснив найдовший.',
      },
      wrightSeconds: {
        prompt: 'Який прорив тривав лише 12 секунд і подолав 120 футів?',
        fact: 'Перший політ літака братів Райт 17 грудня 1903 року охопив близько 36 метрів.',
      },
      penicillinMold: {
        prompt:
          'Що відкрив Флемінг, помітивши навколо плісняви зону без бактерій у чашці?',
        fact: 'Пліснява виділяла речовину, яка стримувала ріст сусідніх бактерій.',
      },
      penicillinName: {
        prompt:
          'Яке відкриття Александр Флемінг назвав на честь плісняви Penicillium?',
        fact: 'Флемінг помітив цей ефект 1928 року, а згодом інші дослідники створили на його основі ліки.',
      },
      gobekliPillars: {
        prompt:
          'Де мисливці-збирачі спорудили Т-подібні стовпи з різьбленням диких тварин?',
        fact: 'Кам’яні споруди Гебеклі-Тепе з’явилися ще до поширення кераміки в цьому регіоні.',
      },
      catalhoyukRoofs: {
        prompt:
          'У якому неолітичному поселенні люди входили до тісно збудованих будинків через дахи?',
        fact: 'Між щільно розташованими будинками Чатал-Гююка не було звичайних вулиць.',
      },
      stonehengeCircle: {
        prompt:
          'Яка доісторична пам’ятка на рівнині Солсбері відома колом стоячих каменів?',
        fact: 'Стоунхендж був частиною великого ландшафту стародавніх споруд і поховальних курганів.',
      },
      urZiggurat: {
        prompt:
          'У якому шумерському місті над рівниною Межиріччя здіймався великий ступінчастий зикурат?',
        fact: 'Зикурат Ура стояв серед великих міст дельти Тигру й Євфрату.',
      },
      knossosFrescoes: {
        prompt:
          'У якому палаці на Криті були барвисті фрески, подвір’я та приміщення для запасів?',
        fact: 'Мінойські палацові центри поєднували управління, господарство й релігійне життя.',
      },
      hattusaLionGate: {
        prompt: 'Яка столиця хетів мала величні ворота з кам’яними левами?',
        fact: 'Довгі мури Хаттуси оточували храми, царські будівлі й кілька оздоблених брам.',
      },
      mycenaeWalls: {
        prompt:
          'Яка грецька цитадель бронзової доби мала «циклопічні» мури й таблички лінійного письма Б?',
        fact: 'Мікенські таблички зберегли одні з найдавніших письмових свідчень грецької мови.',
      },
      meroePyramids: {
        prompt:
          'Де правителі царства Куш будували біля Нілу піраміди з крутими схилами?',
        fact: 'Від III століття до н. е. Мерое стало важливим місцем поховання кушитських царів.',
      },
      carthageHarbor: {
        prompt:
          'Яке північноафриканське місто мало пунічні гавані з середземноморськими кораблями?',
        fact: 'Стародавні порти Карфагена свідчать про торгівлю між культурами Середземномор’я.',
      },
      cerveteriTombs: {
        prompt:
          'Який етруський некрополь мав гробниці, вулиці та невеликі площі?',
        fact: 'Гробниці Черветері іноді повторювали кімнати й оздоблення етруських будинків.',
      },
      qinClayArmy: {
        prompt:
          'Чию гробницю оточували тисячі глиняних воїнів у натуральну величину?',
        fact: 'Теракотові воїни біля мавзолею першого імператора Цінь мають різні обличчя та обладунки.',
      },
      chavinTemple: {
        prompt:
          'Який церемоніальний центр в Андах мав кам’яні тераси й різьблені зображення тварин?',
        fact: 'Чавін приваблював паломників у високогірну долину перуанських Анд.',
      },
      nazcaGeoglyphs: {
        prompt:
          'Де на поверхні перуанської пустелі створили величезні зображення птахів і рослин?',
        fact: 'Геогліфи Наска простягаються на сотні квадратних кілометрів посушливої рівнини.',
      },
      jerichoTower: {
        prompt:
          'Яке поселення в оазі звело кам’яну вежу та мури за тисячоліття до єгипетських пірамід?',
        fact: 'Неолітичний Єрихон мав монументальну вежу, мур і рів уже в IX–VIII тисячоліттях до н. е.',
      },
      lascauxAnimals: {
        prompt:
          'Яка печера зберегла малюнки коней, биків та інших тварин льодовикової доби?',
        fact: 'Малюнки Ласко вражають уважністю до тварин, яскравими барвами й відчуттям руху.',
      },
      skaraBraeHouses: {
        prompt:
          'Яке поселення на вітряних островах мало кам’яні будинки, з’єднані вузькими критими проходами?',
        fact: 'Скара-Брей — одне з найкраще збережених неолітичних сіл північно-західної Європи.',
      },
      caralPlazas: {
        prompt:
          'Яке давнє місто Перу спорудило монументальні платформи та заглиблені круглі площі?',
        fact: 'Караль-Супе виник над зеленою долиною річки Супе близько 5000 років тому.',
      },
      ugaritAlphabet: {
        prompt:
          'Яке портове місто бронзової доби залишило глиняні таблички з раннім алфавітним клинописом?',
        fact: 'Писарі Угарита записували свою мову системою з приблизно тридцяти знаків.',
      },
      ninevehReliefs: {
        prompt:
          'У якій столиці Ассирії палацові стіни вкривали різьбленими сценами походів і царського життя?',
        fact: 'Кам’яні рельєфи Ніневії дуже докладно показували події на стінах палаців.',
      },
      petraRockCity: {
        prompt:
          'Яке караванне місто висікало величні гробниці в рожево-червоних скелях?',
        fact: 'Будівничі Петри споруджували канали, цистерни й дамби, щоб зберігати воду в пустелі.',
      },
      teotihuacanAvenue: {
        prompt:
          'У якому давньому місті Мексики Дорога мертвих проходила біля пірамід Сонця й Місяця?',
        fact: 'Між I і VII століттями Теотіуакан став одним із найбільших міст давньої Америки.',
      },
      hagiaSophiaDome: {
        prompt:
          'Яка споруда вразила Константинополь VI століття величезним центральним куполом?',
        fact: 'Собор Святої Софії завершили 537 року; його купол вплинув на архітектуру церков і мечетей.',
      },
      aachenOctagon: {
        prompt:
          'Де Карл Великий збудував восьмикутну палацову капелу на північ від Альп?',
        fact: 'Капелу заклали близько 790–800 років, а 814 року Карла Великого поховали в Ахені.',
      },
      cordobaArches: {
        prompt:
          'Яка пам’ятка Андалусії відома рядами подвійних червоно-білих арок?',
        fact: 'Велику мечеть Кордови почали будувати 786 року й розширювали в наступні століття.',
      },
      borobudurTerraces: {
        prompt:
          'Яка буддійська пам’ятка на Яві здіймається терасами зі ступами у формі дзвонів?',
        fact: 'Боробудур поєднує образи ступи, храму й гори в одній велетенській споруді.',
      },
      lalibelaRockChurches: {
        prompt:
          'Де в ефіопському нагір’ї одинадцять середньовічних церков висікли безпосередньо зі скелі?',
        fact: 'Церкви Лалібели з’єднані ровами й проходами, вирубаними в камені.',
      },
      kilwaOceanTrade: {
        prompt:
          'Яке острівне місто суахілі торгувало через Індійський океан зі східного узбережжя Африки?',
        fact: 'Серед кораловокам’яних руїн Кілви є Велика мечеть і величезний палац Хусуні-Кубва.',
      },
      bukharaSilkRoad: {
        prompt:
          'Яке місто Шовкового шляху зберегло цегляний мавзолей Ісмаїла Самані?',
        fact: 'Цей мавзолей — шедевр архітектури Бухари X століття.',
      },
      samarkandCrossroads: {
        prompt:
          'Яке місто Центральної Азії уславилося блакитними спорудами доби Тимуридів?',
        fact: 'Самарканд зростав на перехресті культур в оазі річки Зеравшан.',
      },
      djenneEarthenCity: {
        prompt:
          'Яке торгове місто Західної Африки відоме монументальною глиняною архітектурою?',
        fact: 'Дженне пов’язувало регіональні ринки з транссахарськими шляхами золота.',
      },
      cahokiaMound: {
        prompt:
          'Яке доколумбове місто насипало величезний курган Монкс-Маунд біля Міссісіпі?',
        fact: 'Кахокія була найбільшим відомим доколумбовим поселенням на північ від Мексики.',
      },
      chichenItzaCaracol: {
        prompt:
          'У якому місті мая є Ель-Кастільйо та кругла споруда Ель-Караколь?',
        fact: 'Чичен-Іца поєднує традиції будівництва мая з впливами центральної Мексики.',
      },
      alhambraPalace: {
        prompt:
          'Який палацовий комплекс над Гранадою відомий дворами Насрідів, різьбленими стінами й водоймами?',
        fact: 'Альгамбра та сусідній Хенераліфе утворюють ансамбль середньовічної андалуської архітектури.',
      },
      haitiFreedom: {
        prompt:
          'Яка країна Карибського басейну здобула незалежність від Франції після революції колишніх поневолених людей?',
        fact: 'Гаїті проголосила незалежність 1804 року й стала першою незалежною республікою темношкірих людей.',
      },
      rocketRainhill: {
        prompt:
          'Який жовтий паровоз переміг у Рейнгільських випробуваннях 1829 року?',
        fact: '«Ракета» довела, що паровози можуть працювати на залізниці Ліверпуль — Манчестер.',
      },
      faradayInduction: {
        prompt:
          'Яке відкриття показало, що зміна магнітного поля може створити електричний струм?',
        fact: 'Майкл Фарадей відкрив електромагнітну індукцію 1831 року; цей принцип лежить в основі генераторів.',
      },
      morseTelegraph: {
        prompt:
          'Який винахід передав повідомлення дротом із Вашингтона до Балтимора 1844 року?',
        fact: '24 травня 1844 року Морзе надіслав знамениту першу публічну телеграму експериментальною лінією.',
      },
      senecaDeclaration: {
        prompt:
          'На якому зібранні ухвалили «Декларацію почуттів» із вимогами прав для жінок?',
        fact: "З'їзд у Сенека-Фоллз 1848 року зібрав понад 300 людей у Весліанській каплиці.",
      },
      greatExhibitionGlass: {
        prompt:
          'Яка міжнародна виставка заповнила лондонський Кришталевий палац із заліза й скла винаходами?',
        fact: 'Понад шість мільйонів людей відвідали Велику виставку в Гайд-парку 1851 року.',
      },
      nightingaleScutari: {
        prompt:
          'З яким шпиталем пов’язана праця Флоренс Найтінгейл та її медсестер під час Кримської війни?',
        fact: 'Найтінгейл з командою доглядали поранених у Скутарі неподалік Константинополя.',
      },
      darwinOrigin: {
        prompt:
          'Яка книга 1859 року пояснила, як природний добір змінює види протягом поколінь?',
        fact: '«Походження видів» Дарвіна змінило дослідження живої природи.',
      },
      emancipationProclamation: {
        prompt:
          'Який указ 1863 року проголосив вільними поневолених людей на територіях повстання проти США?',
        fact: 'Прокламація Лінкольна стосувалася повсталих територій; для скасування рабства в усіх США знадобилися подальші зміни.',
      },
      meijiRestoration: {
        prompt:
          'Яка зміна влади завершила правління сьоґунату Токуґава та започаткувала епоху Мейдзі?',
        fact: 'Реставрація Мейдзі 1868 року передала владу новому уряду, зосередженому навколо імператора.',
      },
      suezOpening: {
        prompt:
          'Який новий водний шлях дозволив суднам плисти між Середземним і Червоним морями, не огинаючи Африку?',
        fact: 'Суецький канал відкрили 17 листопада 1869 року після багатьох років будівництва.',
      },
      bellTelephone: {
        prompt:
          'Який пристрій передав слова Александра Ґрема Белла Томасу Вотсону 1876 року?',
        fact: 'Белл запатентував телефон у березні 1876 року й за кілька днів успішно передав людський голос.',
      },
      edisonLighting: {
        prompt:
          'Який винахід освітлив лабораторію Томаса Едісона під час публічного показу 1879 року?',
        fact: 'Едісон і його команда працювали над практичною системою ламп розжарювання, яку показали в грудні 1879 року.',
      },
      libertyDedication: {
        prompt:
          'Який мідний монумент відкрили в гавані Нью-Йорка в жовтні 1886 року?',
        fact: 'Статую виготовили у Франції, перевезли частинами та зібрали на п’єдесталі в Нью-Йорку.',
      },
      eiffelExposition: {
        prompt:
          'Яка залізна вежа височіла над Всесвітньою виставкою в Парижі 1889 року?',
        fact: 'Ейфелеву вежу спорудили для виставки з нагоди сторіччя Французької революції.',
      },
      rontgenXray: {
        prompt:
          'Яке відкриття дозволило Вільгельму Рентгену отримати зображення кісток у 1895 році?',
        fact: 'За відкриття рентгенівських променів він отримав першу Нобелівську премію з фізики 1901 року.',
      },
      athensOlympics: {
        prompt:
          'Яке місто прийняло перші Олімпійські ігри сучасності 1896 року?',
        fact: 'На перших сучасних Іграх в Афінах спортсмени змагалися у дев’яти видах спорту.',
      },
      adwaVictory: {
        prompt:
          'Де ефіопські війська перемогли італійську армію вторгнення 1896 року?',
        fact: 'Перемога при Адуа стала символом захисту незалежності Ефіопії.',
      },
      philippineRevolution: {
        prompt:
          'У якому повстанні проти іспанського правління 1896 року брало участь товариство Катіпунан?',
        fact: 'Андрес Боніфасіо та інші члени Катіпунану боролися за незалежність Філіппін.',
      },
      marconiWireless: {
        prompt:
          'Яка технологія передавала повідомлення через Бристольську затоку без з’єднувального дроту?',
        fact: 'Марконі показав бездротовий телеграф у Британії та заснував компанію 1897 року.',
      },
      blitzShelters: {
        prompt:
          'Під час якої події воєнного часу мешканці Лондона ночували на платформах метро?',
        fact: 'Під час Бліцу родини використовували станції метро як укриття від повторних авіанальотів.',
      },
      normandyLandings: {
        prompt:
          'Яка операція привела десантні судна союзників до берегів північної Франції 6 червня 1944 року?',
        fact: 'Висадка в Нормандії відкрила союзникам шлях для наступу в окупованій Західній Європі.',
      },
      partitionTrains: {
        prompt:
          'Який поділ Британської Індії змусив мільйони людей перетинати нові кордони, часто потягами?',
        fact: 'Поділ 1947 року створив Індію та Пакистан і спричинив масове переселення на тлі насильства.',
      },
      humanRightsDeclaration: {
        prompt:
          'Який документ Генеральна Асамблея ООН ухвалила в Парижі у грудні 1948 року?',
        fact: 'Загальна декларація прав людини виклала права та свободи, належні кожній людині.',
      },
      dnaDoubleHelix: {
        prompt:
          'Структуру якої молекули у формі подвійної спіралі описали 1953 року за підказками рентгенівських знімків?',
        fact: 'Рентгеноструктурні дослідження Розалінд Франклін і Моріса Вілкінса допомогли розкрити будову ДНК.',
      },
      brownDecision: {
        prompt:
          'Яке рішення Верховного суду США визнало расову сегрегацію в державних школах неконституційною?',
        fact: 'Рішення у справі Брауна 1954 року відкинуло правову основу роздільного навчання дітей за расою.',
      },
      bandungConference: {
        prompt:
          'Яка конференція зібрала лідерів країн Азії та Африки в Індонезії у квітні 1955 року?',
        fact: 'Делегати в Бандунгу обговорювали співпрацю та незалежність.',
      },
      nasaFounded: {
        prompt:
          'Яке цивільне космічне агентство почало роботу в США у жовтні 1958 року?',
        fact: 'NASA створили після запуску «Супутника»; агентство запрацювало 1 жовтня 1958 року.',
      },
      gagarinOrbit: {
        prompt: 'Який політ уперше вивів людину на орбіту Землі?',
        fact: 'Юрій Гагарін облетів Землю на «Востоці-1» 12 квітня 1961 року; політ тривав 108 хвилин.',
      },
      washingtonMarch: {
        prompt:
          'Яке зібрання 1963 року заповнило Національну алею вимогами роботи й громадянських прав?',
        fact: 'Близько 250 тисяч людей долучилися до Маршу на Вашингтон за робочі місця і свободу.',
      },
      mexicoOlympics: {
        prompt: 'Які Олімпійські ігри вперше відбулися в Латинській Америці?',
        fact: 'Мехіко прийняло Ігри 1968 року на висоті близько 2300 метрів.',
      },
      intel4004: {
        prompt:
          'Який мініатюрний пристрій 1971 року вмістив програмований центральний процесор на одному чипі?',
        fact: 'Intel 4004 спершу створили для калькулятора, а згодом продавали як універсальний чип.',
      },
      mobileCall: {
        prompt:
          'Що продемонстрував Мартін Купер дзвінком на вулиці Нью-Йорка 1973 року?',
        fact: 'Команда Купера в Motorola створила ранній ручний стільниковий телефон завбільшки з цеглину.',
      },
      apolloSoyuzHandshake: {
        prompt:
          'Яка місія звела американський і радянський екіпажі для рукостискання на орбіті Землі?',
        fact: 'Кораблі «Аполлон» і «Союз» зістикувалися 17 липня 1975 року під час спільної місії.',
      },
      smallpoxEradication: {
        prompt:
          'Яку хворобу Всесвітня асамблея охорони здоров’я офіційно оголосила викоріненою 1980 року?',
        fact: 'Всесвітня кампанія вакцинації та нагляду припинила природне передавання віспи.',
      },
      tcpIpSwitch: {
        prompt:
          'Яка зміна 1983 року зробила TCP/IP спільними протоколами для комп’ютерів ARPANET?',
        fact: 'Узгоджений перехід 1 січня 1983 року допоміг з’єднати мережі в Інтернет.',
      },
      liveAidConcert: {
        prompt:
          'Які благодійні концерти 1985 року об’єднали великі аудиторії в Лондоні та Філадельфії?',
        fact: 'Live Aid збирав кошти й привертав увагу до допомоги під час голоду; архів зберігає Національна бібліотека Ірландії.',
      },
      chornobylAccident: {
        prompt:
          'На якій атомній електростанції в Україні сталися вибух і пожежа у квітні 1986 року?',
        fact: 'Чорнобильська аварія спричинила викид радіоактивних речовин і змусила багатьох людей залишити домівки.',
      },
      montrealProtocol: {
        prompt:
          'Яка міжнародна угода 1987 року мала поступово припинити використання речовин, що руйнують озоновий шар?',
        fact: 'Монреальський протокол підписали 1987 року; він набув чинності 1989 року.',
      },
      webProposal: {
        prompt:
          'Що Тім Бернерс-Лі запропонував у CERN 1989 року для пов’язування наукових документів?',
        fact: 'Його перша пропозиція Web привела до появи сервера й браузера в CERN до кінця 1990 року.',
      },
      chauvetAnimals: {
        prompt:
          'У якій печері понад 30 000 років тому зобразили левів, носорогів та інших тварин?',
        fact: 'Художники Шове поєднували тіні та форму скелі, щоб передати рух тварин.',
      },
      carnacRows: {
        prompt: 'Де тисячі неолітичних каменів утворюють довгі ряди в Бретані?',
        fact: 'Ряди каменів Карнака тягнуться на кілька кілометрів; їхнє призначення досі обговорюють.',
      },
      banChiangPots: {
        prompt:
          'На якій доісторичній пам’ятці Таїланду виготовляли посуд із червоними спіральними візерунками?',
        fact: 'Кераміка й поховання Бан-Чіанга розповідають про давнє землеробство та ремесла Південно-Східної Азії.',
      },
      dilmunMounds: {
        prompt:
          'Яке суспільство бронзової доби на Бахрейні залишило тисячі поховальних курганів?',
        fact: 'Поля курганів свідчать про людність Дільмуна — торгового вузла між Месопотамією та долиною Інду.',
      },
      gizaKhufu: {
        prompt: 'Яку споруду збудували як гробницю єгипетського фараона Хуфу?',
        fact: 'Велика піраміда — єдине з античних чудес світу, що збереглося донині.',
      },
      abuSimbelStatues: {
        prompt:
          'Біля якого скельного єгипетського храму стоять чотири велетенські статуї Рамсеса II?',
        fact: 'У 1960-х роках храм перенесли вище, рятуючи його від вод озера Насер.',
      },
      thebesKarnak: {
        prompt:
          'У якому єгипетському місті покоління фараонів розбудовували величезний храмовий комплекс Карнак?',
        fact: 'Гігантські колони й святилища Карнака будували та змінювали протягом багатьох століть.',
      },
      sanchiStupa: {
        prompt:
          'На якій буддійській пам’ятці Індії до великої ступи ведуть різьблені кам’яні ворота?',
        fact: 'Ворота Санчі розповідають історії різьбленням людей, тварин і символів.',
      },
      ajantaPaintings: {
        prompt:
          'У яких печерах Індії збереглися буддійські настінні розписи скельних монастирів?',
        fact: 'Розписані печери Аджанти створювали в кілька етапів із перервою на століття.',
      },
      pasargadaeCyrus: {
        prompt:
          'Де стоїть ступінчаста кам’яна гробниця, яку вважають похованням Кіра Великого?',
        fact: 'Кір заснував державу Ахеменідів; Пасаргади були одним із її перших царських осередків.',
      },
      ephesusLibrary: {
        prompt:
          'У якому античному місті зберігся монументальний фасад бібліотеки Цельса?',
        fact: 'Бібліотеку збудували в римському Ефесі на початку II століття н. е.',
      },
      pompeiiAsh: {
        prompt: 'Яке римське місто поховало виверження Везувію 79 року н. е.?',
        fact: 'Попіл зберіг вулиці, будинки й побутові речі, що розповідають про життя римського міста.',
      },
      colosseumArena: {
        prompt:
          'Який римський амфітеатр відкрили 80 року н. е. для публічних видовищ?',
        fact: 'Численні входи Колізею допомагали величезним натовпам проходити всередину.',
      },
      hadriansWallFrontier: {
        prompt:
          'Який римський кордон простягнувся Північною Британією за імператора Адріана?',
        fact: 'Вал мав форти, малі фортеці й брами — це була не просто кам’яна перепона.',
      },
      palmyraCaravans: {
        prompt:
          'Яке місто-оаза стало перехрестям караванів між Римом і землями далі на сході?',
        fact: 'Довга колонадна вулиця Пальміри свідчила про багатство від далекої торгівлі.',
      },
      hegraTombs: {
        prompt:
          'Де набатейські майстри вирізьбили монументальні гробниці в пісковику Аравії?',
        fact: 'Хегра була великим південним містом набатеїв; написи на гробницях називають їхніх власників.',
      },
      leptisForum: {
        prompt:
          'Яке римське місто на узбережжі сучасної Лівії прикрасили за Септимія Севера?',
        fact: 'Север народився в Лептіс-Магні й підтримав там масштабне будівництво.',
      },
      delphiOracle: {
        prompt:
          'У якому грецькому святилищі відвідувачі питали пророцтв в оракула Аполлона?',
        fact: 'Грецькі міста-держави виставляли дари й будували скарбниці на шляху до храму Аполлона.',
      },
      mogaoSilkRoad: {
        prompt:
          'Які печерні храми біля Дуньхуана зберегли буддійське мистецтво Шовкових шляхів?',
        fact: 'Розписи Могао показують релігійні сюжети, торгівлю та повсякденне життя.',
      },
      anuradhapuraCity: {
        prompt:
          'Яка давня столиця Шрі-Ланки виросла навколо буддійських монастирів і великих ступ?',
        fact: 'Анурадхапура понад тисячоліття залишалася важливим політичним і релігійним осередком.',
      },
      chauvetSealed: {
        prompt:
          'Яка печера з розписами залишалася закритою обвалом до повторного відкриття 1994 року?',
        fact: 'Закритий вхід допоміг уберегти понад тисячу малюнків від пізніших пошкоджень.',
      },
      carnacMenhirs: {
        prompt: 'Де можна пройти між величезними рядами бретонських менгірів?',
        fact: 'Менгір — це окремий вертикальний камінь; у Карнаку їх одне з найбільших скупчень у світі.',
      },
      banChiangBurials: {
        prompt:
          'На якій пам’ятці Південно-Східної Азії знайшли давні поховання, кераміку та сліди обробки металів?',
        fact: 'Розкопані шари Бан-Чіанга охоплюють багато століть і показують зміни ремесел.',
      },
      dilmunTrade: {
        prompt:
          'Який торговий осередок у Перській затоці поєднував Месопотамію зі світом Інду в бронзову добу?',
        fact: 'Дільмун лежав на морських шляхах купців, що возили товари між далекими землями.',
      },
      gizaWonder: {
        prompt:
          'Яке з античних чудес світу й сьогодні можна побачити майже цілим?',
        fact: 'Велика піраміда тисячоліттями залишалася найвищою спорудою, зведеною людьми.',
      },
      abuSimbelRescue: {
        prompt:
          'Який стародавній храм у 1960-х роках розрізали на блоки й перенесли вище?',
        fact: 'Міжнародна кампанія врятувала Абу-Сімбел від затоплення новим водосховищем.',
      },
      thebesNecropolis: {
        prompt: 'Яка давня столиця стояла на Нілі навпроти Долини царів?',
        fact: 'На західному березі Фів були царські гробниці, а на східному зводили храми.',
      },
      sanchiGateways: {
        prompt:
          'Яка пам’ятка має чотири оздоблені ворота навколо буддійської ступи?',
        fact: 'Різьблені ворота додали після найдавнішого етапу спорудження ступи.',
      },
      ajantaCliff: {
        prompt: 'Які буддійські монастирі висікли в скелі у формі підкови?',
        fact: 'У печерах є молитовні зали й житла ченців, а також розписи.',
      },
      pasargadaeCapital: {
        prompt: 'Яку ранню столицю Ахеменідів заснував Кір Великий?',
        fact: 'Серед збережених споруд — палаци, сади та гробниця Кіра.',
      },
      ephesusArtemis: {
        prompt:
          'Біля якого міста стояв храм Артеміди — одне з античних чудес світу?',
        fact: 'Святилище Артеміди прославило Ефес задовго до спорудження римської бібліотеки.',
      },
      pompeiiFrescoes: {
        prompt:
          'Де археологи досі вивчають розписи римських будинків, збережені після виверження вулкана?',
        fact: 'Стіни й речі Помпей дають надзвичайно докладні свідчення повсякденного життя.',
      },
      colosseumFlavian: {
        prompt: 'Яку пам’ятку спершу називали амфітеатром Флавіїв?',
        fact: 'Його почали будувати за імператора Веспасіана, а відкрили за його сина Тита.',
      },
      hadriansWallForts: {
        prompt:
          'Уздовж якої римської пам’ятки стояли малі фортеці та прикордонні форти?',
        fact: 'Солдати контролювали переходи й рух через брами, вбудовані в кордон.',
      },
      palmyraColumns: {
        prompt:
          'Яке сирійське місто-оаза славилося величною вулицею з колонадами?',
        fact: 'Пам’ятки Пальміри поєднували місцеві та греко-римські мистецькі традиції.',
      },
      hegraInscriptions: {
        prompt:
          'На якій набатейській пам’ятці написи на гробницях іноді називають похованих людей?',
        fact: 'Вирізьблені фасади Хегри видно здалеку серед пустельного краєвиду.',
      },
      leptisSeverus: {
        prompt:
          'Яке північноафриканське місто було батьківщиною римського імператора Септимія Севера?',
        fact: 'За підтримки Севера з’явилися монументальний форум та інші громадські споруди.',
      },
      delphiTreasuries: {
        prompt:
          'Де грецькі поліси ставили скарбниці вздовж дороги до оракула Аполлона?',
        fact: 'У скарбницях зберігали дари громад з різних частин грецького світу.',
      },
      mogaoMurals: {
        prompt:
          'У яких печерах Шовкового шляху збереглися багатовікові розписи буддійських сюжетів?',
        fact: 'Печери прикрашали мандрівники й меценати з різних громад протягом століть.',
      },
      anuradhapuraBodhi: {
        prompt:
          'Яке священне місто Шрі-Ланки пов’язане зі стародавнім шанованим деревом бодгі?',
        fact: 'Шрі Маха Бодгі залишається важливою святинею для паломників в Анурадхапурі.',
      },
      kyivMosaics: {
        prompt: 'Який київський собор зберігає мозаїки доби Русі?',
        fact: 'Його мозаїки поєднують візантійське мистецтво з місцевими традиціями.',
      },
      bulguksaSilla: {
        prompt: 'Який корейський храм збудували за держави Сілла?',
        fact: 'Разом із печерою Соккурам він утворює буддійський комплекс.',
      },
      himejiWhite: {
        prompt: 'Який японський замок прозвали Білою чаплею?',
        fact: 'Звивисті шляхи й численні брами посилювали його оборону.',
      },
      forbiddenPalace: {
        prompt: 'Який палац Пекіна був резиденцією імператорів Мін і Цін?',
        fact: 'Його великі зали стоять уздовж центральної осі Пекіна.',
      },
      machuRidge: {
        prompt: 'Яке поселення інків стоїть на крутому хребті Анд?',
        fact: 'Його тераси й кам’яні стіни зливаються з горою.',
      },
      marrakeshAlmoravid: {
        prompt: 'Яке марокканське місто заснували Альморавіди?',
        fact: 'Воно стало впливовою столицею Північної Африки й аль-Андалуса.',
      },
      fezMedina: {
        prompt: 'Яка марокканська медіна розквітла за Маринідів?',
        fact: 'На її історичних вулицях є медресе, ринки й фонтани.',
      },
      kairouanMosque: {
        prompt: 'У якому місті Тунісу стоїть знаменита Велика мечеть?',
        fact: 'Заснований 670 року, він став духовним осередком Магрибу.',
      },
      timbuktuScholars: {
        prompt: 'Яке місто Сахари приваблювало вчених і купців?',
        fact: 'Мечеті й рукописи зробили його осередком науки.',
      },
      askiaTomb: {
        prompt: 'Яку глинобитну споруду звели в Гао для правителя Сонгаю?',
        fact: 'Його пірамідальна вежа відбиває будівельні традиції Сахелю.',
      },
      sukhothaiWriting: {
        prompt: 'Яке раннє тайське королівство залишило написи серед храмів?',
        fact: 'Вони допомагають вивчати ранню тайську писемність і владу.',
      },
      baganTemples: {
        prompt: 'Яка рівнина М’янми вкрилася тисячами буддійських храмів?',
        fact: 'Правителі й жертводавці зводили пам’ятки Багана протягом століть.',
      },
      bamiyanBuddhas: {
        prompt:
          'У якій долині Афганістану колись стояли два велетенські Будди?',
        fact: 'Статуї знищили 2001 року; їхні ніші в скелі збереглися.',
      },
      greatWallMing: {
        prompt: 'Яку прикордонну споруду за Мін перебудували з цегли й каменю?',
        fact: 'Він охоплює стіни, проходи й вежі, зведені в різні епохи.',
      },
      montTides: {
        prompt:
          'Яке середньовічне абатство здіймається на припливному острові Нормандії?',
        fact: 'Паломники долали мінливі піски, щоб дістатися церкви.',
      },
      veniceLagoon: {
        prompt: 'Яка морська республіка виросла на островах лагуни?',
        fact: 'Канали пов’язували купців і верфі з середземноморськими шляхами.',
      },
      lubeckHansa: {
        prompt: 'Яке місто Балтики очолило Ганзейську торгову мережу?',
        fact: 'Цегляна готика нагадує про багатство від середньовічної торгівлі.',
      },
      novgorodTrade: {
        prompt:
          'Яке місто Русі пов’язувало балтійські шляхи зі східними землями?',
        fact: 'Його купці торгували, зокрема, хутром і воском.',
      },
      haeinsaBlocks: {
        prompt: 'Який корейський храм зберігає дошки Трипітаки Кореана?',
        fact: 'Дерев’яні сховища спроєктували, щоб друкарські дошки не відволожувались.',
      },
      shibamTowers: {
        prompt: 'Яке єменське місто славиться глинобитними будинками-вежами?',
        fact: 'Високі будинки ощадно використовували простір усередині міських мурів.',
      },
      kyivOrans: {
        prompt: 'У якому соборі є величезна мозаїка Богоматері Оранти?',
        fact: 'Образ майже тисячу років споглядає Київ.',
      },
      bulguksaSeokguram: {
        prompt: 'Який храм лежить на одній горі з печерним Буддою Соккурама?',
        fact: 'Обидві пам’ятки створено в добу розквіту держави Сілла.',
      },
      himejiDefences: {
        prompt:
          'У якому замку звивистий шлях веде повз брами до білого донжона?',
        fact: 'Складний маршрут мав сповільнювати нападників.',
      },
      forbiddenAxis: {
        prompt: 'Який палацовий комплекс стоїть на центральній осі Пекіна?',
        fact: 'План відділяв урочисті зовнішні двори від приватних внутрішніх.',
      },
      machuTerraces: {
        prompt: 'Де будівничі інків вписали тераси у високогірний ландшафт?',
        fact: 'Пам’ятка лежить на висоті понад 2400 метрів.',
      },
      marrakeshWalls: {
        prompt: 'Яка столиця Альморавідів дала назву Марокко?',
        fact: 'Його червоні мури й брами досі визначають вигляд старого міста.',
      },
      fezMarinids: {
        prompt: 'У якій марокканській медіні Мариніди будували медресе?',
        fact: 'Фес був столицею Марокко під час розквіту XIII–XIV століть.',
      },
      kairouanAghlabids: {
        prompt: 'Яке місто розквітло за Аглабідів у IX столітті?',
        fact: 'Мечеть Кайруана — одна з головних ранніх пам’яток ісламської Північної Африки.',
      },
      timbuktuMosques: {
        prompt:
          "Яке місто Західної Африки славиться мечетями Джінгарейбер, Санкоре й Сіді-Яг'я?",
        fact: 'Ці три мечеті нагадують про наукове минуле Тімбукту.',
      },
      askiaGao: {
        prompt:
          'Яка пам’ятка нагадує про час, коли Гао був столицею імперії Сонгай?',
        fact: 'Аскія Мухаммад звів вежу 1495 року.',
      },
      sukhothaiTemples: {
        prompt:
          'Де написи розповідають про суспільство й владу раннього тайського королівства?',
        fact: 'Історичні міста зберегли храми й пам’ятки Сукхотая.',
      },
      baganPlain: {
        prompt:
          'У якому священному ландшафті М’янми цегляні ступи вкривають рівнину?',
        fact: 'Пам’ятки дуже різняться розмірами й формами.',
      },
      bamiyanNiches: {
        prompt:
          'Де порожні ніші в скелі нагадують про статуї Будди, знищені 2001 року?',
        fact: 'У долині також збереглися печери й стародавні настінні розписи.',
      },
      greatWallWatchtowers: {
        prompt:
          'Яка китайська прикордонна мережа поєднує стіни, проходи й сторожові вежі?',
        fact: 'Різні династії будували й перебудовували ділянки протягом століть.',
      },
      montPilgrims: {
        prompt:
          'Який припливний острів приваблював паломників до абатства Святого Михаїла?',
        fact: 'Абатство довелося зводити вгору на вузькому скелястому острові.',
      },
      veniceGalleys: {
        prompt: 'З якого міста-лагуни вирушали середньовічні купецькі галери?',
        fact: 'Морська торгівля допомогла Венеції стати могутньою республікою.',
      },
      lubeckBrick: {
        prompt:
          'Яке ганзейське місто славиться цегляною готикою старого центру?',
        fact: 'Цегла була характерним будівельним матеріалом на узбережжі Балтики.',
      },
      novgorodSophia: {
        prompt:
          'У якому середньовічному місті на східних торгових шляхах стоїть Софійський собор?',
        fact: 'Церкви Новгорода зберігають століття місцевого мистецтва.',
      },
      haeinsaRepository: {
        prompt:
          'Де тисячі буддійських друкарських дощок зберігали в особливих дерев’яних залах?',
        fact: 'Дошки Трипітаки Кореана — видатний приклад різьблення й збереження.',
      },
      shibamSkyscrapers: {
        prompt: 'Яке старе місто Ємену називають містом пустельних хмарочосів?',
        fact: 'Його високі глинобитні будинки тісняться всередині оборонних мурів.',
      },
      zhengFleet: {
        prompt: 'Чиї флоти доби Мін плавали Індійським океаном?',
        fact: 'Подорожі пов’язали Китай із портами Азії та Східної Африки.',
      },
      gutenbergBible: {
        prompt:
          'Яка майнцька майстерня надрукувала знамениту ранню Біблію рухомим шрифтом?',
        fact: 'Майнцька майстерня Гутенберга змінила виробництво книжок у Європі.',
      },
      istanbulConquest: {
        prompt:
          'Яке місто стало османською столицею після захоплення 1453 року?',
        fact: 'Місто поєднувало чорноморський і середземноморський світи.',
      },
      tenochtitlanCanals: {
        prompt: 'Яка столиця мешиків виросла на островах озера Тескоко?',
        fact: 'Дамби й канали з’єднували його ринки та квартали.',
      },
      fatehpurAkbar: {
        prompt: 'Яку могольську столицю з червоного пісковику збудував Акбар?',
        fact: 'Двір користувався цим спланованим містом як столицею лише близько десятиліття.',
      },
      sistineMichelangelo: {
        prompt: 'Яку стелю Мікеланджело розписав на замовлення папи Юлія II?',
        fact: 'Високо над підлогою капели він зобразив сцени з Книги Буття.',
      },
      copernicusSun: {
        prompt:
          'Яка праця 1543 року розмістила Сонце поблизу центра планетної системи?',
        fact: 'Коперник поставив під сумнів давню картину світу із Землею в центрі.',
      },
      suleymaniyeMosque: {
        prompt:
          'Яка велика османська мечеть вінчає пагорб над Золотим Рогом Стамбула?',
        fact: 'Архітектор Сінан спроєктував її для султана Сулеймана Пишного.',
      },
      globeStage: {
        prompt:
          'У якому лондонському театрі просто неба ставили п’єси Шекспіра?',
        fact: 'Глядачі стояли у дворі або дивилися виставу з галерей.',
      },
      galileoMoon: {
        prompt: 'Телескоп якого астронома відкрив подробиці поверхні Місяця?',
        fact: 'Спостереження Галілея невдовзі відкрили гори на Місяці та супутники Юпітера.',
      },
      tajMumtaz: {
        prompt:
          'Який мармуровий мавзолей Шах Джахан збудував для Мумтаз Махал?',
        fact: 'Майстри прибували з усієї Могольської імперії, Центральної Азії та Ірану.',
      },
      isfahanSquare: {
        prompt:
          'У якому перському місті лежить величезний майдан Накш-е Джахан?',
        fact: 'Мечеті, палац і базар обрамлюють громадський простір доби Сефевідів.',
      },
      versaillesLouis: {
        prompt: 'Який палац став пишним двором Людовика XIV?',
        fact: 'Його регулярні сади вплинули на королівські резиденції всієї Європи.',
      },
      newtonPrincipia: {
        prompt: 'Яка праця виклала закони руху й всесвітнього тяжіння?',
        fact: 'Едмонд Галлей допоміг видати книжку Ньютона.',
      },
      petersburgFounding: {
        prompt: 'Яке місто Петро I розбудував у дельті Неви?',
        fact: 'Канали й кам’яні будівлі постали на болотистому ґрунті.',
      },
      declarationCongress: {
        prompt:
          'Який документ Континентальний конгрес ухвалив 4 липня 1776 року?',
        fact: 'Знаменитий пергаментний примірник переважно підписали в серпні, після ухвалення.',
      },
      montgolfierBalloon: {
        prompt: 'Який винахід започаткував епоху польотів 1783 року?',
        fact: 'Брати Монгольф’є вперше запустили теплову кулю в Анноне, Франція.',
      },
      bastille1789: {
        prompt: 'Які потрясіння почалися, зокрема, штурмом Бастилії?',
        fact: '14 липня 1789 року стало символічною датою французької історії.',
      },
      wollstonecraftRights: {
        prompt: 'Яка книжка 1792 року обстоювала освіту й рівність жінок?',
        fact: 'Мері Волстонкрафт стала визначним голосом ранньої феміністичної думки.',
      },
      jennerVaccine: {
        prompt:
          'Який медичний поступ почався з досліду Дженнера з коров’ячою віспою 1796 року?',
        fact: 'Його метод відкрив шлях до щеплень проти натуральної віспи.',
      },
      zhengPorts: {
        prompt:
          'Який адмірал на початку XV століття досягав портів Індійського океану?',
        fact: 'Його флот здійснив сім великих експедицій між 1405 і 1433 роками.',
      },
      gutenbergType: {
        prompt:
          'Яка друкарня могла повторно складати сторінки з окремих металевих літер?',
        fact: 'Багаторазовий шрифт прискорив виготовлення однакових книжок.',
      },
      istanbulBosphorus: {
        prompt:
          'Яке місто контролювало водний шлях між Чорним і Середземним морями?',
        fact: 'Босфор зробив місто стратегічним мостом між регіонами.',
      },
      tenochtitlanChinampas: {
        prompt:
          'Де землероби вирощували городину на ділянках у мілководді озера Тескоко?',
        fact: 'Чинампи допомагали годувати велику острівну столицю.',
      },
      fatehpurDecade: {
        prompt:
          'Яке сплановане місто Моголів було столицею лише близько десяти років?',
        fact: 'Акбар переніс двір у 1580-х, залишивши величні споруди.',
      },
      sistineGenesis: {
        prompt:
          'Де відвідувачі можуть побачити над собою сцени Книги Буття пензля Мікеланджело?',
        fact: 'Стелю завершили приблизно за чотири роки.',
      },
      copernicusEarth: {
        prompt:
          'Яка книжка поставила під сумнів думку про нерухому Землю в центрі Всесвіту?',
        fact: 'У її математичній моделі Земля рухається навколо Сонця разом з іншими планетами.',
      },
      suleymaniyeSinan: {
        prompt:
          'Яку стамбульську мечеть архітектор Сінан спроєктував для султана Сулеймана?',
        fact: 'Її купол і мінарети досі визначають краєвид Стамбула.',
      },
      globeAudience: {
        prompt:
          'У якому театрі лондонці стоячи дивилися виставу довкола відкритої сцени?',
        fact: 'Першу будівлю відкрили 1599 року; згодом вона згоріла.',
      },
      galileoJupiter: {
        prompt:
          'Телескоп якого астронома відкрив чотири великі супутники Юпітера?',
        fact: 'Супутники показали, що не все на небі обертається навколо Землі.',
      },
      tajYamuna: {
        prompt: 'Яка біломармурова пам’ятка стоїть над річкою Ямуна в Агрі?',
        fact: 'Сад і водні канали створюють ретельно врівноважений простір.',
      },
      isfahanPolo: {
        prompt:
          'У якому сефевідському місті площу оточили палацом, мечетями й базаром?',
        fact: 'На площі відбувалися церемонії, торгівля та навіть гра в поло.',
      },
      versaillesGardens: {
        prompt:
          'Яка королівська резиденція уславилася величезними регулярними садами?',
        fact: 'Покоління митців і садівників змінювали Версаль.',
      },
      newtonHalley: {
        prompt:
          'Яка наукова книжка 1687 року вийшла друком за допомоги Едмонда Галлея?',
        fact: 'Її три частини змінили дослідження руху й тяжіння.',
      },
      petersburgNeva: {
        prompt: 'Яка нова столиця постала з боліт довкола Неви?',
        fact: 'Петро I заснував місто 1703 року.',
      },
      declarationAugust: {
        prompt:
          'Яку декларацію 1776 року ухвалили в липні, а переважно підписали на пергаменті в серпні?',
        fact: 'Друковані копії поширили звістку ще до підписання відомого пергаменту.',
      },
      montgolfierAnnonay: {
        prompt:
          'Що піднялося над Анноне у Франції під час знаменитого показу 1783 року?',
        fact: 'Перший публічний політ був без людей; вони полетіли пізніше того ж року.',
      },
      bastilleJuly: {
        prompt: 'Для якої революції падіння Бастилії стало тривалим символом?',
        fact: 'Фортеця впала 14 липня 1789 року під час ширшої політичної кризи.',
      },
      wollstonecraftEducation: {
        prompt:
          'Яка письменниця у праці 1792 року обстоювала повноцінну освіту дівчат?',
        fact: 'Волстонкрафт доводила, що освіта визначає свободу й можливості жінок.',
      },
      jennerCowpox: {
        prompt:
          'Який медичний прорив використав коров’ячу віспу для захисту від натуральної?',
        fact: 'Слово «вакцинація» походить від латинського слова «корова».',
      },
      nobelFirst: {
        prompt:
          'Які нагороди вперше вручили 1901 року за заповітом Альфреда Нобеля?',
        fact: 'Перші п’ять премій відзначали науку, літературу, медицину й мир.',
      },
      einsteinPapers: {
        prompt:
          'Чиї статті 1905 року змінили уявлення про світло, атоми й час?',
        fact: 'Того виняткового року Ейнштейн працював у патентному бюро Берна.',
      },
      fordModelT: {
        prompt: 'Який автомобіль Форд представив 1908 року?',
        fact: 'Згодом нові методи виробництва зробили Модель Т доступною багатьом покупцям.',
      },
      amundsenPole: {
        prompt: 'Чия експедиція першою досягла Південного полюса 1911 року?',
        fact: 'Руаль Амундсен із чотирма супутниками випередив групу Роберта Скотта.',
      },
      titanicVoyage: {
        prompt:
          'Який океанський лайнер затонув під час першого атлантичного рейсу 1912 року?',
        fact: 'Катастрофа спричинила значні зміни правил безпеки на морі.',
      },
      panamaOpening: {
        prompt:
          'Який водний шлях відкрили 1914 року між Атлантичним і Тихим океанами?',
        fact: 'Пароплав «Анкон» здійснив урочистий прохід 15 серпня.',
      },
      russianRevolution: {
        prompt:
          'Які події 1917 року повалили Романових, а згодом привели до влади більшовиків?',
        fact: 'Лютнева й Жовтнева революції були різними етапами змін.',
      },
      fluPandemic: {
        prompt:
          'Яка світова криза охорони здоров’я поширилася в останній рік Першої світової?',
        fact: 'За оцінками, заразилася третина населення світу.',
      },
      suffrageAmendment: {
        prompt:
          'Яка поправка заборонила позбавляти громадян США голосу через стать?',
        fact: 'Ратифікації передували десятиліття боротьби, але дискримінаційні перепони залишилися.',
      },
      tutTomb: {
        prompt:
          'Чию царську гробницю в Єгипті Говард Картер відкрив 1922 року?',
        fact: 'Багате поховання стало одним із найвідоміших археологічних відкриттів.',
      },
      turkeyRepublic: {
        prompt: 'Яку республіку проголосили в Анкарі 29 жовтня 1923 року?',
        fact: 'Мустафа Кемаль став першим президентом нової республіки.',
      },
      lindberghAtlantic: {
        prompt:
          'Який літак самотужки доправив Чарльза Ліндберга з Нью-Йорка до Парижа?',
        fact: 'Безпосадковий політ тривав близько 33 з половиною годин.',
      },
      stockCrash: {
        prompt:
          'Яке фінансове потрясіння обвалило ціни акцій у Нью-Йорку в жовтні 1929 року?',
        fact: 'Крах поглибив проблеми, але був лише однією з причин Великої депресії.',
      },
      gandhiSalt: {
        prompt:
          'Який мирний протест вирушив до узбережжя Індії проти колоніального закону про сіль?',
        fact: 'Похід Ганді від Сабарматі до Данді тривав близько 24 днів.',
      },
      earhartSolo: {
        prompt:
          'Хто 1932 року став першою жінкою, що самостійно перелетіла Атлантику?',
        fact: 'Амелія Ергарт літаком Lockheed Vega перелетіла з Ньюфаундленду до Північної Ірландії.',
      },
      warOutbreak: {
        prompt:
          'Яка війна почалася в Європі після вторгнення Німеччини до Польщі у вересні 1939 року?',
        fact: 'Британія і Франція оголосили війну Німеччині за два дні після вторгнення.',
      },
      hubbleLaunch: {
        prompt:
          'Який орбітальний телескоп розгорнули з шатла Discovery у квітні 1990 року?',
        fact: 'Він спостерігає космос над більшістю спотворювальних шарів атмосфери Землі.',
      },
      saElection: {
        prompt:
          'Яка країна провела перші демократичні загальнонаціональні вибори у квітні 1994 року?',
        fact: 'Після голосування Нельсон Мандела став президентом, завершивши владу апартеїду.',
      },
      pathfinderMars: {
        prompt: 'Яка місія доставила маленький марсохід Sojourner на Марс?',
        fact: 'Апарат сів 4 липня 1997 року й передав знімки на Землю.',
      },
      issModules: {
        prompt:
          'Яку космічну станцію почали збирати зі стикування модулів «Заря» та Unity?',
        fact: 'Два модулі з’єднала в грудні 1998 року команда шатла Endeavour.',
      },
      monteAlbanHill: {
        prompt: 'Яке місто сапотеків стояло на вирівняній вершині над Оахакою?',
        fact: 'З його площ і храмів відкривалися краєвиди долин Оахаки.',
      },
      palenqueMaya: {
        prompt:
          'Яке місто мая славиться витонченими храмами й рельєфами серед джунглів?',
        fact: 'Мистецтво Паленке зберегло історії правителів і вірувань.',
      },
      tiwanakuGateway: {
        prompt:
          'Який центр Анд біля озера Тітікака має монументальну Браму Сонця?',
        fact: 'Його кам’яні споруди збереглися на висоті майже 3850 метрів.',
      },
      mesaCliffs: {
        prompt:
          'Яка спільнота предків пуебло зводила кам’яні оселі під скельними навісами?',
        fact: 'Деякі скельні оселі Меса-Верде мають понад сто кімнат.',
      },
      rapaMoai: {
        prompt:
          'На якому острові Тихого океану громади встановлювали велетенських кам’яних моаї?',
        fact: 'Багато статуй стояли на церемоніальних платформах аху.',
      },
      cholaTemple: {
        prompt:
          'Який високий храм Чола збудували в Тханджавурі на півдні Індії?',
        fact: 'Храми Чола демонструють видатне різьблення каменю й бронзове лиття.',
      },
      mapungubweGold: {
        prompt:
          'Яке королівство Південної Африки торгувало золотом і слоновою кісткою через шляхи Індійського океану?',
        fact: 'Його центр на пагорбі виріс біля річок Лімпопо та Шаше.',
      },
      hararWalls: {
        prompt: 'Яке історичне місто Ефіопії оточує мур Джуголь?',
        fact: 'Брами Харара вели на шляхи людей, товарів та ідей.',
      },
      ussrDissolution: {
        prompt:
          'Яка держава припинила існування в грудні 1991 року, коли її республіки стали незалежними?',
        fact: 'Його розпад змінив політичну мапу Євразії.',
      },
      beijingWomen: {
        prompt:
          'Яке зібрання ООН 1995 року ухвалило світову платформу прав жінок?',
        fact: 'Делегати зібралися в Пекіні, щоб узгодити цілі рівності й можливостей.',
      },
      dollyClone: {
        prompt:
          'Яке досягнення 1996 року показало, що дорослу клітину можна використати для клонування ссавця?',
        fact: 'Доллі народилася в шотландському Інституті Рослін у липні 1996 року.',
      },
      monteAlbanPlaza: {
        prompt:
          'Де сапотекські будівничі вирівняли вершину гори для великої церемоніальної площі?',
        fact: 'Монте-Альбан став великим центром долини Оахаки.',
      },
      palenqueReliefs: {
        prompt:
          'Яке місто мая залишило витончені кам’яні рельєфи правителів і міфів?',
        fact: 'Його мистецтво особливо розквітло між VI і VIII століттями.',
      },
      tiwanakuAltiplano: {
        prompt:
          'Яке місто доінкської доби розквітло високо на Альтіплано біля Тітікаки?',
        fact: 'Тіуанако впливав на велику частину південних Анд.',
      },
      mesaManyRooms: {
        prompt: 'На якій пам’ятці деякі скельні оселі мають понад сто кімнат?',
        fact: 'Громади предків пуебло століттями жили на плато Меса-Верде.',
      },
      rapaAhu: {
        prompt: 'Де моаї ставили на кам’яних церемоніальних платформах аху?',
        fact: 'Статуї — частина ширшого археологічного ландшафту острова.',
      },
      cholaBronzes: {
        prompt:
          'Яка династія Південної Індії зводила величні храми й майстерно відливала бронзу?',
        fact: 'Храм Брігадішвара в Тханджавурі — визначна пам’ятка архітектури Чола.',
      },
      mapungubweRivers: {
        prompt:
          'Центр якого королівства виник біля злиття річок Лімпопо й Шаше?',
        fact: 'Торгівля пов’язувала Мапунгубве з портами Східної Африки та далекими землями.',
      },
      hararGates: {
        prompt:
          'Яке обнесене муром місто Ефіопії має старовинні брами й численні мечеті?',
        fact: 'У Харарі століттями формувалася своєрідна міська й релігійна культура.',
      },
    },
  },
  ru: {
    cards: {
      sumer: { title: 'Шумерские города', dates: 'с ок. 3200 г. до н. э.' },
      egypt: {
        title: 'Древнее царство Египта',
        dates: 'ок. 2650–2150 гг. до н. э.',
      },
      shang: { title: 'Династия Шан', dates: 'ок. 1600–1046 гг. до н. э.' },
      maya: {
        title: 'Классический период майя',
        dates: 'ок. 250–900 гг. н. э.',
      },
      indus: {
        title: 'Города долины Инда',
        dates: 'ок. 2600–1900 гг. до н. э.',
      },
      persia: {
        title: 'Ахеменидская Персия',
        dates: 'ок. 550–330 гг. до н. э.',
      },
      rome: {
        title: 'Древний Рим',
        dates: 'ок. 509 г. до н. э. — 476 г. н. э. (Запад)',
      },
      mali: { title: 'Империя Мали', dates: 'XIII–XV вв. н. э.' },
      song: { title: 'Династия Сун', dates: '960–1279 гг. н. э.' },
      inca: { title: 'Империя инков', dates: 'ок. 1400–1532 гг. н. э.' },
      abbasid: { title: 'Багдад Аббасидов', dates: '762–1258 гг. н. э.' },
      viking: {
        title: 'Скандинавия эпохи викингов',
        dates: 'ок. 800–1050 гг. н. э.',
      },
      greece: { title: 'Древняя Греция', dates: 'ок. 800–146 гг. до н. э.' },
      phoenicia: {
        title: 'Финикийские города',
        dates: 'ок. 1500–300 гг. до н. э.',
      },
      aksum: { title: 'Аксумское царство', dates: 'I–VIII вв. н. э.' },
      khmer: { title: 'Кхмерская империя', dates: 'IX–XV вв. н. э.' },
      zimbabwe: { title: 'Великое Зимбабве', dates: 'XI–XV вв. н. э.' },
      mexica: { title: 'Империя мешиков', dates: '1428–1521 гг. н. э.' },
      benin: { title: 'Бенинское царство', dates: 'ок. XI–XIX вв. н. э.' },
      mughal: {
        title: 'Империя Великих Моголов',
        dates: '1526–1857 гг. н. э.',
      },
      un1945: {
        title: 'ООН',
        dates: '1945 г.',
      },
      sputnik1957: { title: 'Спутник-1', dates: '1957 г.' },
      shinkansen1964: { title: 'Токайдо-синкансэн', dates: 'открыт в 1964 г.' },
      apollo1969: { title: 'Аполлон-11', dates: '1969 г.' },
      earthDay1970: { title: 'Первый День Земли', dates: '1970 г.' },
      voyager1977: { title: 'Зонды «Вояджер»', dates: 'запущены в 1977 г.' },
      ibmPc1981: {
        title: 'Компьютер IBM PC',
        dates: '1981 г.',
      },
      berlinWall1989: { title: 'Открытие Берлинской стены', dates: '1989 г.' },
      babylon: { title: 'Вавилон Хаммурапи', dates: 'ок. 1750 г. до н. э.' },
      olmec: { title: 'Культура ольмеков', dates: 'ок. 1200–400 гг. до н. э.' },
      tang: { title: 'Династия Тан', dates: '618–907 гг. н. э.' },
      florence: { title: 'Флоренция Возрождения', dates: 'XV век' },
      edo: { title: 'Япония эпохи Эдо', dates: '1603–1868 гг.' },
      stockton1825: {
        title: 'Стоктон — Дарлингтон',
        dates: '1825 г.',
      },
      wright1903: { title: 'Самолёт братьев Райт', dates: '1903 г.' },
      penicillin1928: { title: 'Открытие пенициллина', dates: '1928 г.' },
      gobekli: { title: 'Гёбекли-Тепе', dates: 'ок. 9600–8200 гг. до н. э.' },
      catalhoyuk: { title: 'Чатал-Хююк', dates: 'ок. 7400–6200 гг. до н. э.' },
      stonehenge: { title: 'Стоунхендж', dates: 'ок. 3000–1600 гг. до н. э.' },
      urZiggurat: { title: 'Зиккурат Ура', dates: 'ок. 2100 г. до н. э.' },
      knossos: { title: 'Кносс', dates: 'ок. 2000–1450 гг. до н. э.' },
      hattusa: { title: 'Хаттуса', dates: 'ок. 1650–1200 гг. до н. э.' },
      mycenae: { title: 'Микены', dates: 'ок. 1600–1100 гг. до н. э.' },
      meroe: { title: 'Мероэ', dates: 'ок. 300 г. до н. э. — 350 г. н. э.' },
      carthage: { title: 'Карфаген', dates: 'ок. 814–146 гг. до н. э.' },
      cerveteri: {
        title: 'Этрусский Черветери',
        dates: 'ок. IX–I вв. до н. э.',
      },
      qinWarriors: {
        title: 'Терракотовое войско Цинь',
        dates: 'III век до н. э.',
      },
      chavin: { title: 'Чавин-де-Уантар', dates: 'ок. 1200–500 гг. до н. э.' },
      nazcaLines: {
        title: 'Линии Наска',
        dates: 'ок. 500 г. до н. э. — 500 г. н. э.',
      },
      jericho: {
        title: 'Неолитический Иерихон',
        dates: 'IX–VIII тыс. до н. э.',
      },
      lascaux: { title: 'Пещера Ласко', dates: 'ок. 17 000 г. до н. э.' },
      skaraBrae: { title: 'Скара-Брей', dates: 'ок. 3100–2500 гг. до н. э.' },
      caral: { title: 'Караль-Супе', dates: 'ок. 3000–1800 гг. до н. э.' },
      ugarit: { title: 'Угарит', dates: 'ок. 1450–1185 гг. до н. э.' },
      nineveh: {
        title: 'Ассирийская Ниневия',
        dates: 'ок. 700–612 гг. до н. э.',
      },
      petra: {
        title: 'Набатейская Петра',
        dates: 'IV в. до н. э. — 106 г. н. э.',
      },
      teotihuacan: { title: 'Теотиуакан', dates: 'I–VII вв. н. э.' },
      hagiaSophia: { title: 'Собор Святой Софии', dates: 'завершён в 537 г.' },
      aachen: { title: 'Дворцовая капелла в Ахене', dates: 'ок. 790–800 гг.' },
      cordoba: { title: 'Большая мечеть Кордовы', dates: 'заложена в 786 г.' },
      borobudur: { title: 'Боробудур', dates: 'VIII–IX вв.' },
      lalibela: { title: 'Церкви Лалибэлы', dates: 'XII–XIII вв.' },
      kilwa: { title: 'Килва-Кисивани', dates: 'ок. XIII–XV вв.' },
      bukhara: { title: 'Средневековая Бухара', dates: 'X–XII вв.' },
      samarkand: { title: 'Самарканд', dates: 'XV–XVII вв.' },
      djenne: { title: 'Исторический Дженне', dates: 'XV–XVI вв.' },
      cahokia: { title: 'Кахокия', dates: 'ок. 1050–1150 гг.' },
      chichenItza: { title: 'Чичен-Ица', dates: 'ок. 800–1200 гг.' },
      alhambra: { title: 'Альгамбра Насридов', dates: 'XIII–XV вв.' },
      haiti1804: { title: 'Независимость Гаити', dates: '1804 г.' },
      rocket1829: { title: 'Паровоз «Ракета»', dates: '1829 г.' },
      faraday1831: { title: 'Индукция Фарадея', dates: '1831 г.' },
      morse1844: { title: 'Телеграф Морзе', dates: '1844 г.' },
      senecaFalls1848: { title: 'Съезд в Сенека-Фоллс', dates: '1848 г.' },
      greatExhibition1851: { title: 'Великая выставка', dates: '1851 г.' },
      nightingale1854: {
        title: 'Найтингейл в Скутари',
        dates: '1854–1856 гг.',
      },
      darwin1859: { title: '«Происхождение видов» Дарвина', dates: '1859 г.' },
      emancipation1863: {
        title: 'Прокламация об освобождении',
        dates: '1863 г.',
      },
      meiji1868: { title: 'Реставрация Мэйдзи', dates: 'с 1868 г.' },
      suez1869: { title: 'Открытие Суэцкого канала', dates: '1869 г.' },
      bell1876: { title: 'Телефон Белла', dates: '1876 г.' },
      lightbulb1879: {
        title: 'Электрический свет Менло-Парка',
        dates: '1879 г.',
      },
      liberty1886: { title: 'Статуя Свободы', dates: 'открыта в 1886 г.' },
      eiffel1889: { title: 'Эйфелева башня', dates: '1889 г.' },
      xray1895: { title: 'Рентгеновские лучи', dates: '1895 г.' },
      olympics1896: { title: 'Олимпийские игры в Афинах', dates: '1896 г.' },
      adwa1896: { title: 'Битва при Адуа', dates: '1896 г.' },
      philippines1896: {
        title: 'Филиппинская революция',
        dates: 'началась в 1896 г.',
      },
      marconi1897: { title: 'Беспроводные сигналы Маркони', dates: '1897 г.' },
      blitz1940: { title: 'Укрытия во время Блица', dates: '1940–1941 гг.' },
      normandy1944: { title: 'Высадка в Нормандии', dates: '6 июня 1944 г.' },
      partition1947: { title: 'Раздел Британской Индии', dates: '1947 г.' },
      udhr1948: { title: 'Декларация прав человека', dates: '1948 г.' },
      dna1953: { title: 'Двойная спираль ДНК', dates: '1953 г.' },
      brown1954: {
        title: '«Браун против Совета по образованию»',
        dates: '1954 г.',
      },
      bandung1955: { title: 'Бандунгская конференция', dates: '1955 г.' },
      nasa1958: { title: 'Основание NASA', dates: '1958 г.' },
      gagarin1961: { title: '«Восток-1» Гагарина', dates: '1961 г.' },
      march1963: { title: 'Марш на Вашингтон', dates: '1963 г.' },
      mexico1968: { title: 'Олимпиада в Мехико', dates: '1968 г.' },
      microprocessor1971: {
        title: 'Микропроцессор Intel 4004',
        dates: '1971 г.',
      },
      mobile1973: { title: 'Ручной мобильный телефон', dates: '1973 г.' },
      apolloSoyuz1975: { title: 'Стыковка «Аполлон — Союз»', dates: '1975 г.' },
      smallpox1980: {
        title: 'Искоренение натуральной оспы',
        dates: 'объявлено в 1980 г.',
      },
      internet1983: { title: 'Переход ARPANET на TCP/IP', dates: '1983 г.' },
      liveAid1985: { title: 'Концерты Live Aid', dates: '1985 г.' },
      chornobyl1986: { title: 'Авария на Чернобыльской АЭС', dates: '1986 г.' },
      montreal1987: { title: 'Монреальский протокол', dates: '1987 г.' },
      web1989: { title: 'Предложение Всемирной паутины', dates: '1989 г.' },
      chauvet: { title: 'Пещера Шове', dates: 'ок. 32 000–30 000 лет назад' },
      carnac: { title: 'Мегалиты Карнака', dates: 'V–III тыс. до н. э.' },
      banChiang: { title: 'Бан-Чианг', dates: 'II–I тыс. до н. э.' },
      dilmun: {
        title: 'Курганы Дильмуна',
        dates: 'ок. 2050–1750 гг. до н. э.',
      },
      giza: { title: 'Великая пирамида Гизы', dates: 'ок. 2600 г. до н. э.' },
      abuSimbel: { title: 'Абу-Симбел', dates: 'XIII в. до н. э.' },
      thebes: { title: 'Древние Фивы', dates: 'II–I тыс. до н. э.' },
      sanchi: { title: 'Ступы Санчи', dates: 'с III в. до н. э.' },
      ajanta: {
        title: 'Пещеры Аджанты',
        dates: 'II в. до н. э. — VI в. н. э.',
      },
      pasargadae: { title: 'Пасаргады', dates: 'VI в. до н. э.' },
      ephesus: { title: 'Римский Эфес', dates: 'I–II вв. н. э.' },
      pompeii: { title: 'Помпеи', dates: 'погребена в 79 г. н. э.' },
      colosseum: { title: 'Римский Колизей', dates: 'открыт в 80 г. н. э.' },
      hadriansWall: { title: 'Вал Адриана', dates: 'с 122 г. н. э.' },
      palmyra: { title: 'Пальмира', dates: 'I–III вв. н. э.' },
      hegra: {
        title: 'Набатейская Хегра',
        dates: 'I в. до н. э. — I в. н. э.',
      },
      leptisMagna: { title: 'Лептис-Магна', dates: 'II–III вв. н. э.' },
      delphi: { title: 'Святилище Дельф', dates: 'VI–IV вв. до н. э.' },
      mogao: { title: 'Пещеры Могао', dates: 'с IV в. н. э.' },
      anuradhapura: { title: 'Анурадхапура', dates: 'с IV в. до н. э.' },
      kyivSophia: { title: 'София Киевская', dates: 'XI в.' },
      bulguksa: { title: 'Храм Пульгукса', dates: 'VIII в.' },
      himeji: { title: 'Замок Химэдзи', dates: 'начало XVII в.' },
      forbiddenCity: { title: 'Запретный город', dates: 'завершён в 1420 г.' },
      machuPicchu: { title: 'Мачу-Пикчу', dates: 'XV в.' },
      marrakesh: { title: 'Средневековый Марракеш', dates: 'с 1070 г.' },
      fez: { title: 'Медина Феса', dates: 'IX–XIV вв.' },
      kairouan: { title: 'Кайруан', dates: 'основан в 670 г.' },
      timbuktu: { title: 'Тимбукту', dates: 'XV–XVI вв.' },
      askia: { title: 'Гробница Аскии', dates: '1495 г.' },
      sukhothai: { title: 'Королевство Сукхотай', dates: 'XIII–XIV вв.' },
      bagan: { title: 'Баган', dates: 'XI–XIII вв.' },
      bamiyan: { title: 'Долина Бамиан', dates: 'VI–VII вв.' },
      greatWall: { title: 'Великая стена эпохи Мин', dates: 'XIV–XVII вв.' },
      montSaintMichel: { title: 'Мон-Сен-Мишель', dates: 'XI–XVI вв.' },
      venice: { title: 'Средневековая Венеция', dates: 'XIII–XV вв.' },
      lubeck: { title: 'Ганзейский Любек', dates: 'XIII–XV вв.' },
      novgorod: { title: 'Средневековый Новгород', dates: 'XI–XV вв.' },
      haeinsa: { title: 'Доски храма Хэинса', dates: 'XIII в.' },
      shibam: { title: 'Старый город Шибам', dates: 'XVI в.' },
      zhengHe: { title: 'Плавания Чжэн Хэ', dates: '1405–1433 гг.' },
      gutenberg: { title: 'Печатня Гутенберга', dates: 'ок. 1455 г.' },
      istanbul1453: { title: 'Османский Константинополь', dates: '1453 г.' },
      tenochtitlan: { title: 'Теночтитлан', dates: 'XIV–XVI вв.' },
      fatehpurSikri: { title: 'Фатехпур-Сикри', dates: '1570–1580-е гг.' },
      sistineCeiling: {
        title: 'Потолок Сикстинской капеллы',
        dates: '1508–1512 гг.',
      },
      copernicus1543: { title: 'Книга Коперника', dates: '1543 г.' },
      suleymaniye: { title: 'Мечеть Сулеймание', dates: '1550–1557 гг.' },
      globe1599: { title: 'Театр «Глобус»', dates: 'открыт в 1599 г.' },
      galileo1609: { title: 'Телескоп Галилея', dates: 'с 1609 г.' },
      tajMahal: { title: 'Тадж-Махал', dates: '1632–1648 гг.' },
      isfahan: { title: 'Сефевидский Исфахан', dates: 'XVII в.' },
      versailles: { title: 'Версальский дворец', dates: 'XVII–XVIII вв.' },
      newton1687: { title: '«Начала» Ньютона', dates: '1687 г.' },
      petersburg1703: {
        title: 'Основание Санкт-Петербурга',
        dates: 'с 1703 г.',
      },
      declaration1776: {
        title: 'Декларация независимости США',
        dates: '1776 г.',
      },
      montgolfier1783: { title: 'Шар Монгольфье', dates: '1783 г.' },
      french1789: { title: 'Французская революция', dates: 'с 1789 г.' },
      wollstonecraft1792: { title: '«В защиту прав женщин»', dates: '1792 г.' },
      jenner1796: { title: 'Прививка Дженнера', dates: '1796 г.' },
      nobel1901: { title: 'Первые Нобелевские премии', dates: '1901 г.' },
      einstein1905: { title: 'Год открытий Эйнштейна', dates: '1905 г.' },
      modelT1908: { title: 'Форд Модель Т', dates: '1908 г.' },
      southPole1911: {
        title: 'Амундсен на Южном полюсе',
        dates: '14 декабря 1911 г.',
      },
      titanic1912: { title: 'Рейс «Титаника»', dates: '1912 г.' },
      panama1914: { title: 'Открытие Панамского канала', dates: '1914 г.' },
      russian1917: { title: 'Русская революция', dates: '1917 г.' },
      flu1918: { title: 'Пандемия гриппа 1918 года', dates: '1918–1919 гг.' },
      suffrage1920: {
        title: '19-я поправка к Конституции США',
        dates: '1920 г.',
      },
      tutankhamun1922: {
        title: 'Гробница Тутанхамона',
        dates: 'открыта в 1922 г.',
      },
      turkey1923: { title: 'Турецкая Республика', dates: '1923 г.' },
      lindbergh1927: { title: '«Дух Сент-Луиса»', dates: '1927 г.' },
      crash1929: { title: 'Крах на Уолл-стрит', dates: '1929 г.' },
      saltMarch1930: { title: 'Соляной поход', dates: '1930 г.' },
      earhart1932: { title: 'Полёт Эрхарт через Атлантику', dates: '1932 г.' },
      war1939: { title: 'Начало войны в Европе', dates: '1939 г.' },
      hubble1990: { title: 'Телескоп «Хаббл»', dates: '1990 г.' },
      mandela1994: { title: 'Выборы в Южной Африке', dates: '1994 г.' },
      pathfinder1997: { title: '«Марс Патфайндер»', dates: '1997 г.' },
      iss1998: { title: 'Начало сборки МКС', dates: '1998 г.' },
      monteAlban: {
        title: 'Монте-Альбан',
        dates: 'ок. 500 г. до н. э. — 900 г. н. э.',
      },
      palenque: { title: 'Майяский Паленке', dates: 'ок. 500–700 гг.' },
      tiwanaku: { title: 'Тиуанако', dates: 'ок. 500–900 гг.' },
      mesaVerde: { title: 'Жилища Меса-Верде', dates: 'XII–XIII вв.' },
      rapaNui: { title: 'Моаи Рапа-Нуи', dates: 'ок. XIII–XVI вв.' },
      brihadeeswara: { title: 'Храм Брихадишвара', dates: 'ок. 1010 г.' },
      mapungubwe: {
        title: 'Королевство Мапунгубве',
        dates: 'ок. 1200–1300 гг.',
      },
      harar: { title: 'Город-крепость Харар', dates: 'с XVI в.' },
      ussr1991: { title: 'Конец Советского Союза', dates: '1991 г.' },
      beijing1995: { title: 'Пекинская конференция женщин', dates: '1995 г.' },
      dolly1996: { title: 'Овца Долли', dates: 'родилась в 1996 г.' },
      liverpool1830: {
        title: 'Железная дорога Ливерпуль — Манчестер',
        dates: 'открыта в 1830 г.',
      },
      tokyo1964: { title: 'Олимпийские игры в Токио', dates: '1964 г.' },
      transcontinental1915: {
        title: 'Трансконтинентальный телефонный звонок',
        dates: '1915 г.',
      },
      transatlantic1927: {
        title: 'Трансатлантический телефонный звонок',
        dates: '1927 г.',
      },
      segoviaAqueduct: { title: 'Акведук Сеговии', dates: 'римская эпоха' },
      tarragonaAqueduct: {
        title: 'Акведук Лес-Ферререс',
        dates: 'римская эпоха',
      },
      elvasAqueduct: {
        title: 'Акведук Аморейра',
        dates: 'конец XVI — начало XVII в.',
      },
      epidaurusTheatre: { title: 'Театр Эпидавра', dates: 'IV в. до н. э.' },
      benz1886: { title: 'Автомобиль Бенца', dates: '1886 г.' },
      beetle1945: {
        title: 'Volkswagen Beetle',
        dates: 'серийное производство с 1945 г.',
      },
      mini1959: { title: 'Классический Mini', dates: 'представлен в 1959 г.' },
      scott1912: {
        title: 'Экспедиция Скотта к Южному полюсу',
        dates: 'достигла полюса в 1912 г.',
      },
      mawson1911: {
        title: 'Антарктическая экспедиция Моусона',
        dates: '1911–1914 гг.',
      },
      shackleton1914: {
        title: 'Экспедиция Шеклтона на «Эндьюранс»',
        dates: '1914–1917 гг.',
      },
      charlesBalloon1783: { title: 'Водородный шар Шарля', dates: '1783 г.' },
      blanchardBalloon1785: {
        title: 'Перелёт Ла-Манша на воздушном шаре',
        dates: '1785 г.',
      },
      zeppelin1900: { title: 'Первый полёт цеппелина', dates: '1900 г.' },
      oscars1929: { title: 'Первая церемония «Оскара»', dates: '1929 г.' },
      pulitzer1917: { title: 'Первые Пулитцеровские премии', dates: '1917 г.' },
      fields1936: { title: 'Первые медали Филдса', dates: '1936 г.' },
      panic1907: { title: 'Финансовая паника 1907 года', dates: '1907 г.' },
      blackMonday1987: { title: '«Чёрный понедельник»', dates: '1987 г.' },
      crisis2008: {
        title: 'Мировой финансовый кризис',
        dates: '2007–2009 гг.',
      },
      kamakuraSamurai: {
        title: 'Самураи периода Камакура',
        dates: '1185–1333 гг.',
      },
      sengokuSamurai: { title: 'Самураи периода Сэнгоку', dates: 'XV–XVI вв.' },
      edoSamurai: { title: 'Самураи периода Эдо', dates: '1603–1868 гг.' },
      merian1705: {
        title: 'Исследования насекомых Мериан',
        dates: 'опубликованы в 1705 г.',
      },
      wallace1854: {
        title: 'Малайская экспедиция Уоллеса',
        dates: '1854–1862 гг.',
      },
      mendel1865: {
        title: 'Опыты Менделя с горохом',
        dates: 'представлены в 1865 г.',
      },
      tgv1981: { title: 'Французский TGV', dates: 'начало движения в 1981 г.' },
      ice1991: { title: 'Немецкий ICE', dates: 'начало движения в 1991 г.' },
      eurostar1994: { title: 'Eurostar', dates: 'начало движения в 1994 г.' },
      dynatac1984: {
        title: 'Мобильный телефон DynaTAC',
        dates: 'в продаже с 1984 г.',
      },
      vodafone1985: {
        title: 'Первый мобильный звонок Vodafone',
        dates: '1985 г.',
      },
      sms1992: { title: 'Первое SMS-сообщение', dates: '1992 г.' },
    },
    questions: {
      clay: {
        prompt:
          'Писец оставляет клиновидные знаки на глиняной табличке. Какая цивилизация положила начало этой письменной традиции?',
        fact: 'Древнейшая письменность в шумерских городах помогала учитывать и распределять запасы пищи.',
      },
      papyrus: {
        prompt: 'В какой из этих периодов построили великие пирамиды Гизы?',
        fact: 'Три знаменитые пирамиды Гизы принадлежали фараонам Хуфу, Хафре и Менкауре.',
      },
      bronze: {
        prompt:
          'Какая династия отливала украшенные бронзовые сосуды для ритуалов в честь предков?',
        fact: 'В бронзовых сосудах Шан подносили пищу и напитки. Их сложные узоры часто изображали животных.',
      },
      cacao: {
        prompt:
          'При чьём древнем дворе знатный человек мог пить пенистое какао из расписной чаши?',
        fact: 'Мастера классического периода майя расписывали чаши для какао. Напиток переливали между сосудами, чтобы получилась пена.',
      },
      indusDrain: {
        prompt:
          'Какая цивилизация построила в Мохенджо-Даро кирпичные улицы со стоками и общественные купальни?',
        fact: 'В городе были колодцы, купальни и развитая система водоотведения под спланированными улицами.',
      },
      indusSeals: {
        prompt:
          'Какая цивилизация оставила каменные печати с изображениями животных и до сих пор не расшифрованными знаками?',
        fact: 'На многих печатях долины Инда над короткой строкой знаков изображено животное. Эти знаки пока не удалось надёжно прочитать.',
      },
      persiaPersepolis: {
        prompt:
          'В церемониальном центре какой империи каменные лестницы украшали процессии людей с дарами?',
        fact: 'Рельефы Персеполя изображали людей из разных частей Ахеменидской империи у царского двора.',
      },
      persiaRoad: {
        prompt:
          'Какая империя соединила Сарды и Сузы Царской дорогой для путешествий и передачи вестей?',
        fact: 'Персидская Царская дорога облегчала связь, торговлю и сбор налогов в огромной империи.',
      },
      romeAqueduct: {
        prompt:
          'Какая цивилизация построила акведук Пон-дю-Гар для подачи воды в Ним?',
        fact: 'Пон-дю-Гар проводил воду через реку на пути длиной около 50 километров к древнему Ниму.',
      },
      romeAppia: {
        prompt:
          'Аппиева дорога соединила Рим и Капую в 312 году до н. э. Кто её построил?',
        fact: 'Позже Аппиева дорога стала важным путём для путешествий, торговли и расширения Рима.',
      },
      maliMusa: {
        prompt:
          'Знаменитое паломничество Мансы Мусы в Мекку привлекло внимание к богатству какой империи?',
        fact: 'После его путешествия через Каир в 1324–1325 годах о золоте Мали узнали далеко за пределами Западной Африки.',
      },
      maliTimbuktu: {
        prompt:
          'Какая империя помогла Тимбукту стать перекрёстком торговли солью, золотом и книгами?',
        fact: 'Купцы Тимбукту торговали солью и золотом, а учёные собирали рукописи и обменивались ими.',
      },
      songType: {
        prompt:
          'При какой династии Би Шэн составлял страницы из многоразовых глиняных литер?',
        fact: 'Би Шэн создал подвижный глиняный шрифт около 1041–1048 годов, хотя печать с деревянных досок оставалась распространённой.',
      },
      songMoney: {
        prompt:
          'Какая династия выпустила государственные бумажные деньги в 1120-х годах?',
        fact: 'Рост торговли в Китае эпохи Сун сделал бумажные деньги удобными для расчётов.',
      },
      incaQuipu: {
        prompt:
          'Чиновники какой империи учитывали людей и товары с помощью узелковых шнуров кипу?',
        fact: 'Шнуры, цвета и узелки кипу помогали записывать количество и другие сведения.',
      },
      incaRoad: {
        prompt:
          'Чья сеть дорог пересекала Анды каменными путями, лестницами и мостами?',
        fact: 'Сеть Капак-Ньян простиралась более чем на 30 000 километров и достигла наибольшего размаха в XV веке.',
      },
      abbasidWisdom: {
        prompt:
          'При какой династии багдадский Дом мудрости собирал и изучал научные тексты?',
        fact: 'Учёные в Багдаде Аббасидов переводили, исследовали и сохраняли знания разных традиций.',
      },
      abbasidTranslations: {
        prompt:
          'При какой династии в Багдаде переводили на арабский труды с греческого, санскрита и персидского?',
        fact: 'Между VIII и X веками Багдад стал важным центром научных исследований.',
      },
      vikingShips: {
        prompt:
          'Какие мореплаватели пересекали Северную Атлантику, чтобы поселиться в Исландии и Гренландии?',
        fact: 'Скандинавские мореплаватели добрались до Британии, Исландии, Гренландии и даже Северной Америки.',
      },
      vikingGreenland: {
        prompt:
          'Кто доплыл из Скандинавии до Гренландии за много веков до путешествия Колумба через Атлантику?',
        fact: 'Мореплаватели эпохи викингов добрались до Гренландии через острова Северной Атлантики.',
      },
      greeceOlympia: {
        prompt:
          'Где с 776 года до н. э. каждые четыре года проводили Олимпийские игры?',
        fact: 'Атлеты из греческих городов собирались в Олимпии, а победителей награждали оливковыми венками.',
      },
      greeceParthenon: {
        prompt: 'Какая цивилизация построила Парфенон на афинском Акрополе?',
        fact: 'Парфенон возвели в V веке до н. э. во время большой строительной программы Афин.',
      },
      phoeniciaPurple: {
        prompt:
          'Города каких мореплавателей делали ценный пурпурный краситель из моллюсков мурексов?',
        fact: 'Финикийские Тир и Сидон торговали пурпурными тканями по всему Средиземноморью.',
      },
      phoeniciaAlphabet: {
        prompt:
          'Чей алфавит древние греки переняли и приспособили к своему языку?',
        fact: 'Финикийские купцы распространяли свой алфавит по Средиземноморью; от него произошли греческие буквы.',
      },
      aksumStelae: {
        prompt:
          'Какое царство возвело огромные резные каменные стелы в Эфиопском нагорье?',
        fact: 'Некоторые аксумские стелы вырезаны так, будто это многоэтажные здания.',
      },
      aksumTrade: {
        prompt:
          'Какое африканское царство контролировало торговлю на Красном море через порт Адулис?',
        fact: 'Аксум связывал торговые пути внутренней Африки с Аравией и Красным морем.',
      },
      khmerWat: {
        prompt:
          'Какая империя построила огромный храмовый комплекс Ангкор-Ват?',
        fact: 'Ангкор-Ват — один из множества монументальных храмов обширного Ангкора.',
      },
      khmerWater: {
        prompt:
          'Чья столица Ангкор включала большие водохранилища, каналы и дамбы?',
        fact: 'В кхмерском Ангкоре храмы сочетались с разветвлённой системой водных сооружений.',
      },
      zimbabweWalls: {
        prompt:
          'Какой африканский город возвёл огромную гранитную ограду без раствора?',
        fact: 'Строители народа шона в Великом Зимбабве складывали тщательно обработанные гранитные блоки в длинные стены.',
      },
      zimbabweTrade: {
        prompt:
          'Где среди каменных руин археологи нашли китайский фарфор и монеты из Килвы?',
        fact: 'Находки в Великом Зимбабве говорят о торговых связях с миром Индийского океана.',
      },
      mexicaLake: {
        prompt:
          'Чья столица Теночтитлан стояла на озере Тескоко и соединялась с берегом дамбами?',
        fact: 'По каналам Теночтитлана ходили лодки, а через озеро вели три приподнятые дороги-дамбы.',
      },
      mexicaPrecinct: {
        prompt:
          'В столице какой империи на озере находился большой священный центр?',
        fact: 'В священном центре Теночтитлана были храмы, площадка для игры в мяч и школы для знатных юношей.',
      },
      beninPlaques: {
        prompt:
          'Какое царство украшало колонны своего дворца рельефными латунными плитами?',
        fact: 'Плиты Бенина изображали придворную жизнь, правителей, обряды и исторические события.',
      },
      beninCasting: {
        prompt:
          'Придворные мастера какого царства отливали латунные плиты методом утраченного воска?',
        fact: 'Многие знаменитые «бенинские бронзы» на самом деле сделаны из латуни.',
      },
      mughalTaj: {
        prompt: 'Какая империя построила Тадж-Махал в память о Мумтаз-Махал?',
        fact: 'Шах Джахан заказал беломраморный мавзолей в Агре в XVII веке.',
      },
      mughalFatehpur: {
        prompt:
          'При какой империи Акбар построил спланированную столицу Фатехпур-Сикри?',
        fact: 'Фатехпур-Сикри был столицей империи Великих Моголов лишь около десяти лет.',
      },
      unCharter: {
        prompt:
          'После Второй мировой войны делегаты 50 стран подписали Устав в Сан-Франциско. Что они создали?',
        fact: 'Устав ООН подписали в июне 1945 года, а в силу он вступил в октябре.',
      },
      unAssembly: {
        prompt:
          'Делегаты 51 страны впервые собрались на Генеральную Ассамблею в Лондоне в 1946 году. Что это была за организация?',
        fact: 'Первая Генеральная Ассамблея ООН открылась 10 января 1946 года в лондонском Сентрал-холле.',
      },
      sputnikFirst: {
        prompt:
          'Какой небольшой металлический шар с четырьмя антеннами стал первым искусственным спутником Земли?',
        fact: 'СССР запустил «Спутник-1» 4 октября 1957 года — так началась космическая эра.',
      },
      sputnikSignals: {
        prompt:
          'Сигналы какого объекта, вращавшегося вокруг Земли в 1957 году, слышали радиолюбители?',
        fact: '«Спутник-1» облетал Землю примерно за 96 минут и передавал радиосигнал.',
      },
      shinkansenRoute: {
        prompt:
          'Какая новая железная дорога соединила Токио и Осаку после открытия в 1964 году?',
        fact: 'Токайдо-синкансэн начал работать в 1964 году и связал крупнейшие городские районы Японии.',
      },
      shinkansenTime: {
        prompt:
          'Какой поезд после открытия сократил путь между Токио и Осакой с 6,5 до четырёх часов?',
        fact: 'Поначалу Токайдо-синкансэн сократил поездку между Токио и Осакой с 6,5 до четырёх часов.',
      },
      apolloLanding: {
        prompt: 'Какая миссия впервые высадила людей на Луну в июле 1969 года?',
        fact: 'Лунный модуль «Орёл» миссии «Аполлон-11» сел в Море Спокойствия.',
      },
      apolloCollins: {
        prompt:
          'Армстронг и Олдрин ходили по Луне, а Майкл Коллинз ждал на орбите. Какая это была миссия?',
        fact: 'Коллинз пилотировал командный модуль «Колумбия», пока остальные исследовали поверхность.',
      },
      earthDayCrowds: {
        prompt:
          'Какое событие 1970 года собрало около 20 миллионов американцев на природоохранные демонстрации?',
        fact: 'Первый День Земли прошёл 22 апреля 1970 года в разных городах США.',
      },
      earthDayAgency: {
        prompt:
          'Какое общественное событие 1970 года помогло сделать защиту окружающей среды важной темой в США?',
        fact: 'Первый День Земли прошёл за несколько месяцев до создания Агентства по охране окружающей среды США.',
      },
      voyagerRecord: {
        prompt:
          'Какие два космических аппарата несли позолоченные пластинки с изображениями и звуками Земли?',
        fact: 'Оба «Вояджера» взяли с собой Золотые пластинки с приветствиями, музыкой, звуками природы и изображениями.',
      },
      voyagerOrder: {
        prompt:
          'В какой космической программе 1977 года аппарат с номером «2» стартовал раньше «1»?',
        fact: '«Вояджер-2» стартовал 20 августа 1977 года, а «Вояджер-1» — 5 сентября.',
      },
      ibmPcLaunch: {
        prompt:
          'Какой компьютер 1981 года помог сделать открытую архитектуру отраслевым стандартом?',
        fact: 'Модель IBM 5150 стала настолько влиятельной, что «ПК» превратилось в общее название.',
      },
      ibmPcSoftware: {
        prompt:
          'Какой настольный компьютер 1981 года продавался с программами VisiCalc и EasyWriter?',
        fact: 'Первый IBM PC позволял работать с текстами и таблицами, а также играть.',
      },
      berlinWallOpening: {
        prompt:
          'Какую стену открыли на берлинских пограничных переходах 9 ноября 1989 года?',
        fact: 'После объявления новых правил выезда люди массово направились через переходы Берлинской стены.',
      },
      berlinWallBorder: {
        prompt:
          'На каком бывшем барьере у Бранденбургских ворот люди праздновали Новый год 1989-го?',
        fact: 'Берлинскую стену открыли в ноябре, а в конце декабря люди праздновали прямо на ней.',
      },
      babylonStele: {
        prompt:
          'Правитель какого царства велел высечь сотни судебных решений на чёрной каменной стеле?',
        fact: 'На стеле Хаммурапи записаны 282 решения о семье, торговле, труде и других делах.',
      },
      babylonShamash: {
        prompt:
          'Стела какого царства изображает царя Хаммурапи перед богом солнца Шамашем?',
        fact: 'Рельеф наверху вавилонской стелы показывает, как Шамаш передаёт царю символы власти.',
      },
      olmecHeads: {
        prompt:
          'Какая культура высекала огромные каменные головы в необычных головных уборах?',
        fact: 'Ольмекские скульпторы придавали базальтовым головам разные черты; возможно, это портреты правителей.',
      },
      olmecBasalt: {
        prompt:
          'Кто перевозил по рекам громадные базальтовые глыбы, а затем высекал из них головы?',
        fact: 'Ольмеки доставляли тяжёлый камень из гор Тустла в церемониальные центры, включая Ла-Венту.',
      },
      tangSutra: {
        prompt:
          'При какой династии в 868 году напечатали датированный свиток «Алмазной сутры»?',
        fact: '«Алмазная сутра» — древнейшая сохранившаяся полная печатная книга с указанной датой.',
      },
      tangChangan: {
        prompt:
          'Столица какой династии, Чанъань, принимала купцов и паломников Шёлкового пути?',
        fact: 'В многонациональный Чанъань эпохи Тан привозили товары, верования и новые идеи.',
      },
      florenceDome: {
        prompt:
          'В каком городе Брунеллески возвёл огромный кирпичный купол, завершённый в 1436 году?',
        fact: 'Купол собора строили 16 лет, а фонарь на его вершине добавили позже.',
      },
      florenceConstruction: {
        prompt:
          'В каком городе Возрождения подняли миллионы кирпичей для купола собора?',
        fact: 'Строители поднимали материалы высоко над Флоренцией с помощью специальных механизмов.',
      },
      edoPrints: {
        prompt:
          'В какую эпоху художники, резчики и печатники создавали красочные гравюры укиё-э?',
        fact: 'Над одной гравюрой Эдо часто работали издатель, художник, резчик и печатник.',
      },
      edoCapital: {
        prompt:
          'В какую эпоху город Эдо, нынешний Токио, стал резиденцией японских сёгунов?',
        fact: 'Мастера эпохи Эдо изображали на гравюрах уличную жизнь, театр и пейзажи.',
      },
      stocktonPassengers: {
        prompt:
          'Какая железная дорога в 1825 году возила пассажиров за паровозом?',
        fact: 'Стоктон-Дарлингтонская железная дорога стала первой общественной линией с паровой тягой для пассажиров.',
      },
      stocktonLocomotion: {
        prompt: 'На открытии какого пути ехал паровоз Locomotion No. 1?',
        fact: 'При открытии железной дороги в 1825 году Locomotion тянул вагоны перед большими толпами.',
      },
      wrightFlight: {
        prompt:
          'Какой аппарат совершил управляемый полёт с двигателем над дюнами Северной Каролины в 1903 году?',
        fact: 'Первый полёт выполнил Орвилл Райт, а его брат Уилбур в тот день летел дольше всех.',
      },
      wrightSeconds: {
        prompt: 'Какой прорыв длился всего 12 секунд и охватил 120 футов?',
        fact: 'Первый полёт самолёта братьев Райт 17 декабря 1903 года составил около 36 метров.',
      },
      penicillinMold: {
        prompt:
          'Что открыл Флеминг, заметив вокруг плесени зону без бактерий в чашке?',
        fact: 'Плесень выделяла вещество, которое сдерживало рост соседних бактерий.',
      },
      penicillinName: {
        prompt:
          'Какое открытие Александр Флеминг назвал в честь плесени Penicillium?',
        fact: 'Флеминг заметил этот эффект в 1928 году, а позже другие исследователи разработали на его основе лекарство.',
      },
      gobekliPillars: {
        prompt:
          'Где охотники и собиратели воздвигли Т-образные столбы с изображениями диких животных?',
        fact: 'Каменные сооружения Гёбекли-Тепе появились ещё до распространения керамики в этом регионе.',
      },
      catalhoyukRoofs: {
        prompt:
          'В каком неолитическом поселении люди входили в плотно стоящие дома через крыши?',
        fact: 'Между тесно стоявшими домами Чатал-Хююка не было обычных улиц.',
      },
      stonehengeCircle: {
        prompt:
          'Какой памятник на равнине Солсбери знаменит кругом стоячих камней?',
        fact: 'Стоунхендж был частью большого ландшафта с древними сооружениями и курганами.',
      },
      urZiggurat: {
        prompt:
          'В каком шумерском городе над равниной Месопотамии возвышался ступенчатый зиккурат?',
        fact: 'Зиккурат Ура стоял среди крупных городов в дельте Тигра и Евфрата.',
      },
      knossosFrescoes: {
        prompt:
          'В каком дворце Крита были яркие фрески, дворы и помещения для хранения припасов?',
        fact: 'Минойские дворцовые центры соединяли управление, хозяйство и религиозную жизнь.',
      },
      hattusaLionGate: {
        prompt:
          'Столицу какого царства охраняли монументальные Львиные ворота?',
        fact: 'За стенами Хаттусы находились храмы, царские постройки и несколько украшенных ворот.',
      },
      mycenaeWalls: {
        prompt:
          'В какой греческой цитадели бронзового века были «циклопические» стены и таблички линейного письма Б?',
        fact: 'Микенские таблички сохранили одни из древнейших письменных свидетельств греческого языка.',
      },
      meroePyramids: {
        prompt: 'Где правители царства Куш строили крутые пирамиды возле Нила?',
        fact: 'С III века до н. э. Мероэ стало важным местом захоронения кушитских царей.',
      },
      carthageHarbor: {
        prompt:
          'В гавани какого североафриканского города стояли корабли со всего Средиземноморья?',
        fact: 'Древние гавани Карфагена напоминают о торговых связях между культурами Средиземноморья.',
      },
      cerveteriTombs: {
        prompt:
          'Какой этрусский некрополь имел гробницы, улицы и небольшие площади?',
        fact: 'Гробницы Черветери порой повторяли комнаты и убранство этрусских домов.',
      },
      qinClayArmy: {
        prompt:
          'Погребальный комплекс какого правителя окружали тысячи глиняных воинов в человеческий рост?',
        fact: 'Терракотовые воины мавзолея первого императора Цинь различаются лицами и снаряжением.',
      },
      chavinTemple: {
        prompt:
          'В каком церемониальном центре Анд были каменные террасы и изображения животных?',
        fact: 'Чавин привлекал паломников в высокогорную долину Перуанских Анд.',
      },
      nazcaGeoglyphs: {
        prompt:
          'Где на поверхности перуанской пустыни начертали огромные фигуры птиц и растений?',
        fact: 'Геоглифы Наска занимают сотни квадратных километров засушливой равнины.',
      },
      jerichoTower: {
        prompt:
          'Какое поселение в оазисе возвело каменную башню и стены за тысячелетия до египетских пирамид?',
        fact: 'Неолитический Иерихон имел монументальную башню, стену и ров уже в IX–VIII тысячелетиях до н. э.',
      },
      lascauxAnimals: {
        prompt:
          'Какая пещера сохранила рисунки лошадей, быков и других животных ледникового периода?',
        fact: 'Росписи Ласко поражают точностью наблюдения, яркими красками и ощущением движения.',
      },
      skaraBraeHouses: {
        prompt:
          'В каком поселении на ветреных островах каменные дома соединяли узкие крытые проходы?',
        fact: 'Скара-Брей — одна из наиболее хорошо сохранившихся неолитических деревень Северо-Западной Европы.',
      },
      caralPlazas: {
        prompt:
          'Какой древний город Перу построил монументальные платформы и углублённые круглые площади?',
        fact: 'Караль-Супе возник над зелёной долиной реки Супе около пяти тысяч лет назад.',
      },
      ugaritAlphabet: {
        prompt:
          'Какой портовый город бронзового века оставил глиняные таблички с ранней алфавитной клинописью?',
        fact: 'Писцы Угарита записывали свой язык системой примерно из тридцати знаков.',
      },
      ninevehReliefs: {
        prompt:
          'В какой столице Ассирии стены дворцов покрывали резными сценами походов и царской жизни?',
        fact: 'Каменные рельефы Ниневии подробно изображали события на стенах дворцов.',
      },
      petraRockCity: {
        prompt:
          'Какой караванный город высекал величественные гробницы в розово-красных скалах?',
        fact: 'Строители Петры создавали каналы, цистерны и дамбы, чтобы хранить воду в пустыне.',
      },
      teotihuacanAvenue: {
        prompt:
          'В каком древнем городе Мексики Дорога мёртвых проходила мимо пирамид Солнца и Луны?',
        fact: 'Между I и VII веками Теотиуакан стал одним из крупнейших городов древней Америки.',
      },
      hagiaSophiaDome: {
        prompt:
          'Какое здание поразило Константинополь VI века огромным центральным куполом?',
        fact: 'Собор Святой Софии завершили в 537 году; его купол повлиял на архитектуру церквей и мечетей.',
      },
      aachenOctagon: {
        prompt:
          'Где Карл Великий построил восьмиугольную дворцовую капеллу к северу от Альп?',
        fact: 'Капеллу заложили около 790–800 годов, а в 814 году Карла Великого похоронили в Ахене.',
      },
      cordobaArches: {
        prompt:
          'Какой памятник Андалусии знаменит рядами двойных красно-белых арок?',
        fact: 'Большую мечеть Кордовы начали строить в 786 году и расширяли в следующие века.',
      },
      borobudurTerraces: {
        prompt:
          'Какой буддийский памятник на Яве поднимается террасами со ступами в форме колоколов?',
        fact: 'Боробудур соединяет образы ступы, храма и горы в одном огромном сооружении.',
      },
      lalibelaRockChurches: {
        prompt:
          'Где в Эфиопском нагорье одиннадцать средневековых церквей высекли прямо из скалы?',
        fact: 'Церкви Лалибэлы связаны рвами и проходами, прорубленными в камне.',
      },
      kilwaOceanTrade: {
        prompt:
          'Какой островной город суахили торговал через Индийский океан с восточного побережья Африки?',
        fact: 'Среди руин Килвы из кораллового камня сохранились Большая мечеть и огромный дворец Хусуни-Кубва.',
      },
      bukharaSilkRoad: {
        prompt:
          'Какой город Шёлкового пути сохранил кирпичный мавзолей Исмаила Самани?',
        fact: 'Этот мавзолей — шедевр архитектуры Бухары X века.',
      },
      samarkandCrossroads: {
        prompt:
          'Какой город Центральной Азии прославился голубыми постройками эпохи Тимуридов?',
        fact: 'Самарканд развивался на перекрёстке культур в оазисе реки Зеравшан.',
      },
      djenneEarthenCity: {
        prompt:
          'Какой торговый город Западной Африки известен монументальной глиняной архитектурой?',
        fact: 'Дженне связывал местные рынки с транссахарскими путями торговли золотом.',
      },
      cahokiaMound: {
        prompt:
          'Какой доколумбовый город насыпал огромный курган Монкс-Маунд возле Миссисипи?',
        fact: 'Кахокия была крупнейшим известным доколумбовым поселением к северу от Мексики.',
      },
      chichenItzaCaracol: {
        prompt:
          'В каком городе майя находятся Эль-Кастильо и круглое здание Эль-Караколь?',
        fact: 'Чичен-Ица соединяет строительные традиции майя с влияниями центральной Мексики.',
      },
      alhambraPalace: {
        prompt:
          'Какой дворцовый комплекс над Гранадой знаменит дворами Насридов, резными стенами и водоёмами?',
        fact: 'Альгамбра и соседний Хенералифе образуют ансамбль средневековой андалусской архитектуры.',
      },
      haitiFreedom: {
        prompt:
          'Какая страна Карибского бассейна получила независимость от Франции после восстания бывших рабов?',
        fact: 'Гаити провозгласила независимость в 1804 году и стала первой независимой республикой чернокожих людей.',
      },
      rocketRainhill: {
        prompt:
          'Какой жёлтый паровоз победил в Рейнхиллских испытаниях 1829 года?',
        fact: '«Ракета» помогла доказать, что паровозы подходят для железной дороги Ливерпуль — Манчестер.',
      },
      faradayInduction: {
        prompt:
          'Какое открытие показало, что изменение магнитного поля может создавать электрический ток?',
        fact: 'Майкл Фарадей открыл электромагнитную индукцию в 1831 году; на этом принципе работают генераторы.',
      },
      morseTelegraph: {
        prompt:
          'Какое изобретение передало сообщение по проводу из Вашингтона в Балтимор в 1844 году?',
        fact: '24 мая 1844 года Морзе отправил знаменитую первую публичную телеграмму по экспериментальной линии.',
      },
      senecaDeclaration: {
        prompt:
          'На каком собрании приняли «Декларацию чувств» с требованиями прав для женщин?',
        fact: 'Съезд в Сенека-Фоллс 1848 года собрал более 300 человек в Уэслианской часовне.',
      },
      greatExhibitionGlass: {
        prompt:
          'Какая международная выставка заполнила изобретениями лондонский Хрустальный дворец из стекла и железа?',
        fact: 'Более шести миллионов человек посетили Великую выставку в Гайд-парке в 1851 году.',
      },
      nightingaleScutari: {
        prompt:
          'С какой больницей связана работа Флоренс Найтингейл и её медсестёр во время Крымской войны?',
        fact: 'Найтингейл с командой ухаживали за ранеными в Скутари возле Константинополя.',
      },
      darwinOrigin: {
        prompt:
          'Какая книга 1859 года объяснила, как естественный отбор меняет виды на протяжении поколений?',
        fact: '«Происхождение видов» Дарвина преобразило изучение живой природы.',
      },
      emancipationProclamation: {
        prompt:
          'Какой указ 1863 года объявил свободными рабов на территориях, восставших против США?',
        fact: 'Прокламация Линкольна касалась мятежных территорий; для отмены рабства во всех США потребовались дальнейшие перемены.',
      },
      meijiRestoration: {
        prompt:
          'Какая смена власти завершила правление сёгуната Токугава и открыла эпоху Мэйдзи?',
        fact: 'Реставрация Мэйдзи в 1868 году передала власть новому правительству вокруг императора.',
      },
      suezOpening: {
        prompt:
          'Какой новый водный путь позволил кораблям ходить между Средиземным и Красным морями, не огибая Африку?',
        fact: 'Суэцкий канал открыли 17 ноября 1869 года после многолетнего строительства.',
      },
      bellTelephone: {
        prompt:
          'Какое устройство передало слова Александра Грэхема Белла Томасу Уотсону в 1876 году?',
        fact: 'Белл запатентовал телефон в марте 1876 года и через несколько дней успешно передал человеческую речь.',
      },
      edisonLighting: {
        prompt:
          'Какое изобретение осветило лабораторию Томаса Эдисона во время публичного показа в 1879 году?',
        fact: 'Эдисон и его команда работали над практичной системой ламп накаливания, показанной в декабре 1879 года.',
      },
      libertyDedication: {
        prompt:
          'Какой медный монумент открыли в гавани Нью-Йорка в октябре 1886 года?',
        fact: 'Статую изготовили во Франции, перевезли по частям и собрали на постаменте в Нью-Йорке.',
      },
      eiffelExposition: {
        prompt:
          'Какая железная башня возвышалась над Всемирной выставкой в Париже в 1889 году?',
        fact: 'Эйфелеву башню построили для выставки к столетию Французской революции.',
      },
      rontgenXray: {
        prompt:
          'Какое открытие позволило Вильгельму Рентгену получить изображение костей в 1895 году?',
        fact: 'За открытие рентгеновских лучей он получил первую Нобелевскую премию по физике в 1901 году.',
      },
      athensOlympics: {
        prompt:
          'Какой город принял первые Олимпийские игры современности в 1896 году?',
        fact: 'На первых современных Играх в Афинах спортсмены соревновались в девяти видах спорта.',
      },
      adwaVictory: {
        prompt:
          'Где эфиопские войска разбили вторгшуюся итальянскую армию в 1896 году?',
        fact: 'Победа при Адуа стала символом защиты независимости Эфиопии.',
      },
      philippineRevolution: {
        prompt:
          'В каком восстании против испанской власти в 1896 году участвовало общество Катипунан?',
        fact: 'Андрес Бонифасио и другие члены Катипунана боролись за независимость Филиппин.',
      },
      marconiWireless: {
        prompt:
          'Какая технология передавала сообщения через Бристольский залив без соединяющего провода?',
        fact: 'Маркони продемонстрировал беспроводной телеграф в Британии и основал компанию в 1897 году.',
      },
      blitzShelters: {
        prompt:
          'Во время какого события жители Лондона ночевали на платформах метро?',
        fact: 'Во время Блица семьи использовали станции метро как укрытия от повторяющихся авианалётов.',
      },
      normandyLandings: {
        prompt:
          'Какая операция привела десантные суда союзников к берегам северной Франции 6 июня 1944 года?',
        fact: 'Высадка в Нормандии открыла союзникам путь для наступления в оккупированной Западной Европе.',
      },
      partitionTrains: {
        prompt:
          'Какой раздел Британской Индии заставил миллионы людей пересекать новые границы, часто на поездах?',
        fact: 'Раздел 1947 года создал Индию и Пакистан и вызвал массовое переселение на фоне насилия.',
      },
      humanRightsDeclaration: {
        prompt:
          'Какой документ Генеральная Ассамблея ООН приняла в Париже в декабре 1948 года?',
        fact: 'Всеобщая декларация прав человека изложила права и свободы, принадлежащие каждому человеку.',
      },
      dnaDoubleHelix: {
        prompt:
          'Структуру какой молекулы в виде двойной спирали описали в 1953 году с опорой на рентгеновские снимки?',
        fact: 'Рентгеноструктурные исследования Розалинд Франклин и Мориса Уилкинса помогли раскрыть строение ДНК.',
      },
      brownDecision: {
        prompt:
          'Какое решение Верховного суда США признало расовую сегрегацию в государственных школах неконституционной?',
        fact: 'Решение по делу Брауна 1954 года отвергло правовую основу раздельного обучения детей по расовому признаку.',
      },
      bandungConference: {
        prompt:
          'Какая конференция собрала лидеров стран Азии и Африки в Индонезии в апреле 1955 года?',
        fact: 'Делегаты в Бандунге обсуждали сотрудничество и независимость.',
      },
      nasaFounded: {
        prompt:
          'Какое гражданское космическое агентство начало работу в США в октябре 1958 года?',
        fact: 'NASA создали после запуска «Спутника»; агентство заработало 1 октября 1958 года.',
      },
      gagarinOrbit: {
        prompt: 'Какой полёт впервые вывел человека на орбиту Земли?',
        fact: 'Юрий Гагарин облетел Землю на «Востоке-1» 12 апреля 1961 года; полёт длился 108 минут.',
      },
      washingtonMarch: {
        prompt:
          'Какое собрание 1963 года заполнило Национальную аллею требованиями рабочих мест и гражданских прав?',
        fact: 'Около 250 тысяч человек присоединились к Маршу на Вашингтон за рабочие места и свободу.',
      },
      mexicoOlympics: {
        prompt: 'Какие Олимпийские игры впервые прошли в Латинской Америке?',
        fact: 'Мехико принимал Игры 1968 года на высоте около 2300 метров.',
      },
      intel4004: {
        prompt:
          'Какое миниатюрное устройство 1971 года вместило программируемый центральный процессор на одном чипе?',
        fact: 'Intel 4004 сначала создали для калькулятора, а позже продавали как универсальный чип.',
      },
      mobileCall: {
        prompt:
          'Что продемонстрировал Мартин Купер звонком на улице Нью-Йорка в 1973 году?',
        fact: 'Команда Купера в Motorola создала ранний ручной сотовый телефон размером с кирпич.',
      },
      apolloSoyuzHandshake: {
        prompt:
          'Какая миссия свела американский и советский экипажи для рукопожатия на орбите Земли?',
        fact: 'Корабли «Аполлон» и «Союз» состыковались 17 июля 1975 года во время совместной миссии.',
      },
      smallpoxEradication: {
        prompt:
          'Какую болезнь Всемирная ассамблея здравоохранения официально объявила искоренённой в 1980 году?',
        fact: 'Всемирная кампания вакцинации и надзора прекратила естественную передачу оспы.',
      },
      tcpIpSwitch: {
        prompt:
          'Какая перемена 1983 года сделала TCP/IP общими протоколами для компьютеров ARPANET?',
        fact: 'Согласованный переход 1 января 1983 года помог соединить сети в Интернет.',
      },
      liveAidConcert: {
        prompt:
          'Какие благотворительные концерты 1985 года объединили огромные аудитории в Лондоне и Филадельфии?',
        fact: 'Live Aid собирал средства и привлекал внимание к помощи во время голода; архив хранится в Национальной библиотеке Ирландии.',
      },
      chornobylAccident: {
        prompt:
          'На какой атомной электростанции в Украине произошли взрыв и пожар в апреле 1986 года?',
        fact: 'Чернобыльская авария вызвала выброс радиоактивных веществ и заставила многих людей покинуть дома.',
      },
      montrealProtocol: {
        prompt:
          'Какое международное соглашение 1987 года было призвано постепенно отказаться от веществ, разрушающих озоновый слой?',
        fact: 'Монреальский протокол подписали в 1987 году; он вступил в силу в 1989 году.',
      },
      webProposal: {
        prompt:
          'Что Тим Бернерс-Ли предложил в CERN в 1989 году для связывания научных документов?',
        fact: 'Его первая идея Web привела к запуску сервера и браузера в CERN к концу 1990 года.',
      },
      chauvetAnimals: {
        prompt:
          'В какой пещере более 30 000 лет назад изобразили львов, носорогов и других животных?',
        fact: 'Художники Шове использовали тени и форму скалы, чтобы передать движение животных.',
      },
      carnacRows: {
        prompt:
          'Где тысячи неолитических камней образуют длинные ряды в Бретани?',
        fact: 'Ряды камней Карнака тянутся на несколько километров; их назначение до сих пор обсуждают.',
      },
      banChiangPots: {
        prompt:
          'На каком доисторическом памятнике Таиланда изготовляли сосуды с красными спиральными узорами?',
        fact: 'Керамика и погребения Бан-Чианга рассказывают о древнем земледелии и ремёслах Юго-Восточной Азии.',
      },
      dilmunMounds: {
        prompt:
          'Какое общество бронзового века на Бахрейне оставило тысячи погребальных курганов?',
        fact: 'Поля курганов показывают масштабы Дильмуна — торгового узла между Месопотамией и долиной Инда.',
      },
      gizaKhufu: {
        prompt:
          'Какое сооружение построили как гробницу египетского фараона Хуфу?',
        fact: 'Великая пирамида — единственное из античных чудес света, сохранившееся до наших дней.',
      },
      abuSimbelStatues: {
        prompt:
          'У какого скального египетского храма стоят четыре гигантские статуи Рамсеса II?',
        fact: 'В 1960-х годах храм перенесли выше, спасая его от вод озера Насер.',
      },
      thebesKarnak: {
        prompt:
          'В каком египетском городе поколения фараонов расширяли огромный храмовый комплекс Карнак?',
        fact: 'Гигантские колонны и святилища Карнака строили и меняли на протяжении многих столетий.',
      },
      sanchiStupa: {
        prompt:
          'На каком буддийском памятнике Индии к большой ступе ведут резные каменные ворота?',
        fact: 'Ворота Санчи рассказывают истории через резьбу с людьми, животными и символами.',
      },
      ajantaPaintings: {
        prompt:
          'В каких пещерах Индии сохранились буддийские росписи скальных монастырей?',
        fact: 'Расписанные пещеры Аджанты создавали в несколько этапов с перерывом в столетия.',
      },
      pasargadaeCyrus: {
        prompt:
          'Где стоит ступенчатая каменная гробница, которую считают захоронением Кира Великого?',
        fact: 'Кир основал державу Ахеменидов; Пасаргады были одним из её первых царских центров.',
      },
      ephesusLibrary: {
        prompt:
          'В каком античном городе сохранился монументальный фасад библиотеки Цельса?',
        fact: 'Библиотеку построили в римском Эфесе в начале II века н. э.',
      },
      pompeiiAsh: {
        prompt:
          'Какой римский город погребло извержение Везувия в 79 году н. э.?',
        fact: 'Пепел сохранил улицы, дома и бытовые вещи, рассказывающие о жизни римского города.',
      },
      colosseumArena: {
        prompt:
          'Какой римский амфитеатр открыли в 80 году н. э. для публичных зрелищ?',
        fact: 'Многочисленные входы Колизея помогали огромным толпам проходить внутрь.',
      },
      hadriansWallFrontier: {
        prompt:
          'Какая римская граница протянулась по Северной Британии при императоре Адриане?',
        fact: 'Вал включал форты, малые крепости и ворота — это была не просто каменная преграда.',
      },
      palmyraCaravans: {
        prompt:
          'Какой город-оазис стал перекрёстком караванов между Римом и землями дальше на востоке?',
        fact: 'Длинная улица с колоннадами Пальмиры говорила о богатстве от дальней торговли.',
      },
      hegraTombs: {
        prompt:
          'Где набатейские мастера высекли монументальные гробницы в песчанике Аравии?',
        fact: 'Хегра была крупным южным городом набатеев; надписи на гробницах называют их владельцев.',
      },
      leptisForum: {
        prompt:
          'Какой римский город на побережье современной Ливии украсили при Септимии Севере?',
        fact: 'Север родился в Лептис-Магне и поддержал там масштабное строительство.',
      },
      delphiOracle: {
        prompt:
          'В каком греческом святилище посетители спрашивали пророчества у оракула Аполлона?',
        fact: 'Греческие города-государства выставляли дары и строили сокровищницы по пути к храму Аполлона.',
      },
      mogaoSilkRoad: {
        prompt:
          'Какие пещерные храмы близ Дуньхуана сохранили буддийское искусство Шёлковых путей?',
        fact: 'Росписи Могао показывают религиозные сюжеты, торговлю и повседневную жизнь.',
      },
      anuradhapuraCity: {
        prompt:
          'Какая древняя столица Шри-Ланки выросла вокруг буддийских монастырей и больших ступ?',
        fact: 'Анурадхапура более тысячелетия оставалась важным политическим и религиозным центром.',
      },
      chauvetSealed: {
        prompt:
          'Какая пещера с росписями оставалась закрытой обвалом до повторного открытия в 1994 году?',
        fact: 'Закрытый вход помог уберечь более тысячи рисунков от позднейших повреждений.',
      },
      carnacMenhirs: {
        prompt: 'Где можно пройти между огромными рядами бретонских менгиров?',
        fact: 'Менгир — отдельный вертикальный камень; в Карнаке их одно из крупнейших скоплений в мире.',
      },
      banChiangBurials: {
        prompt:
          'На каком памятнике Юго-Восточной Азии нашли древние погребения, керамику и следы обработки металлов?',
        fact: 'Раскопанные слои Бан-Чианга охватывают многие века и показывают перемены ремёсел.',
      },
      dilmunTrade: {
        prompt:
          'Какой торговый центр в Персидском заливе связывал Месопотамию с миром Инда в бронзовом веке?',
        fact: 'Дильмун лежал на морских путях купцов, перевозивших товары между далёкими землями.',
      },
      gizaWonder: {
        prompt:
          'Какое из античных чудес света и сегодня можно увидеть почти целым?',
        fact: 'Великая пирамида тысячелетиями оставалась высочайшим сооружением, построенным людьми.',
      },
      abuSimbelRescue: {
        prompt:
          'Какой древний храм в 1960-х годах разрезали на блоки и перенесли выше?',
        fact: 'Международная кампания спасла Абу-Симбел от затопления новым водохранилищем.',
      },
      thebesNecropolis: {
        prompt: 'Какая древняя столица стояла на Ниле напротив Долины царей?',
        fact: 'На западном берегу Фив были царские гробницы, а на восточном возводили храмы.',
      },
      sanchiGateways: {
        prompt:
          'Какой памятник имеет четыре украшенных ворот вокруг буддийской ступы?',
        fact: 'Резные ворота добавили после древнейшего этапа строительства ступы.',
      },
      ajantaCliff: {
        prompt: 'Какие буддийские монастыри высекли в скале в форме подковы?',
        fact: 'В пещерах есть молитвенные залы и жилища монахов, а также росписи.',
      },
      pasargadaeCapital: {
        prompt: 'Какую раннюю столицу Ахеменидов основал Кир Великий?',
        fact: 'Среди сохранившихся сооружений — дворцы, сады и гробница Кира.',
      },
      ephesusArtemis: {
        prompt:
          'Возле какого города стоял храм Артемиды — одно из античных чудес света?',
        fact: 'Святилище Артемиды прославило Эфес задолго до строительства римской библиотеки.',
      },
      pompeiiFrescoes: {
        prompt:
          'Где археологи до сих пор изучают росписи римских домов, сохранившиеся после извержения вулкана?',
        fact: 'Стены и вещи Помпей дают необычайно подробные свидетельства повседневной жизни.',
      },
      colosseumFlavian: {
        prompt:
          'Какую достопримечательность первоначально называли амфитеатром Флавиев?',
        fact: 'Его начали строить при императоре Веспасиане, а открыли при его сыне Тите.',
      },
      hadriansWallForts: {
        prompt:
          'Вдоль какого римского памятника стояли малые крепости и пограничные форты?',
        fact: 'Солдаты контролировали переходы и движение через ворота, встроенные в границу.',
      },
      palmyraColumns: {
        prompt:
          'Какой сирийский город-оазис славился величественной улицей с колоннадами?',
        fact: 'Памятники Пальмиры сочетали местные и греко-римские художественные традиции.',
      },
      hegraInscriptions: {
        prompt:
          'На каком набатейском памятнике надписи на гробницах иногда называют погребённых людей?',
        fact: 'Высеченные фасады Хегры видны издалека среди пустынного пейзажа.',
      },
      leptisSeverus: {
        prompt:
          'Какой североафриканский город был родиной римского императора Септимия Севера?',
        fact: 'При поддержке Севера появились монументальный форум и другие общественные сооружения.',
      },
      delphiTreasuries: {
        prompt:
          'Где греческие полисы ставили сокровищницы вдоль дороги к оракулу Аполлона?',
        fact: 'В сокровищницах хранили дары общин из разных частей греческого мира.',
      },
      mogaoMurals: {
        prompt:
          'В каких пещерах Шёлкового пути сохранились многовековые росписи буддийских сюжетов?',
        fact: 'Пещеры украшали путешественники и покровители из разных общин на протяжении веков.',
      },
      anuradhapuraBodhi: {
        prompt:
          'Какой священный город Шри-Ланки связан с древним почитаемым деревом бодхи?',
        fact: 'Шри Маха Бодхи остаётся важной святыней для паломников в Анурадхапуре.',
      },
      kyivMosaics: {
        prompt: 'Какой киевский собор сохранил мозаики эпохи Руси?',
        fact: 'Его мозаики соединяют византийское искусство с местными традициями.',
      },
      bulguksaSilla: {
        prompt: 'Какой корейский храм построили при государстве Силла?',
        fact: 'Вместе с гротом Соккурам он образует буддийский комплекс.',
      },
      himejiWhite: {
        prompt: 'Какой японский замок прозвали Белой цаплей?',
        fact: 'Извилистые пути и многочисленные ворота усиливали его оборону.',
      },
      forbiddenPalace: {
        prompt: 'Какой дворец Пекина был резиденцией императоров Мин и Цин?',
        fact: 'Его большие залы стоят вдоль центральной оси Пекина.',
      },
      machuRidge: {
        prompt: 'Какое поселение инков стоит на крутом хребте Анд?',
        fact: 'Его террасы и каменные стены сливаются с горой.',
      },
      marrakeshAlmoravid: {
        prompt: 'Какой марокканский город основали Альморавиды?',
        fact: 'Он стал влиятельной столицей Северной Африки и аль-Андалуса.',
      },
      fezMedina: {
        prompt: 'Какая марокканская медина расцвела при Маринидах?',
        fact: 'На её исторических улицах есть медресе, рынки и фонтаны.',
      },
      kairouanMosque: {
        prompt: 'В каком городе Туниса стоит знаменитая Большая мечеть?',
        fact: 'Основанный в 670 году, он стал духовным центром Магриба.',
      },
      timbuktuScholars: {
        prompt: 'Какой город Сахары привлекал учёных и купцов?',
        fact: 'Мечети и рукописи сделали его центром науки.',
      },
      askiaTomb: {
        prompt:
          'Какое глинобитное сооружение возвели в Гао для правителя Сонгая?',
        fact: 'Его пирамидальная башня отражает строительные традиции Сахеля.',
      },
      sukhothaiWriting: {
        prompt:
          'Какое раннее тайское королевство оставило надписи среди храмов?',
        fact: 'Они помогают изучать раннюю тайскую письменность и власть.',
      },
      baganTemples: {
        prompt: 'Какая равнина Мьянмы покрылась тысячами буддийских храмов?',
        fact: 'Правители и дарители возводили памятники Багана на протяжении веков.',
      },
      bamiyanBuddhas: {
        prompt:
          'В какой долине Афганистана когда-то стояли два гигантских Будды?',
        fact: 'Статуи уничтожили в 2001 году; их ниши в скале сохранились.',
      },
      greatWallMing: {
        prompt:
          'Какое пограничное сооружение при Мин перестроили из кирпича и камня?',
        fact: 'Он включает стены, проходы и башни, построенные в разные эпохи.',
      },
      montTides: {
        prompt:
          'Какое средневековое аббатство возвышается на приливном острове Нормандии?',
        fact: 'Паломники преодолевали зыбкие пески, чтобы добраться до церкви.',
      },
      veniceLagoon: {
        prompt: 'Какая морская республика выросла на островах лагуны?',
        fact: 'Каналы связывали купцов и верфи со средиземноморскими путями.',
      },
      lubeckHansa: {
        prompt: 'Какой город Балтики возглавил Ганзейскую торговую сеть?',
        fact: 'Кирпичная готика напоминает о богатстве от средневековой торговли.',
      },
      novgorodTrade: {
        prompt:
          'Какой город Руси связывал балтийские пути с восточными землями?',
        fact: 'Его купцы торговали, в частности, мехами и воском.',
      },
      haeinsaBlocks: {
        prompt: 'Какой корейский храм хранит доски Трипитаки Кореана?',
        fact: 'Деревянные хранилища спроектировали, чтобы печатные доски не отсыревали.',
      },
      shibamTowers: {
        prompt: 'Какой йеменский город славится глинобитными домами-башнями?',
        fact: 'Высокие дома экономно использовали пространство внутри городских стен.',
      },
      kyivOrans: {
        prompt: 'В каком соборе есть огромная мозаика Богоматери Оранты?',
        fact: 'Образ почти тысячу лет смотрит на Киев.',
      },
      bulguksaSeokguram: {
        prompt:
          'Какой храм расположен на одной горе с пещерным Буддой Соккурама?',
        fact: 'Оба памятника созданы в эпоху расцвета государства Силла.',
      },
      himejiDefences: {
        prompt:
          'В каком замке извилистый путь ведёт мимо ворот к белой главной башне?',
        fact: 'Сложный маршрут должен был замедлять нападавших.',
      },
      forbiddenAxis: {
        prompt: 'Какой дворцовый комплекс стоит на центральной оси Пекина?',
        fact: 'План отделял церемониальные внешние дворы от частных внутренних.',
      },
      machuTerraces: {
        prompt: 'Где строители инков вписали террасы в высокогорный ландшафт?',
        fact: 'Памятник находится на высоте более 2400 метров.',
      },
      marrakeshWalls: {
        prompt: 'Какая столица Альморавидов дала название Марокко?',
        fact: 'Его красные стены и ворота до сих пор определяют облик старого города.',
      },
      fezMarinids: {
        prompt: 'В какой марокканской медине Мариниды строили медресе?',
        fact: 'Фес был столицей Марокко во время расцвета XIII–XIV веков.',
      },
      kairouanAghlabids: {
        prompt: 'Какой город расцвёл при Аглабидах в IX веке?',
        fact: 'Мечеть Кайруана — один из главных ранних памятников исламской Северной Африки.',
      },
      timbuktuMosques: {
        prompt:
          'Какой город Западной Африки славится мечетями Джингарейбер, Санкоре и Сиди-Яхья?',
        fact: 'Эти три мечети напоминают об учёном прошлом Тимбукту.',
      },
      askiaGao: {
        prompt:
          'Какой памятник напоминает о времени, когда Гао был столицей империи Сонгай?',
        fact: 'Аския Мухаммад возвёл башню в 1495 году.',
      },
      sukhothaiTemples: {
        prompt:
          'Где надписи рассказывают об обществе и власти раннего тайского королевства?',
        fact: 'Исторические города сохранили храмы и памятники Сукхотая.',
      },
      baganPlain: {
        prompt:
          'В каком священном ландшафте Мьянмы кирпичные ступы покрывают равнину?',
        fact: 'Памятники сильно различаются размерами и формами.',
      },
      bamiyanNiches: {
        prompt:
          'Где пустые ниши в скале напоминают о статуях Будды, уничтоженных в 2001 году?',
        fact: 'В долине также сохранились пещеры и древние настенные росписи.',
      },
      greatWallWatchtowers: {
        prompt:
          'Какая китайская пограничная сеть соединяет стены, проходы и сторожевые башни?',
        fact: 'Разные династии строили и перестраивали участки на протяжении веков.',
      },
      montPilgrims: {
        prompt:
          'Какой приливный остров привлекал паломников к аббатству Святого Михаила?',
        fact: 'Аббатство пришлось строить вверх на узком скалистом острове.',
      },
      veniceGalleys: {
        prompt:
          'Из какого города-лагуны отправлялись средневековые купеческие галеры?',
        fact: 'Морская торговля помогла Венеции стать могущественной республикой.',
      },
      lubeckBrick: {
        prompt:
          'Какой ганзейский город славится кирпичной готикой старого центра?',
        fact: 'Кирпич был характерным строительным материалом на побережье Балтики.',
      },
      novgorodSophia: {
        prompt:
          'В каком средневековом городе на восточных торговых путях стоит Софийский собор?',
        fact: 'Церкви Новгорода сохраняют века местного искусства.',
      },
      haeinsaRepository: {
        prompt:
          'Где тысячи буддийских печатных досок хранили в особых деревянных залах?',
        fact: 'Доски Трипитаки Кореана — выдающийся пример резьбы и сохранения.',
      },
      shibamSkyscrapers: {
        prompt:
          'Какой старый город Йемена называют городом пустынных небоскрёбов?',
        fact: 'Его высокие глинобитные дома тесно стоят внутри оборонительных стен.',
      },
      zhengFleet: {
        prompt: 'Чьи флоты эпохи Мин плавали по Индийскому океану?',
        fact: 'Плавания связали Китай с портами Азии и Восточной Африки.',
      },
      gutenbergBible: {
        prompt:
          'Какая майнцская мастерская напечатала знаменитую раннюю Библию подвижным шрифтом?',
        fact: 'Майнцская мастерская Гутенберга изменила производство книг в Европе.',
      },
      istanbulConquest: {
        prompt:
          'Какой город стал османской столицей после захвата в 1453 году?',
        fact: 'Город соединял черноморский и средиземноморский миры.',
      },
      tenochtitlanCanals: {
        prompt: 'Какая столица мешиков выросла на островах озера Тескоко?',
        fact: 'Дамбы и каналы связывали его рынки и кварталы.',
      },
      fatehpurAkbar: {
        prompt:
          'Какую могольскую столицу из красного песчаника построил Акбар?',
        fact: 'Двор использовал этот спланированный город как столицу лишь около десятилетия.',
      },
      sistineMichelangelo: {
        prompt: 'Какой потолок Микеланджело расписал по заказу папы Юлия II?',
        fact: 'Высоко над полом капеллы он изобразил сцены из Книги Бытия.',
      },
      copernicusSun: {
        prompt:
          'Какая работа 1543 года поместила Солнце близ центра планетной системы?',
        fact: 'Коперник поставил под сомнение прежнюю картину мира с Землёй в центре.',
      },
      suleymaniyeMosque: {
        prompt:
          'Какая большая османская мечеть венчает холм над Золотым Рогом Стамбула?',
        fact: 'Архитектор Синан спроектировал её для султана Сулеймана Великолепного.',
      },
      globeStage: {
        prompt:
          'В каком лондонском театре под открытым небом ставили пьесы Шекспира?',
        fact: 'Зрители стояли во дворе или смотрели спектакль с галерей.',
      },
      galileoMoon: {
        prompt:
          'Телескоп какого астронома открыл подробности поверхности Луны?',
        fact: 'Наблюдения Галилея вскоре открыли горы на Луне и спутники Юпитера.',
      },
      tajMumtaz: {
        prompt:
          'Какой мраморный мавзолей Шах-Джахан построил для Мумтаз-Махал?',
        fact: 'Мастера приезжали со всей Могольской империи, Центральной Азии и Ирана.',
      },
      isfahanSquare: {
        prompt:
          'В каком персидском городе расположена огромная площадь Накш-е Джахан?',
        fact: 'Мечети, дворец и базар обрамляют общественное пространство эпохи Сефевидов.',
      },
      versaillesLouis: {
        prompt: 'Какой дворец стал пышным двором Людовика XIV?',
        fact: 'Его регулярные сады повлияли на королевские резиденции всей Европы.',
      },
      newtonPrincipia: {
        prompt: 'Какой труд изложил законы движения и всемирного тяготения?',
        fact: 'Эдмонд Галлей помог издать книгу Ньютона.',
      },
      petersburgFounding: {
        prompt: 'Какой город Пётр I построил в дельте Невы?',
        fact: 'Каналы и каменные здания возникли на болотистой земле.',
      },
      declarationCongress: {
        prompt:
          'Какой документ Континентальный конгресс принял 4 июля 1776 года?',
        fact: 'Знаменитый пергаментный экземпляр в основном подписали в августе, после принятия.',
      },
      montgolfierBalloon: {
        prompt: 'Какое изобретение начало эпоху полётов в 1783 году?',
        fact: 'Братья Монгольфье впервые запустили воздушный шар в Анноне, Франция.',
      },
      bastille1789: {
        prompt: 'Какие потрясения начались, в частности, со штурма Бастилии?',
        fact: '14 июля 1789 года стало символической датой французской истории.',
      },
      wollstonecraftRights: {
        prompt:
          'Какая книга 1792 года отстаивала образование и равенство женщин?',
        fact: 'Мэри Уолстонкрафт стала важным голосом ранней феминистской мысли.',
      },
      jennerVaccine: {
        prompt:
          'Какой медицинский шаг начался с опыта Дженнера с коровьей оспой в 1796 году?',
        fact: 'Его метод открыл путь к вакцинации против натуральной оспы.',
      },
      zhengPorts: {
        prompt:
          'Какой адмирал в начале XV века достигал портов Индийского океана?',
        fact: 'Его флот совершил семь больших экспедиций между 1405 и 1433 годами.',
      },
      gutenbergType: {
        prompt:
          'Какая печатня могла повторно составлять страницы из отдельных металлических букв?',
        fact: 'Многоразовый шрифт ускорил изготовление одинаковых книг.',
      },
      istanbulBosphorus: {
        prompt:
          'Какой город контролировал водный путь между Чёрным и Средиземным морями?',
        fact: 'Босфор сделал город стратегическим мостом между регионами.',
      },
      tenochtitlanChinampas: {
        prompt:
          'Где земледельцы выращивали овощи на участках мелководного озера Тескоко?',
        fact: 'Чинампы помогали кормить большую островную столицу.',
      },
      fatehpurDecade: {
        prompt:
          'Какой спланированный город Моголов был столицей лишь около десяти лет?',
        fact: 'Акбар перенёс двор в 1580-х, оставив величественные сооружения.',
      },
      sistineGenesis: {
        prompt:
          'Где посетители могут увидеть над собой сцены Книги Бытия кисти Микеланджело?',
        fact: 'Потолок завершили примерно за четыре года.',
      },
      copernicusEarth: {
        prompt:
          'Какая книга поставила под сомнение мысль о неподвижной Земле в центре Вселенной?',
        fact: 'В её математической модели Земля движется вокруг Солнца вместе с другими планетами.',
      },
      suleymaniyeSinan: {
        prompt:
          'Какую стамбульскую мечеть архитектор Синан спроектировал для султана Сулеймана?',
        fact: 'Её купол и минареты до сих пор определяют облик Стамбула.',
      },
      globeAudience: {
        prompt:
          'В каком театре лондонцы стоя смотрели спектакль вокруг открытой сцены?',
        fact: 'Первое здание открыли в 1599 году; позднее оно сгорело.',
      },
      galileoJupiter: {
        prompt:
          'Телескоп какого астронома открыл четыре крупных спутника Юпитера?',
        fact: 'Спутники показали, что не всё на небе вращается вокруг Земли.',
      },
      tajYamuna: {
        prompt: 'Какой беломраморный памятник стоит у реки Ямуна в Агре?',
        fact: 'Сад и водные каналы создают тщательно выверенное пространство.',
      },
      isfahanPolo: {
        prompt:
          'В каком сефевидском городе площадь окружили дворцом, мечетями и базаром?',
        fact: 'На площади проходили церемонии, торговля и даже игра в поло.',
      },
      versaillesGardens: {
        prompt:
          'Какая королевская резиденция прославилась огромными регулярными садами?',
        fact: 'Поколения художников и садовников меняли Версаль.',
      },
      newtonHalley: {
        prompt:
          'Какая научная книга 1687 года вышла при помощи Эдмонда Галлея?',
        fact: 'Её три части изменили изучение движения и тяготения.',
      },
      petersburgNeva: {
        prompt: 'Какая новая столица возникла на болотах вокруг Невы?',
        fact: 'Пётр I основал город в 1703 году.',
      },
      declarationAugust: {
        prompt:
          'Какую декларацию 1776 года приняли в июле, а в основном подписали на пергаменте в августе?',
        fact: 'Печатные копии разнесли весть ещё до подписания известного пергамента.',
      },
      montgolfierAnnonay: {
        prompt:
          'Что поднялось над Анноне во Франции во время знаменитой демонстрации 1783 года?',
        fact: 'Первый публичный полёт был без людей; они полетели позже в том же году.',
      },
      bastilleJuly: {
        prompt:
          'Для какой революции падение Бастилии стало долговечным символом?',
        fact: 'Крепость пала 14 июля 1789 года во время более широкого политического кризиса.',
      },
      wollstonecraftEducation: {
        prompt:
          'Какая писательница в работе 1792 года отстаивала полноценное образование девочек?',
        fact: 'Уолстонкрафт доказывала, что образование определяет свободу и возможности женщин.',
      },
      jennerCowpox: {
        prompt:
          'Какой медицинский прорыв использовал коровью оспу для защиты от натуральной?',
        fact: 'Слово «вакцинация» происходит от латинского слова «корова».',
      },
      nobelFirst: {
        prompt:
          'Какие награды впервые вручили в 1901 году по завещанию Альфреда Нобеля?',
        fact: 'Первые пять премий отмечали науку, литературу, медицину и мир.',
      },
      einsteinPapers: {
        prompt:
          'Чьи статьи 1905 года изменили представления о свете, атомах и времени?',
        fact: 'В тот необыкновенный год Эйнштейн работал в патентном бюро Берна.',
      },
      fordModelT: {
        prompt: 'Какой автомобиль Форд представил в 1908 году?',
        fact: 'Позднее новые методы производства сделали Модель Т доступной многим покупателям.',
      },
      amundsenPole: {
        prompt: 'Чья экспедиция первой достигла Южного полюса в 1911 году?',
        fact: 'Руаль Амундсен с четырьмя спутниками опередил группу Роберта Скотта.',
      },
      titanicVoyage: {
        prompt:
          'Какой океанский лайнер затонул во время первого атлантического рейса в 1912 году?',
        fact: 'Катастрофа привела к серьёзным изменениям правил безопасности на море.',
      },
      panamaOpening: {
        prompt:
          'Какой водный путь открыли в 1914 году между Атлантическим и Тихим океанами?',
        fact: 'Пароход «Анкон» совершил торжественный проход 15 августа.',
      },
      russianRevolution: {
        prompt:
          'Какие события 1917 года свергли Романовых, а затем привели к власти большевиков?',
        fact: 'Февральская и Октябрьская революции были разными этапами перемен.',
      },
      fluPandemic: {
        prompt:
          'Какой мировой кризис здравоохранения распространился в последний год Первой мировой?',
        fact: 'По оценкам, заразилась треть населения мира.',
      },
      suffrageAmendment: {
        prompt:
          'Какая поправка запретила лишать граждан США голоса из-за пола?',
        fact: 'Ратификации предшествовали десятилетия борьбы, но дискриминационные преграды остались.',
      },
      tutTomb: {
        prompt:
          'Чью царскую гробницу в Египте Говард Картер открыл в 1922 году?',
        fact: 'Богатое погребение стало одним из самых известных археологических открытий.',
      },
      turkeyRepublic: {
        prompt: 'Какую республику провозгласили в Анкаре 29 октября 1923 года?',
        fact: 'Мустафа Кемаль стал первым президентом новой республики.',
      },
      lindberghAtlantic: {
        prompt:
          'Какой самолёт доставил Чарльза Линдберга в одиночку из Нью-Йорка в Париж?',
        fact: 'Беспосадочный полёт длился около 33 с половиной часов.',
      },
      stockCrash: {
        prompt:
          'Какое финансовое потрясение обрушило цены акций в Нью-Йорке в октябре 1929 года?',
        fact: 'Крах усугубил проблемы, но был лишь одной из причин Великой депрессии.',
      },
      gandhiSalt: {
        prompt:
          'Какой мирный протест прошёл к побережью Индии против колониального закона о соли?',
        fact: 'Поход Ганди от Сабармати до Данди длился около 24 дней.',
      },
      earhartSolo: {
        prompt:
          'Кто в 1932 году стал первой женщиной, самостоятельно перелетевшей Атлантику?',
        fact: 'Амелия Эрхарт на Lockheed Vega перелетела из Ньюфаундленда в Северную Ирландию.',
      },
      warOutbreak: {
        prompt:
          'Какая война началась в Европе после вторжения Германии в Польшу в сентябре 1939 года?',
        fact: 'Британия и Франция объявили войну Германии через два дня после вторжения.',
      },
      hubbleLaunch: {
        prompt:
          'Какой орбитальный телескоп развернули с шаттла Discovery в апреле 1990 года?',
        fact: 'Он наблюдает космос над большей частью искажающих слоёв атмосферы Земли.',
      },
      saElection: {
        prompt:
          'Какая страна провела первые демократические общенациональные выборы в апреле 1994 года?',
        fact: 'После голосования Нельсон Мандела стал президентом, завершив правление апартеида.',
      },
      pathfinderMars: {
        prompt: 'Какая миссия доставила маленький марсоход Sojourner на Марс?',
        fact: 'Аппарат сел 4 июля 1997 года и передал снимки на Землю.',
      },
      issModules: {
        prompt:
          'Какую космическую станцию начали собирать со стыковки модулей «Заря» и Unity?',
        fact: 'Два модуля соединила в декабре 1998 года команда шаттла Endeavour.',
      },
      monteAlbanHill: {
        prompt:
          'Какой город сапотеков стоял на выровненной вершине над Оахакой?',
        fact: 'С его площадей и храмов открывались виды на долины Оахаки.',
      },
      palenqueMaya: {
        prompt:
          'Какой город майя славится изящными храмами и рельефами среди джунглей?',
        fact: 'Искусство Паленке сохранило истории правителей и верований.',
      },
      tiwanakuGateway: {
        prompt:
          'Какой центр Анд у озера Титикака имеет монументальные Ворота Солнца?',
        fact: 'Его каменные сооружения сохранились на высоте почти 3850 метров.',
      },
      mesaCliffs: {
        prompt:
          'Какое сообщество предков пуэбло строило каменные жилища под скальными навесами?',
        fact: 'Некоторые скальные жилища Меса-Верде насчитывают более ста комнат.',
      },
      rapaMoai: {
        prompt:
          'На каком острове Тихого океана общины устанавливали гигантских каменных моаи?',
        fact: 'Многие статуи стояли на церемониальных платформах аху.',
      },
      cholaTemple: {
        prompt: 'Какой высокий храм Чола построили в Танджавуре на юге Индии?',
        fact: 'Храмы Чола показывают выдающуюся резьбу по камню и бронзовое литьё.',
      },
      mapungubweGold: {
        prompt:
          'Какое королевство юга Африки торговало золотом и слоновой костью через пути Индийского океана?',
        fact: 'Его центр на холме вырос у рек Лимпопо и Шаше.',
      },
      hararWalls: {
        prompt: 'Какой исторический город Эфиопии окружает стена Джуголь?',
        fact: 'Ворота Харара выходили на пути людей, товаров и идей.',
      },
      ussrDissolution: {
        prompt:
          'Какое государство прекратило существование в декабре 1991 года, когда его республики стали независимыми?',
        fact: 'Его распад изменил политическую карту Евразии.',
      },
      beijingWomen: {
        prompt:
          'Какое собрание ООН 1995 года приняло мировую платформу прав женщин?',
        fact: 'Делегаты собрались в Пекине, чтобы согласовать цели равенства и возможностей.',
      },
      dollyClone: {
        prompt:
          'Какое достижение 1996 года показало, что взрослую клетку можно использовать для клонирования млекопитающего?',
        fact: 'Долли родилась в шотландском Институте Рослин в июле 1996 года.',
      },
      monteAlbanPlaza: {
        prompt:
          'Где сапотекские строители выровняли вершину горы для большой церемониальной площади?',
        fact: 'Монте-Альбан стал крупным центром долины Оахаки.',
      },
      palenqueReliefs: {
        prompt:
          'Какой город майя оставил изящные каменные рельефы правителей и мифов?',
        fact: 'Его искусство особенно расцвело между VI и VIII веками.',
      },
      tiwanakuAltiplano: {
        prompt:
          'Какой доинкский город расцвёл высоко на Альтиплано у Титикаки?',
        fact: 'Тиуанако влиял на обширную часть южных Анд.',
      },
      mesaManyRooms: {
        prompt:
          'На каком памятнике некоторые скальные жилища насчитывают более ста комнат?',
        fact: 'Общины предков пуэбло веками жили на плато Меса-Верде.',
      },
      rapaAhu: {
        prompt: 'Где моаи ставили на каменных церемониальных платформах аху?',
        fact: 'Статуи — часть более широкого археологического ландшафта острова.',
      },
      cholaBronzes: {
        prompt:
          'Какая династия Южной Индии возводила величественные храмы и мастерски отливала бронзу?',
        fact: 'Храм Брихадишвара в Танджавуре — выдающийся памятник архитектуры Чола.',
      },
      mapungubweRivers: {
        prompt: 'Центр какого королевства возник у слияния рек Лимпопо и Шаше?',
        fact: 'Торговля связывала Мапунгубве с портами Восточной Африки и дальними землями.',
      },
      hararGates: {
        prompt:
          'Какой окружённый стеной город Эфиопии имеет старинные ворота и множество мечетей?',
        fact: 'В Хараре веками складывалась самобытная городская и религиозная культура.',
      },
    },
  },
} as const;
