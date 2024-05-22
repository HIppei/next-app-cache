import { getRandomNumberWithNoRequestMemoization } from '@/utils/app-fetch';
import { revalidateTag } from 'next/cache';

export async function GET() {
  console.log('On-demand revalidation 1');
  await getRandomNumberWithNoRequestMemoization({ tags: ['leech'] });

  console.log('On-demand revalidation 2');
  await getRandomNumberWithNoRequestMemoization();

  revalidateTag('leech');

  console.log('On-demand revalidation 3');
  await getRandomNumberWithNoRequestMemoization();

  return new Response('', { status: 200 });
}
