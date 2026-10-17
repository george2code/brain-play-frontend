import fs from 'node:fs';

import { flagFactEditorial } from './flag-fact-editorial.mjs';

const file = 'src/services/demo/flags/flags.json';
const catalog = JSON.parse(fs.readFileSync(file, 'utf8'));
const changes = {
  AF: {
    factBefore: {
      en: 'This design first appeared in 1997 and returned to use in 2021.',
      ru: 'Этот вариант впервые появился в 1997 году и вновь стал использоваться в 2021-м.',
      uk: 'Цей варіант уперше з’явився 1997 року й знову почав використовуватися 2021-го.',
    },
    factAfter: {
      en: 'The white banner bears the shahada in black calligraphy. It became the de facto national flag again after the Taliban took Kabul in August 2021.',
      ru: 'На белом полотнище чёрной каллиграфией написана шахада. После захвата Кабула талибами в августе 2021 года оно вновь стало фактическим государственным флагом.',
      uk: 'На білому полотнищі чорною каліграфією написано шахаду. Після захоплення Кабула талібами в серпні 2021 року воно знову стало фактичним державним прапором.',
    },
  },
  BR: {
    factAfter: {
      en: 'The number of stars changed five times as new states were created. The current 27-star arrangement was set in 1992.',
      ru: 'Число звёзд менялось пять раз по мере образования новых штатов. Нынешние 27 звёзд утвердили в 1992 году.',
      uk: 'Кількість зірок змінювали п’ять разів із появою нових штатів. Нинішні 27 зірок затвердили 1992 року.',
    },
  },
  CD: {
    name: {
      en: 'DR Congo',
      ru: 'Демократическая Республика Конго',
      uk: 'Демократична Республіка Конго',
    },
  },
  CG: {
    name: {
      en: 'Republic of the Congo',
      ru: 'Республика Конго',
      uk: 'Республіка Конго',
    },
  },
  BY: {
    factAfter: {
      en: 'The 1995 design drew on the flag of the Byelorussian SSR, but removed its hammer, sickle and red star. Its traditional ornament was revised again in 2012.',
      ru: 'Образцом для варианта 1995 года стал флаг Белорусской ССР, но без серпа, молота и красной звезды. Традиционный орнамент вновь изменили в 2012 году.',
      uk: 'За основу варіанта 1995 року взяли прапор Білоруської РСР, але без серпа, молота й червоної зірки. Традиційний орнамент знову змінили 2012 року.',
    },
  },
  CA: {
    factAfter: {
      en: 'The single-leaf design won out after a long national debate over replacing the Canadian Red Ensign. It first flew officially in 1965.',
      ru: 'Дизайн с одним кленовым листом выбрали после долгих споров о замене Канадского красного флага. Официально его впервые подняли в 1965 году.',
      uk: 'Дизайн з одним кленовим листком обрали після тривалих суперечок щодо заміни Канадського червоного прапора. Офіційно його вперше підняли 1965 року.',
    },
  },
  CL: {
    factAfter: {
      en: 'The canton-and-stripes layout was inspired by the United States flag, but uses just one white star and two broad stripes.',
      ru: 'Расположение звезды и полос вдохновлено флагом США, но здесь лишь одна белая звезда и две широкие полосы.',
      uk: 'Розташування зірки й смуг натхненне прапором США, але тут лише одна біла зірка та дві широкі смуги.',
    },
  },
  CU: {
    factAfter: {
      en: 'Designed in New York in 1849, the flag was first raised on Cuban soil during Narciso López’s expedition in May 1850.',
      ru: 'Флаг создали в Нью-Йорке в 1849 году, а на кубинской земле впервые подняли во время экспедиции Нарсисо Лопеса в мае 1850-го.',
      uk: 'Прапор створили в Нью-Йорку 1849 року, а на кубинській землі вперше підняли під час експедиції Нарсісо Лопеса в травні 1850-го.',
    },
  },
  GE: {
    factAfter: {
      en: 'The five-cross design has medieval roots and appears on European maps from the 14th century. It returned as the national flag in 2004.',
      ru: 'Узор из пяти крестов восходит к Средневековью и встречается на европейских картах XIV века. Государственным флагом он вновь стал в 2004 году.',
      uk: 'Візерунок із п’яти хрестів походить із Середньовіччя й трапляється на європейських картах XIV століття. Державним прапором він знову став 2004 року.',
    },
  },
  HN: {
    factAfter: {
      en: 'The five stars recall the states of the former Central American federation. In 2022 the official blue was changed from cobalt to turquoise.',
      ru: 'Пять звёзд напоминают о государствах бывшей Центральноамериканской федерации. В 2022 году официальный синий оттенок сменили с кобальтового на бирюзовый.',
      uk: 'П’ять зірок нагадують про держави колишньої Центральноамериканської федерації. У 2022 році офіційний синій відтінок змінили з кобальтового на бірюзовий.',
    },
  },
  JP: {
    factBefore: {
      en: 'The flag’s official status was written into law only in 1999.',
      ru: 'Официальный статус этого флага закрепили законом лишь в 1999 году.',
      uk: 'Офіційний статус цього прапора закріпили законом лише 1999 року.',
    },
    factAfter: {
      en: 'The sun disc had been used as an imperial and military emblem since at least the 7th century, long before that law.',
      ru: 'Солнечный диск использовали как императорский и военный символ по меньшей мере с VII века — задолго до этого закона.',
      uk: 'Сонячний диск використовували як імператорський і військовий символ щонайменше з VII століття — задовго до цього закону.',
    },
  },
  KH: {
    factAfter: {
      en: 'The building at the centre is Angkor Wat, the 12th-century temple complex. This version returned when the monarchy was restored in 1993.',
      ru: 'В центре изображён Ангкор-Ват — храмовый комплекс XII века. Этот вариант вернулся после восстановления монархии в 1993 году.',
      uk: 'У центрі зображено Ангкор-Ват — храмовий комплекс XII століття. Цей варіант повернувся після відновлення монархії 1993 року.',
    },
  },
  LC: {
    factAfter: {
      en: 'The design was created by local artist Dunstan St Omer in 1967 and stayed in use after independence, with small adjustments to the blue and triangles.',
      ru: 'Дизайн создал местный художник Данстан Сент-Омер в 1967 году. После независимости флаг сохранили, лишь слегка изменив оттенок синего и пропорции треугольников.',
      uk: 'Дизайн створив місцевий художник Данстан Сент-Омер 1967 року. Після незалежності прапор зберегли, лише трохи змінивши відтінок синього й пропорції трикутників.',
    },
  },
  LR: {
    factAfter: {
      en: 'A committee of seven women designed the flag in 1847. Its eleven stripes stand for the signatories of the declaration of independence.',
      ru: 'Флаг создал комитет из семи женщин в 1847 году. Одиннадцать полос обозначают подписантов декларации независимости.',
      uk: 'Прапор створив комітет із семи жінок 1847 року. Одинадцять смуг позначають підписантів декларації незалежності.',
    },
  },
  MD: {
    factAfter: {
      en: 'Until 2010 the reverse was officially blank, making this one of the rare national flags with different front and back sides.',
      ru: 'До 2010 года обратная сторона официально оставалась пустой: это был один из редких государственных флагов с разными лицевой и оборотной сторонами.',
      uk: 'До 2010 року зворотний бік офіційно залишався порожнім: це був один із небагатьох державних прапорів із різними лицевим і зворотним боками.',
    },
  },
  NE: {
    factAfter: {
      en: 'Its official 6:7 proportions make it almost square, although the flag is often produced in more familiar rectangular ratios.',
      ru: 'Его официальные пропорции 6:7 делают полотнище почти квадратным, хотя на практике часто используют более привычные прямоугольные варианты.',
      uk: 'Офіційні пропорції 6:7 роблять полотнище майже квадратним, хоча на практиці часто використовують звичніші прямокутні варіанти.',
    },
  },
  NO: {
    factAfter: {
      en: 'For decades a union mark with Sweden appeared in the corner. The plain cross flag became the sole national flag after the union ended in 1905.',
      ru: 'Десятилетиями в углу был знак унии со Швецией. После распада унии в 1905 году национальным флагом остался вариант с одним крестом.',
      uk: 'Десятиліттями в куті був знак унії зі Швецією. Після розпаду унії 1905 року національним прапором залишився варіант з одним хрестом.',
    },
  },
  PW: {
    factAfter: {
      en: 'John Blau Skebong’s design won a national competition for a new flag.',
      ru: 'Дизайн Джона Блау Скебонга победил в общенациональном конкурсе на новый флаг.',
      uk: 'Дизайн Джона Блау Скебонга переміг у загальнонаціональному конкурсі на новий прапор.',
    },
  },
  PS: {
    name: {
      en: 'Palestine',
      ru: 'Палестина',
      uk: 'Палестина',
    },
  },
  RS: {
    factAfter: {
      en: 'The red-blue-white tricolour has been a Serbian symbol since the 19th century. The current version restored the lesser coat of arms in 2010.',
      ru: 'Красно-сине-белый триколор служит сербским символом с XIX века. В нынешнем варианте 2010 года вернули малый герб.',
      uk: 'Червоно-синьо-білий триколор є сербським символом із XIX століття. У нинішньому варіанті 2010 року повернули малий герб.',
    },
  },
  UY: {
    factAfter: {
      en: 'Its stripes were inspired by the United States flag, while the Sun of May and blue-and-white colours came from the Río de la Plata region.',
      ru: 'Полосы навеяны флагом США, а Майское солнце и бело-голубые цвета пришли из символики региона Рио-де-ла-Плата.',
      uk: 'Смуги навіяні прапором США, а Травневе сонце та біло-блакитні кольори походять із символіки регіону Ріо-де-ла-Плата.',
    },
  },
};

for (const flag of catalog) {
  if (changes[flag.code]) Object.assign(flag, changes[flag.code]);
}
const facts = JSON.parse(
  fs.readFileSync('scripts/flag-fact-overrides.json', 'utf8'),
);
const englishFacts = JSON.parse(
  fs.readFileSync('scripts/flag-fact-overrides.en.json', 'utf8'),
);
for (const flag of catalog) {
  const before = facts.before[flag.code];
  if (!before) throw new Error(`Missing pre-answer fact for ${flag.code}`);
  flag.factBefore = {
    ...before,
    ...flagFactEditorial.before[flag.code],
    en: englishFacts.before[flag.code],
  };
  flag.factAfter = {
    ...flag.factAfter,
    ...facts.after[flag.code],
    ...flagFactEditorial.after[flag.code],
    ...(englishFacts.after[flag.code]
      ? { en: englishFacts.after[flag.code] }
      : {}),
  };
  for (const [stage, localized] of [
    ['before', flag.factBefore],
    ['after', flag.factAfter],
  ]) {
    for (const locale of ['en', 'ru', 'uk']) {
      if (!localized[locale]?.trim()) {
        throw new Error(`Missing ${stage} ${locale} fact for ${flag.code}`);
      }
    }
  }
}
fs.writeFileSync(file, JSON.stringify(catalog, null, 2) + '\n');
console.log(`Curated ${catalog.length} flag records`);
