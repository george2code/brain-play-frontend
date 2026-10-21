import '@fontsource-variable/dm-sans';
import type { Metadata } from 'next';

import Providers from '@/app/providers';

import { brand } from '@/i18n/dictionaries';

import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'QuizRoam — A little play. A sharper mind.',
    template: '%s · QuizRoam',
  },
  description:
    'Four little worlds for curious minds. Discover geography, logic, history and flags with QuizRoam.',
  applicationName: brand.name,
  robots: { index: false, follow: false },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
