import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useForm } from 'react-hook-form';
import DatePicker from '../../components/DatePicker'; // Change path as needed

// Create a TestWrapper component to use react-hook-form's useForm hook
 
const TestWrapper = ({ errors }) => {
  const { control } = useForm();
  return (
    <DatePicker
      control={control}
      field={{ name: 'dateField', isRequired: true }}
      errors={errors}
    />
  );
};

describe('<DatePicker>', () => {
  it('should apply the error border style when there is an error', async () => {
    render(<TestWrapper errors={{ dateField: 'This field is required' }} />);
    // Wait for the element to be in the document
    const datePickerInput = screen.getByTestId('datepicker-input');
    // Check if the default border style is applied when there's no error
    expect(datePickerInput).toHaveStyle('border: 2px solid rgb(233, 113, 113)');
  });

  it('should apply the default border style when there is no error', () => {
    render(<TestWrapper errors={{}} />);
    // Find the DatePicker component's text field
    const datePickerInput = screen.getByTestId('datepicker-input');
    // Check if the default border style is applied when there's no error
    expect(datePickerInput).toHaveStyle('border: 1px solid #e8e8e8');
  });
});
