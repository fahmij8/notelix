export type InputProps = {
  type?: React.HTMLInputTypeAttribute;
  name: string;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  className?: React.ClassAttributes<HTMLInputElement>;
  placeholder?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export type ButtonProps = {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  theme?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger';
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  className?: React.ClassAttributes<HTMLButtonElement>;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
