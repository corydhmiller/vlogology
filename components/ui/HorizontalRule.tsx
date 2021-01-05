import * as React from 'react';
import PropTypes from 'prop-types';

const HR = ({ ...props }) => {
  const { color } = props;
  return (
    <>
      <hr className={`my-12 mx-auto w-1/2 max-w-sm border ${color}`} />
    </>
  );
};

HR.propTypes = {
  color: PropTypes.string
};
HR.defaultProps = {
  color: 'border-primary-600'
};

export default HR;
