import { getDocumentContent } from '@/lib/doc';

export default async function ContentDisplay({ id }) {
  const { title, contentHtml, author } = await getDocumentContent(id);

  return (
    <>
      <h1>{title}</h1>

      <p>Author: {author}</p>

      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </>
  );
}
