import { metadataForPath } from '@/utils/seo.utils';

import Profile from './Profile';

export const generateMetadata = metadataForPath('/profile');
export default function Page() {
  return <Profile />;
}
