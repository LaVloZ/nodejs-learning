import { render, screen } from '@testing-library/react';
import App from './App';

test('show product title : salade césarienne', () => {
  render(<App />);

  const linkElement = screen.getByText('Salade césarienne')
  expect(linkElement).toBeInTheDocument();
});


test('show product price : 5,00 €', () => {
  render(<App />);
  
  const linkElement = screen.getByText('5,00 €')
  expect(linkElement).toBeInTheDocument();
});

test('show product price : 5,00 €', () => {
  render(<App />);
  
  const linkElement = screen.getByText('5,00 €')
  expect(linkElement).toBeInTheDocument();
});