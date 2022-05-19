import { render, screen } from '@testing-library/react';
import Modal from './Modal';

test('Modal should render', () => {
  render(<Modal id="test">Hello</Modal>);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});
