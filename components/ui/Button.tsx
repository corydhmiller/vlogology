import * as React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/modules/buttons.module.scss';

const Button = ({ ...props }) => {
  const { children, color = 'yellow', onClick, onKeyUp } = props;

  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
    return false;
  };
  const handleKeyUp = () => {
    if (onKeyUp) {
      return onKeyUp();
    }
    return false;
  };

  // Handle button colors
  let buttonColor;

  switch (color) {
    case 'yellow':
      buttonColor = styles.yellow;
      break;
    default:
      buttonColor = styles.yellow;
      break;
  }
  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyUp={handleKeyUp}
      className={`${buttonColor} ${styles.button} text-center rounded-full py-2 px-4 text-base font-bold relative transition-all duration-200 ease-in-out`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onKeyUp: PropTypes.func
};

Button.defaultProps = {
  color: 'yellow',
  onClick: () => false,
  onKeyUp: () => false
};

export default Button;
