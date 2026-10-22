import { metadataForPath } from '@/utils/seo.utils';

import Faq from './Faq';

export const generateMetadata = metadataForPath('/faq');
export default function Page() {
  return <Faq />;
}
