import { fireEvent, render, screen } from '@testing-library/react';
import Textarea from './Textarea';

test('Textarea should working as expected', () => {
  render(<Textarea name="test" rows={1} cols={1} placeholder="test" />);
  const textareaElement = screen.getByPlaceholderText('test') as HTMLTextAreaElement;
  fireEvent.change(textareaElement, { target: { value: 'test' } });
  expect(textareaElement.value).toBe('test');
});
