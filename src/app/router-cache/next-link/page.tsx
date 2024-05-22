import Link from 'next/link';

export default async function Page() {
  return (
    <div>
      This page is a server component implementing Link component.
      <br />
      <Link className="border border-black bg-gray-300" href={'/router-cache/server-component-page'}>
        To Server Component Page
      </Link>
    </div>
  );
}
