import { fireEvent, render, screen } from '@testing-library/react';
import Search from './Search';

test('Search should working as expected', () => {
  render(<Search />);
  const inputElement = screen.getByPlaceholderText('Search Notes...') as HTMLInputElement;
  fireEvent.change(inputElement, { target: { value: 'test' } });
  expect(inputElement.value).toBe('test');
});
