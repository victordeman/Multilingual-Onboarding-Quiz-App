import { render, screen, fireEvent } from '@testing-library/react';
import Quiz from '../frontend/src/components/Quiz';
import i18n from '../frontend/src/i18n';

test('renders quiz question', () => {
  render(<Quiz />);
  expect(screen.getByText(/Welcome to the Quiz App/i)).toBeInTheDocument();
});

test('changes language', () => {
  render(<Quiz />);
  fireEvent.change(screen.getByRole('combobox'), { target: { value: 'de' } });
  expect(i18n.language).toBe('de');
});
