import { getRandomNum } from '@/utils/app-fetch';

export default async function Home() {
  const val = await getRandomNum();
  console.log('Full Route Cache', val);
  return <div>{val}</div>;
}
