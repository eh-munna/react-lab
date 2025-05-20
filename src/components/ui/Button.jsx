/* eslint-disable react/prop-types */

export const Button = ({ onClick, className, children, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-indigo-500 hover:bg-indigo-700 cursor-pointer px-2 py-1 rounded-md text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
