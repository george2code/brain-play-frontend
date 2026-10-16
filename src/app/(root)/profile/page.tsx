import type { Metadata } from 'next';

import Profile from './Profile';

export const metadata: Metadata = { title: 'Your profile' };
export default function Page() {
  return <Profile />;
}
