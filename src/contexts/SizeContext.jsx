/* eslint-disable react/prop-types */
import { createContext } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const SizeContext = createContext(null);

export default function SizeProvider({ value, children }) {
  return <SizeContext.Provider value={value}>{children}</SizeContext.Provider>;
}
