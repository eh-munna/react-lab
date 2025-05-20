/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

export const useTheme = () => {
  return useContext(ThemeContext);
};

function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  if (typeof document !== 'undefined') {
    document.body.classList.toggle('dark', darkMode);
  }

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider };
