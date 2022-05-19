import type { LabelProps } from 'types';

function Label({ children, className, name }: LabelProps) {
  return (
    <label htmlFor={name} className={className ?? ''}>
      {children}
    </label>
  );
}

export default Label;
