import { getHelloWorld } from '@/utils/app-fetch';
import { cookies } from 'next/headers';

// Dynamic Rendaring
export default async function Component3() {
  // Dynamic Functions
  cookies();

  getHelloWorld();
  console.log('Component3');
  return <div>Component3</div>;
}
