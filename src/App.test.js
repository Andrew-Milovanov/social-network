import React from 'react';
import { render } from '@testing-library/react';
import AppMain from './App';

test('renders learn react link', () => {
  const { getByText } = render(<AppMain />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
