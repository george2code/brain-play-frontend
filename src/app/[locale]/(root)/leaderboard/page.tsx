import { metadataForPath } from '@/utils/seo.utils';

import Leaderboard from './Leaderboard';

export const generateMetadata = metadataForPath('/leaderboard');
export default function Page() {
  return <Leaderboard />;
}
