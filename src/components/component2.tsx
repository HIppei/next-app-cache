import { getRandomNumber } from '@/utils/app-fetch';
import Component4 from './component4';

// Static Rendaring
export default async function Component2() {
  getRandomNumber();
  console.log('Component2');
  return (
    <div>
      <div>Component2</div>
      <Component4 />
    </div>
  );
}
