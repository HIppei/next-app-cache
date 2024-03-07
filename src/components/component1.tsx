import { getRandomNumber } from '@/utils/app-fetch';

// Static Rendering
export default async function Component1() {
  getRandomNumber();
  console.log('Component1');
  return <div>Component1</div>;
}
