import { fireEvent, render, screen } from '@testing-library/react';
import Input from './Input';

test('Input should working as expected', () => {
  render(<Input name="test" placeholder="test" />);
  const inputElement = screen.getByPlaceholderText('test') as HTMLInputElement;
  fireEvent.change(inputElement, { target: { value: 'test' } });
  expect(inputElement.value).toBe('test');
});
