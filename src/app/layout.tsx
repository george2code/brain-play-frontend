import '@fontsource-variable/dm-sans';
import type { Metadata } from 'next';

import Providers from '@/app/providers';

import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'BrainPlay — A little play. A sharper mind.',
    template: '%s · BrainPlay',
  },
  description:
    'Four little worlds for curious minds. Discover geography, logic, history and flags with BrainPlay.',
  applicationName: 'BrainPlay',
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
