import { motion } from 'framer-motion';
import type { ButtonProps } from 'types';

function Button({
  theme = 'primary',
  size = 'small',
  type = 'button',
  className,
  disabled,
  onClick,
  children,
}: ButtonProps) {
  let buttonDefaultClass;
  if (theme === 'primary') {
    buttonDefaultClass = 'button-primary ';
  } else if (theme === 'secondary') {
    buttonDefaultClass = 'button-secondary ';
  } else if (theme === 'info') {
    buttonDefaultClass = 'button-info ';
  } else if (theme === 'success') {
    buttonDefaultClass = 'button-success ';
  } else if (theme === 'warning') {
    buttonDefaultClass = 'button-warning ';
  } else if (theme === 'danger') {
    buttonDefaultClass = 'button-danger ';
  }

  if (size === 'small') {
    buttonDefaultClass += 'button-small ';
  } else if (size === 'medium') {
    buttonDefaultClass += 'button-medium ';
  } else if (size === 'large') {
    buttonDefaultClass += 'button-large ';
  }

  return (
    <motion.button
      className={`${buttonDefaultClass} ${className}`}
      onClick={onClick}
      type={type}
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      data-mdb-ripple-unbound="true"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}

export default Button;
