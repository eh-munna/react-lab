import { photos } from '@/app/gallery/page';
import Modal from '@/components/Modal';

export default function Photo({ params: { id } }) {
  const photo = photos.find((photo) => photo.id === parseInt(id));

  return (
    <>
      <Modal>
        <h2>{photo.id}</h2>
      </Modal>
    </>
  );
}
