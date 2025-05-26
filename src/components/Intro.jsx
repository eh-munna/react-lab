/* eslint-disable react/prop-types */
function Heading({ children }) {
  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-500 dark:from-red-400 dark:via-orange-500 to-purple-500 drop-shadow-md">
      {children}
    </h1>
  );
}

function Paragraph({ children }) {
  return (
    <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
      {children}
    </p>
  );
}

function Intro({ link, children }) {
  return (
    <>
      <div className="max-w-5xl space-y-6 mt-6">
        {children}

        <a
          className="underline italic text-blue-700 dark:text-indigo-500"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </div>
    </>
  );
}

export { Heading, Intro, Paragraph };
