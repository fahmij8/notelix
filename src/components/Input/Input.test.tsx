import { fireEvent, render, screen } from '@testing-library/react';
import Input from './Input';

test('Input should working as expected', () => {
  render(<Input name="test" label="test" />);
  const inputElement = screen.getByLabelText('test') as HTMLInputElement;
  fireEvent.change(inputElement, { target: { value: 'test' } });
  expect(inputElement.value).toBe('test');
});
