import { getDocuments } from '@/lib/doc';
import Link from 'next/link';

export default function Home() {
  

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Documentation</h1>
        <p className="mb-4">
          Welcome to the documentation page. Here you can find various resources
          and guides.
        </p>
        <ul className="list-disc pl-5">
          <li>
            <Link
              href="/docs/getting-started"
              className="text-blue-500 hover:underline"
            >
              Getting Started
            </Link>
          </li>
          <li>
            <Link
              href="/docs/advanced-topics"
              className="text-blue-500 hover:underline"
            >
              Advanced Topics
            </Link>
          </li>
          <li>
            <Link
              href="/docs/api-reference"
              className="text-blue-500 hover:underline"
            >
              API Reference
            </Link>
          </li>
        </ul>
        <p className="mt-4">
          For more information, check out our{' '}
          <Link href="/docs" className="text-blue-500 hover:underline">
            full documentation
          </Link>
          .
        </p>
      </div>
    </>
  );
}
