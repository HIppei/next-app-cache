import Component1 from '@/components/request-memoization/component1';
import Component2 from '@/components/request-memoization/component2';
import Component3 from '@/components/request-memoization/component3';

// Static Rendering
export default function Home() {
  console.log('Home');
  return (
    <div>
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
  );
}
