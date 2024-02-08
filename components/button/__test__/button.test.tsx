import { render, screen, fireEvent } from '@testing-library/react';
import CustomButton from '../index';

describe('CustomButton Tests', () => {
  it('should render button with label', () => {
    const mockOnClickHandler = jest.fn();
    // Render the CustomButton component
    render(<CustomButton label='Click Me' onClick={mockOnClickHandler} />);

    // Check if the button with the label "Click Me" is rendered
    expect(screen.getByRole('button', { name: 'Click Me' })).toBeInTheDocument();
  });

  it('should execute onClick handler when button is clicked', () => {
    // Define a mock onClick handler function
    const mockOnClickHandler = jest.fn();

    // Render the CustomButton component with the mock onClick handler
    render(<CustomButton label='Click Me' onClick={mockOnClickHandler} />);

    // Find the button element
    const button = screen.getByRole('button', { name: 'Click Me' });

    // Simulate a click event on the button
    fireEvent.click(button);

    // Check if the onClick handler function is called
    expect(mockOnClickHandler).toHaveBeenCalled();
  });
});
