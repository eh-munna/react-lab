export default function Report({ isSent }) {
  return (
    <>
      <p className="underline font-bold mb-4 text-xl">
        {!isSent ? (
          <i>
            After pressing Send button React will re-render the component as
            state will be changed, and form will be disappeared in the next
            render
          </i>
        ) : null}
      </p>
      <h1
        className={`${
          isSent ? 'text-green-500' : 'text-sky-500'
        } font-bold text-xl mb-4`}
      >
        {isSent
          ? 'Message delivered successfully!'
          : 'Message is getting ready!'}
      </h1>
    </>
  );
}
