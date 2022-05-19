import type { TextareaProps } from 'types';

function Textarea({
  name,
  cols,
  rows,
  onChange,
  value,
  className,
  required,
  disabled,
  placeholder,
}: TextareaProps) {
  return (
    <textarea
      name={name}
      id={name}
      cols={cols}
      rows={rows}
      onChange={onChange}
      value={value}
      className={className}
      required={required}
      disabled={disabled}
      placeholder={placeholder}
    />
  );
}

export default Textarea;
