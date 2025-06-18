import ContentDisplay from '@/app/components/ContentDisplay';

export default function Content({ params: { contentId } }) {
  return (
    <>
      <ContentDisplay id={contentId} />
    </>
  );
}
