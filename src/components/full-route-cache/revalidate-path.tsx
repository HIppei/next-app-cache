'use client';

import { revalidatePath } from 'next/cache';

export default function RevalidatePath() {
  const onClick = async () => {
    await fetch('/api/full-route-cache/revalidate-path');
  };
  return <button onClick={onClick}>Revalidate</button>;
}
