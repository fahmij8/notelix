import type { Note } from 'types';

export type InputProps = {
  type?: React.HTMLInputTypeAttribute;
  name: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export type ButtonProps = {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  theme?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'transparent';
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isModalTrigger?: boolean;
  modalId?: string;
};

export type TextareaProps = {
  name: string;
  cols: number;
  rows: number;
  value?: string;
  className?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
};

export type LabelProps = {
  children: React.ReactNode;
  name: string;
  className?: string;
};

export type ModalProps = {
  children: React.ReactNode;
  id: string;
};

export type SearchProps = { className?: string };

export interface FormProps {
  notes: Note[];
  setNotes: (notes: Note[]) => void;
}

export interface NoteCardProps extends FormProps {
  note: Note;
}
