'use client';

import { ArrowRight, CircleHelp } from 'lucide-react';
import Link from 'next/link';

import { ROUTES } from '@/config/routes.config';

import { GAMES } from '@/constants/games.constants';

import { useLocale } from '@/i18n/LocaleProvider';
import { faqCopy } from '@/i18n/dictionaries';

export default function Faq() {
  const { locale, t } = useLocale();
  const copy = faqCopy[locale];
  const sections = [
    ...GAMES.map((game) => ({
      id: game.code,
      title: game.title,
      items: copy.games[game.code],
      href: ROUTES.game(game.code),
    })),
    {
      id: 'general',
      title: copy.generalTitle,
      items: copy.general,
      href: null,
    },
  ];

  return (
    <div className="page-container py-10 sm:py-14">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <CircleHelp
            className="mb-5 text-primary"
            size={32}
            aria-hidden="true"
          />
          <p className="eyebrow mb-3 text-primary">{t.faq}</p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {copy.title}
          </h1>
          <p className="mt-4 leading-7 text-muted-foreground">
            {copy.description}
          </p>
        </header>
        <nav aria-label={copy.navigation} className="mb-9 flex flex-wrap gap-2">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="quiet-link">
              {section.title}
            </a>
          ))}
        </nav>
        <div className="space-y-6">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-title`}
              className="surface-card scroll-mt-6 p-6 sm:p-8"
            >
              <h2 id={`${section.id}-title`} className="section-title">
                {section.title}
              </h2>
              <div className="mt-5 divide-y divide-border">
                {section.items.map((item) => (
                  <div
                    key={item.question}
                    className="py-5 first:pt-0 last:pb-0"
                  >
                    <h3 className="text-base font-semibold leading-7">
                      {item.question}
                    </h3>
                    <p className="mt-2 leading-7 text-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
              {section.href && (
                <Link
                  href={section.href}
                  className="action-link mt-6"
                  aria-label={`${t.play} · ${section.title}`}
                >
                  {t.play}
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
