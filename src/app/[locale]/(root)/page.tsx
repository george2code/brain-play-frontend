import { metadataForPath } from '@/utils/seo.utils';

import Home from './Home';

export const generateMetadata = metadataForPath('/');
export default function Page() {
  return <Home />;
}
