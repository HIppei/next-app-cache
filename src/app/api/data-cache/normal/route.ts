import { getRandomNumberWithNoRequestMemoization } from '@/utils/app-fetch';

export async function GET() {
  for (let index = 1; index < 4; index++) {
    console.log(`Normal ${index}`);
    await getRandomNumberWithNoRequestMemoization();
  }
  return new Response('', { status: 200 });
}
