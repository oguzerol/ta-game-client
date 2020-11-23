import React from 'react';
import ComposedApp from './App';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<ComposedApp />, div);
});
