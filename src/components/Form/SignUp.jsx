const handleSignUp = (e) => {
  e.preventDefault();
  alert('Form submitted');
};

export default function SignUp() {
  return (
    <>
      <h2 className="text-2xl text-sky-800">Preventing default behavior</h2>
      <form className="flex flex-col space-y-4" onSubmit={handleSignUp}>
        <input
          className="w-1/3 border border-sky-500 text-black p-2"
          type="text"
        />
        <button className="w-1/3 border border-indigo-500 p-1 rounded-md bg-sky-950 text-white">
          Send
        </button>
      </form>
    </>
  );
}
