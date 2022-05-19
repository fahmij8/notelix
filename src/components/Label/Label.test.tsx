import { render, screen } from '@testing-library/react';
import Label from './Label';

test('Label should be rendered', () => {
  render(<Label name="test">Test</Label>);
  const labelElement = screen.getByText('Test');
  expect(labelElement).toBeInTheDocument();
});
