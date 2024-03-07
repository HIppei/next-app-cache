import { getRandomNumForDataCache } from '@/utils/app-fetch';

export async function GET() {
  console.log('Time-based revalidation 1');
  await getRandomNumForDataCache({ revalidate: 5 });

  // This will hit cache
  await new Promise<void>((resolve) =>
    setTimeout(async () => {
      console.log('Time-based revalidation 2');
      await getRandomNumForDataCache();
      resolve();
    }, 2000)
  );

  // This will hit stale cache
  await new Promise<void>((resolve) =>
    setTimeout(async () => {
      console.log('Time-based revalidation 3');

      // This request torrigers revalidation so it includes the revalidate option
      await getRandomNumForDataCache({ revalidate: 5 });
      resolve();
    }, 5000)
  );

  // This will hit cache revalidated by the above request
  await new Promise<void>((resolve) =>
    setTimeout(async () => {
      console.log('Time-based revalidation 4');
      await getRandomNumForDataCache();
      resolve();
    }, 1000)
  );

  return new Response('Time-based revalidation', { status: 200 });
}
