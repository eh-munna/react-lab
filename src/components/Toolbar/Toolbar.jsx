import Button from '../Button/Button';

export default function Toolbar() {
  return (
    <>
      <h2 className="text-2xl text-sky-800">Event propagation</h2>
      <div className="flex gap-3" onClick={() => alert('Movie is stopped!')}>
        <Button alertMessage={'Movie is playing'}>Play</Button>
        <Button alertMessage={'Movie is paused'}>Pause</Button>
      </div>
    </>
  );
}
