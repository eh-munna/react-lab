export function Profile({ imgUrl, personName, imgAlt }) {
  return (
    <>
      <div className="w-96 h-96 p-2">
        <img
          className="rounded-md w-full h-full object-cover shadow-lg"
          src={imgUrl}
          alt={imgAlt}
        />
        <h1 className="py-2 font-bold text-xl">{personName}</h1>
      </div>
    </>
  );
}

export default function Gallery() {
  return (
    <>
      <h1 className="text-2xl my-2 font-bold text-center">
        Gallery of Scientists
      </h1>
      <div className="grid grid-cols-3 gap-4">
        <Profile
          imgUrl={'https://i.imgur.com/MK3eW3Am.jpg'}
          personName={'Katherine Johnson'}
          imgAlt={'Katherine Johnson'}
        />
        <Profile
          imgUrl={'https://i.imgur.com/QIrZWGIs.jpg'}
          personName={'Alan L. Hart'}
          imgAlt={'Alan L. Hart'}
        />
        <Profile
          imgUrl={'https://i.imgur.com/7vQD0fPs.jpg'}
          personName={'Gregorio Y. Zara'}
          imgAlt={'Gregorio Y. Zara'}
        />
      </div>
    </>
  );
}
