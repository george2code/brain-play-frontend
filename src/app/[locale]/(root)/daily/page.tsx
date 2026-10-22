import { metadataForPath } from '@/utils/seo.utils';

import Daily from './Daily';

export const generateMetadata = metadataForPath('/daily');
export default function Page() {
  return <Daily />;
}
