// const { signal } = new AbortController()

export async function getHelloWorld() {
  const res = await fetch('http://localhost:3005', { cache: 'no-store' });
  console.log(await res.text());
}
