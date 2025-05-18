import PropTypes from 'prop-types';
import { useContext } from 'react';
import LevelProvider, { LevelContext } from '../contexts/LevelContext';
// export default function Section({ level, children }) {
export default function Section({ children }) {
  const level = useContext(LevelContext);
  return (
    <LevelProvider level={level + 1}>
      <section className="mt-6 border border-orange-300 p-2 space-y-3 rounded-md">
        {children}
      </section>
    </LevelProvider>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
