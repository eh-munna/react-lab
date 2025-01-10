import AlertButton from '../Button/AlertButton';

export default function Toolbar() {
  return (
    <>
      <h2 className="text-2xl text-sky-800">Reading props in event handlers</h2>
      <div className="flex gap-3">
        <AlertButton alertMessage={'Movie is playing'}>Play</AlertButton>
        <AlertButton alertMessage={'Movie is paused'}>Pause</AlertButton>
      </div>
    </>
  );
}
