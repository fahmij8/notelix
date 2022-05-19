import { render, screen } from '@testing-library/react';
import Logo from './Logo';

test('should render logo', () => {
  render(<Logo />);
  const logo = screen.getByTestId('app-logo');
  expect(logo).toBeInTheDocument();
});
