import RevalidatePath from '@/components/full-route-cache/revalidate-path';
import { getRandomNum } from '@/utils/app-fetch';

export default async function DataCacheRevalidating() {
  const val = await getRandomNum();
  console.log('DataCacheRevalidating', val);
  return (
    <div>
      {val}
      <br />
      <RevalidatePath />
    </div>
  );
}
