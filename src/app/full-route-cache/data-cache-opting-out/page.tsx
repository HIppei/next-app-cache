import { getRandomNumberWithNoDataCache } from '@/utils/app-fetch';

export default async function DataCacheOptingOut() {
  await getRandomNumberWithNoDataCache();
  return <div />;
}
