import { getRandomNumberWithNoDataCache } from '@/utils/app-fetch';

// Static Rendering
export default async function Component1() {
  getRandomNumberWithNoDataCache();
  console.log('Component1');
  return <div>Component1</div>;
}
