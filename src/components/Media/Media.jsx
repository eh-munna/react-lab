import GenericButton from '../Button/GenericButton';

const handleOnUpload = () => {
  alert('File uploaded');
};

const handleOnDownload = () => {
  alert('File downloaded');
};

export default function Media() {
  return (
    <>
      <h2 className="text-2xl text-sky-800">Passing event handlers as props</h2>
      <div className="flex gap-3">
        <GenericButton onSmash={handleOnUpload} buttonMessage={'Upload File'} />
        <GenericButton
          onSmash={handleOnDownload}
          buttonMessage={'Download File'}
        />
      </div>
    </>
  );
}
