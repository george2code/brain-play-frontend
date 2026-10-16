import type { Metadata } from 'next';

import Daily from './Daily';

export const metadata: Metadata = { title: 'Daily Challenge' };
export default function Page() {
  return <Daily />;
}
