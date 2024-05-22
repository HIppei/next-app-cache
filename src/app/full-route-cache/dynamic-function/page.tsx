import { cookies } from 'next/headers';

export default async function DynamicFunction() {
  cookies();
  return <div />;
}
