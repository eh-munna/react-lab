function App() {
  return (
    <>
      <div className="flex flex-col space-y-4 w-1/2 gap-6 mx-auto justify-center items-center min-h-[75vh]">
        <h1 className="flex flex-col space-y-2 text-xl">
          <span>React provides a declarative way to manipulate the UI.</span>
          <span>
            Instead of manipulating individual pieces of the UI directly, you
            describe the different states that your component can be in, and
            switch between them in response to the user input.
          </span>
          <span>This is similar to how designers think about the UI.</span>
        </h1>

        <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded self-start">
          <a
            href="https://react.dev/learn/reacting-to-input-with-state#how-declarative-ui-compares-to-imperative"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </button>
      </div>
    </>
  );
}

export default App;
