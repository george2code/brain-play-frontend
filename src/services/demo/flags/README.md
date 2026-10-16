# Flag Master catalog

`flags.json` contains 195 country records: 193 UN member states plus the Holy See and Palestine. Each record has an ISO 3166-1 alpha-2 code, country names in English, Russian and Ukrainian, two localized historical facts, and a source URL. The first fact appears before the answer; the second appears after it. The JSON is bundled with the frontend so translations never require a runtime translation service.

The historical notes were adapted from [niemela/flags](https://github.com/niemela/flags), licensed [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). This adapted catalog is shared under the same license. Individual source URLs are retained in every record and linked from the game. Country names and the initial selection of country codes use [world-countries](https://github.com/mledoze/countries), licensed ODbL 1.0.

The 195 static SVGs in `public/flags/` come primarily from [flag-icons](https://github.com/lipis/flag-icons) under its MIT license, copied to `public/flags/LICENSE`. `af.svg` comes from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Flag_of_Afghanistan.svg) and is public domain; the older `flag-icons` asset showed the black-red-green republican flag while this catalog describes the white flag used de facto since 2021.

`scripts/build-flag-catalog.mjs` and `scripts/translate-flag-catalog.mjs` document the data preparation. `scripts/curate-flag-catalog.mjs` contains hand-edited corrections to incomplete source sentences and awkward translations. After regenerating, run the curation script and the catalog tests. Historical details should receive editorial review when the content version changes.
