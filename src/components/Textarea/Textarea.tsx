import type { TextareaProps } from 'types';

function Textarea({
  name,
  cols,
  rows,
  value,
  className,
  required,
  disabled,
  placeholder,
  onChange,
  onFocus,
  onBlur,
}: TextareaProps) {
  return (
    <textarea
      name={name}
      id={name}
      cols={cols}
      rows={rows}
      value={value}
      className={className ?? ''}
      required={required}
      disabled={disabled}
      placeholder={placeholder}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
}

export default Textarea;
