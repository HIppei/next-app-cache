import { getRandomNumberWithNoDataCache } from '@/utils/app-fetch';
import { cookies } from 'next/headers';

// Dynamic Rendaring
export default async function Component4() {
  // Dynamic Functions
  cookies();

  getRandomNumberWithNoDataCache();
  console.log('Component4');
  return <div>Component4</div>;
}
