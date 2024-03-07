import { getRandomNumForDataCache } from '@/utils/app-fetch';
import { revalidateTag } from 'next/cache';

export async function GET() {
  console.log('On-demand revalidation 1');
  await getRandomNumForDataCache({ tags: ['leech'] });

  console.log('On-demand revalidation 2');
  await getRandomNumForDataCache();

  revalidateTag('leech');

  console.log('On-demand revalidation 3');
  await getRandomNumForDataCache();

  return new Response('', { status: 200 });
}
