import { getDocumentContent } from '@/lib/doc';

export default async function ContentDisplay({ id }) {
  const { title, contentHtml } = await getDocumentContent(id);
  console.log(contentHtml);

  return (
    <>
      <h1>{title}</h1>

      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </>
  );
}
