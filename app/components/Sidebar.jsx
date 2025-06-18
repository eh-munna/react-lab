import Link from 'next/link';

export default function Sidebar({ docs }) {
  return (
    <>
      <div className="h-screen w-64 p-4">
        <ul className="space-y-2 ">
          {docs.map((doc) => (
            <li key={doc.id}>
              <Link
                href={`/docs/${doc.id}`}
                className="text-blue-500 hover:underline"
              >
                <span>{doc.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
