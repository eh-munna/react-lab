export default function Intro() {
  return (
    <>
      <div className="max-w-5xl space-y-6 mt-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-500 dark:from-red-400 dark:via-orange-500 to-purple-500 drop-shadow-md">
          Referencing Values with Refs
        </h1>
        <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
          When you want a component to “remember” some information, but you
          don’t want that information to trigger new renders, you can use a ref.
        </p>

        <a
          className="underline italic text-blue-700 dark:text-indigo-500"
          href="https://react.dev/learn/referencing-values-with-refs#adding-a-ref-to-your-component"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </div>
    </>
  );
}
