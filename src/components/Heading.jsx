import PropTypes from 'prop-types';
import { useContext } from 'react';
import { LevelContext } from '../contexts/LevelContext';
export default function Heading({ children }) {
  const level = useContext(LevelContext);

  switch (level) {
    case 1:
      return <h1 className="text-3xl font-bold">{children}</h1>;
    case 2:
      return <h2 className="text-2xl font-bold">{children}</h2>;
    case 3:
      return <h3 className="text-xl font-bold">{children}</h3>;
    default:
      return <h1 className="text-3xl font-bold">{children}</h1>;
  }
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
};
