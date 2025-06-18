import Link from 'next/link';

export default function Sidebar({ docs }) {
  const roots = docs.filter((doc) => doc.parent === null);
  const nonRoots = Object.groupBy(
    docs.filter((doc) => doc.parent !== null),
    (doc) => doc.parent
  );

  return (
    <>
      <div className="h-screen w-64 p-4">
        <ul className="space-y-2 ">
          {roots.map((doc) => (
            <li key={doc.id}>
              <Link
                href={`/docs/${doc.id}`}
                className="text-blue-500 hover:underline"
              >
                <span>{doc.title}</span>
              </Link>

              {nonRoots[doc.id] && (
                <ul className="space-y-2 pl-4">
                  {nonRoots[doc.id].map((subDoc) => (
                    <li key={subDoc.id}>
                      <Link href={`/docs/${doc.id}/${subDoc.id}`}>
                        <span>{subDoc.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
