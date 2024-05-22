import { revalidatePath } from 'next/cache';

export async function GET() {
  revalidatePath('/full-route-cache/data-cache-revalidating');
  return new Response('', { status: 200 });
}
