export async function GET() {
  console.log('Opt-out data cache 1');
  await optOut();

  console.log('Opt-out data cache 2');
  await optOut();

  console.log('Opt-out data cache 3');
  await optOut();

  return new Response('', { status: 200 });
}

const optOut = async () => {
  const res = await fetch('http://localhost:3005', { cache: 'no-store' });
  console.log(await res.text());
};
