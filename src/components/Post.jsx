import Heading from './Heading';
import Section from './Section';

import PropTypes from 'prop-types';

export default function Post({ title, body }) {
  return (
    <Section isFancy={true}>
      <div className="border border-red-300 rounded-lg border-dashed p-3 space-y-3">
        <Heading>{title}</Heading>
        <p>
          <i>{body}</i>
        </p>
      </div>
    </Section>
  );
}

// Props Validation

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
