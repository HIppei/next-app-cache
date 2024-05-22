export async function getRandomNum() {
  const res = await fetch('http://localhost:3005');
  return await res.text();
}

// Opt-out data cache
export async function getRandomNumberWithNoDataCache() {
  const res = await fetch('http://localhost:3005', { cache: 'no-store' });
  console.log(await res.text());
}

// Opt-out Request Memoization
const { signal } = new AbortController();
export async function getRandomNumberWithNoRequestMemoization(next?: NextFetchRequestConfig) {
  const res = await fetch('http://localhost:3005', { signal, next });
  console.log(await res.text());
}
