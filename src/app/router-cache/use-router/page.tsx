'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <div>
      This page is a client component implementing useRouter hook.
      <br />
      <button
        className="border border-black bg-gray-300"
        onClick={() => router.push('/router-cache/server-component-page')}
      >
        To Server Component Page
      </button>
      <br />
      <button className="border border-black bg-green-300" onClick={() => router.refresh()}>
        Refresh
      </button>
    </div>
  );
}
