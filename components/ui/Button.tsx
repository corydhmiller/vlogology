import * as React from 'react';
import styles from '../../styles/modules/buttons.module.scss';

type ButtonProps = {
  color: 'yellow';
  children: React.ReactChild;
};

const Button = ({ ...props }: ButtonProps) => {
  const { children, color = 'yellow' } = props;
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
      className={`${buttonColor} ${styles.button} text-center rounded-full py-2 px-4 text-base font-bold relative transition-all duration-200 ease-in-out`}
    >
      {children}
    </button>
  );
};

export default Button;
