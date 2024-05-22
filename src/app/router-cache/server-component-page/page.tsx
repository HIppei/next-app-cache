import { getRandomNumberWithNoDataCache } from '@/utils/app-fetch';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import Link from 'next/link';

export default async function Page() {
  // Make this component dynamic
  cookies();

  const value = await getRandomNumberWithNoDataCache();

  return (
    <div>
      <h2>{value}</h2>
      <div>
        <Link className="border border-black bg-gray-300" href={'/router-cache/use-router'}>
          Back to Use Router Page
        </Link>
      </div>
      <div>
        <Link className="border border-black bg-gray-300" href={'/router-cache/next-link'}>
          Back to Next Link Page
        </Link>
      </div>
    </div>
  );
}
