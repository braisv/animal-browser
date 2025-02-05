import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@/pages/Home';
import { BrowserRouter } from 'react-router-dom';

describe('SearchForm', () => {
  it('renders in homepage', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>);
    const buscarButton = screen.getByText(/'Buscar'/i);
    expect(buscarButton).toBeInTheDocument();
  });
});
