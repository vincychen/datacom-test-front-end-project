import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormDialog from '../FormDialog';
import useFormDialog from '../useFormDialog';

jest.mock('../useFormDialog');

const mockedUseFormDialog = useFormDialog as jest.MockedFunction<typeof useFormDialog>;

const formData = {
  CompanyName: 'Test Company',
  Position: 'Test Position',
  DateApplied: '2025-03-16',
};

mockedUseFormDialog.mockReturnValue({
  formData,
  handleChange: jest.fn(),
  handleSubmit: jest.fn(),
});

test('renders form dialog with form fields', () => {
  render(<FormDialog onClose={() => {}} />);
  
  expect(screen.getByLabelText('Company Name')).toBeTruthy();
  expect(screen.getByLabelText('Position')).toBeTruthy();
  expect(screen.getByLabelText('Date Applied')).toBeTruthy();
});

test('calls handleChange when form fields are changed', () => {
  const { handleChange } = mockedUseFormDialog();
  
  render(<FormDialog onClose={() => {}} />);
  
  fireEvent.change(screen.getByLabelText('Company Name'), { target: { value: 'New Company' } });
  fireEvent.change(screen.getByLabelText('Position'), { target: { value: 'New Position' } });
  fireEvent.change(screen.getByLabelText('Date Applied'), { target: { value: '2025-03-17' } });
  
  expect(handleChange).toHaveBeenCalledTimes(3);
});
