import Component1 from '@/components/component1';
import Component2 from '@/components/component2';
import Component3 from '@/components/component3';

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
