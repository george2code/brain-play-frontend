import { InfoPage } from '@/components/shared/InfoPage';

import { metadataForPath } from '@/utils/seo.utils';

export const generateMetadata = metadataForPath('/privacy');
export default function Page() {
  return <InfoPage kind="privacy" />;
}
