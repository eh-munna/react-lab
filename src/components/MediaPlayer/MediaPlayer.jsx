import MediaButton from '../Button/MediaButton';

export default function MediaPlayer() {
  return (
    <>
      <h2 className="text-2xl text-sky-800">Stopping propagation</h2>
      <div
        className="flex gap-3"
        onClick={() => alert('Movie is stopped!')}
      >
        <MediaButton alertMessage={'Movie is playing'}>Play</MediaButton>
        <MediaButton alertMessage={'Movie is paused'}>Pause</MediaButton>
      </div>
    </>
  );
}
