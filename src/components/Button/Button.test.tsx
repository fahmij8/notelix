import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

test('Button should working as expected', () => {
  const clickEvent = jest.fn();
  render(<Button onClick={clickEvent}>Test</Button>);
  const buttonElement = screen.getByText('Test') as HTMLButtonElement;
  fireEvent.click(buttonElement);
  expect(clickEvent).toHaveBeenCalled();
});
