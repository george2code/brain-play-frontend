import type { Metadata } from 'next';

import { faqCopy } from '@/i18n/dictionaries';

import Faq from './Faq';

export const metadata: Metadata = {
  title: faqCopy.en.title,
  description: faqCopy.en.description,
};

export default function Page() {
  return <Faq />;
}
