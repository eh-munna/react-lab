import { createContext } from 'react';

import PropTypes from 'prop-types';

// eslint-disable-next-line react-refresh/only-export-components
export const LevelContext = createContext(0);

export default function LevelProvider({ level, children }) {
  return (
    <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
  );
}

LevelProvider.propTypes = {
  level: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};
