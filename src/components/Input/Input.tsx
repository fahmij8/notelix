import type { InputProps } from 'types';

function Input({
  size = 'small',
  className,
  name,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  required,
  disabled,
}: InputProps) {
  let inputClassSize;
  if (size === 'small') {
    inputClassSize = 'py-1 px-2 text-xs';
  } else if (size === 'medium') {
    inputClassSize = 'py-1.5 px-3 text-base';
  } else if (size === 'large') {
    inputClassSize = 'py-4 px-2 text-xl';
  }
  return (
    <>
      {label && (
        <label htmlFor={name} className="form-label inline-block mt-4 mb-2 text-zinc-200">
          {label}
        </label>
      )}
      <input
        name={name}
        id={name}
        className={`${inputClassSize} ${className ?? ''}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
      />
    </>
  );
}

export default Input;
