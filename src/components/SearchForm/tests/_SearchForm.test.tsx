import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@/pages/Home';

describe('SearchForm', () => {
  it('renders in homepage', () => {
    render(<Home />);
    const buscarButton = screen.getByText(/'Buscar'/i);
    expect(buscarButton).toBeInTheDocument();
  });
});
