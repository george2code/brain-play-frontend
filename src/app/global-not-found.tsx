import '@fontsource-variable/dm-sans';
import Link from 'next/link';

import { dictionaries } from '@/i18n/dictionaries';

import './globals.css';

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <main className="page-container flex min-h-[75vh] flex-col items-center justify-center gap-6 text-center">
          <p className="eyebrow">404</p>
          <h1 className="section-title">{dictionaries.en.notFound}</h1>
          <Link href="/en" className="action-link">
            {dictionaries.en.home}
          </Link>
        </main>
      </body>
    </html>
  );
}
