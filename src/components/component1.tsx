import { getHelloWorld } from '@/utils/app-fetch';

// Static Rendering
export default async function Component1() {
  getHelloWorld();
  console.log('Component1');
  return <div>Component1</div>;
}
