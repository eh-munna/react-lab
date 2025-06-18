import ContentDisplay from '@/app/components/ContentDisplay';

export default function SubContent({ params: { subContentId } }) {
  return (
    <>
      <ContentDisplay id={subContentId} />
    </>
  );
}
