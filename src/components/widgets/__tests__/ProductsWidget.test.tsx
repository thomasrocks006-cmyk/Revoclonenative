import React from 'react';
import { render } from '@testing-library/react-native';
import { ProductsWidget } from '../ProductsWidget';

describe('ProductsWidget', () => {
  it('renders product names', () => {
    const { getByText } = render(<ProductsWidget />);
    expect(getByText('Stocks')).toBeTruthy();
    expect(getByText('ETFs')).toBeTruthy();
    expect(getByText('Commodities')).toBeTruthy();
  });
});

