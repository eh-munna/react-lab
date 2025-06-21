import Card from '@/components/Card';

export const photos = Array.from({ length: 7 }, (_, i) => ({ id: i + 1 }));
export default function Gallery() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center">
        {photos.map((photo) => (
          <Card key={photo.id} id={photo.id}>
            {photo.id}
          </Card>
        ))}
      </div>
    </>
  );
}
