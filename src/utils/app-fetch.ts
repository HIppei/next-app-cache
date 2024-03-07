export async function getRandomNumber() {
  // Opt-out data cache
  const res = await fetch('http://localhost:3005', { cache: 'no-store' });
  console.log(await res.text());
}

const { signal } = new AbortController();
export async function getRandomNumForDataCache(next?: NextFetchRequestConfig) {
  // Opt-out Request Memoization
  const res = await fetch('http://localhost:3005', { signal, next });
  console.log(await res.text());
}
