import * as React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ ...props }) => {
  const { children, level, classes } = props;

  switch (level) {
    case 'h2':
      return (
        <h2
          className={`inline-block my-8 text-3xl font-bold border-yellow-400 border-b-sm${
            classes ? ` ${classes}` : ''
          }`}
        >
          {children}
        </h2>
      );
      break;
    default:
      return (
        <h2 className="inline-block mt-8 mb-4 text-3xl font-bold border-yellow-400 border-b-sm">
          {children}
        </h2>
      );
      break;
  }
};

Heading.propTypes = {
  level: PropTypes.string.isRequired,
  classes: PropTypes.string
};
Heading.defaultProps = {
  classes: ''
};

export default Heading;
