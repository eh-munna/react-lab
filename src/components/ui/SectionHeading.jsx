/* eslint-disable react/prop-types */
export const SectionHeading = ({ children }) => {
  return (
    <>
      <h2 className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500 dark:from-red-400 dark:via-orange-500 dark:to-purple-500  drop-shadow-md mb-3">
        {children}
      </h2>
    </>
  );
};
