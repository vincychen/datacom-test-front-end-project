import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DropDownButton from '../Button';
import useButton from '../useButton';

jest.mock('../useButton');

const mockedUseButton = useButton as jest.MockedFunction<typeof useButton>;

const statusOptions = [
  { key: 1, status: 1, value: "Option 1" },
  { key: 2, status: 2, value: "Option 2" },
];

mockedUseButton.mockReturnValue({
  statusOptions,
  updateApplication: jest.fn(),
});

test('renders dropdown button with label', () => {
  render(<DropDownButton applicationId={1} />);
  const buttonElement = screen.getByText('Edit');
  expect(buttonElement).toBeTruthy();
});

test('displays dropdown items when button is clicked', () => {
  render(<DropDownButton applicationId={1} />);
  const buttonElement = screen.getByText('Edit');   
  fireEvent.click(buttonElement);

  statusOptions.forEach(option => {
    expect(screen.getByText(option.value)).toBeTruthy();
  });
});

test('calls handleUpdateApplication with correct arguments', () => {
  const reloadMock = jest.fn();
  const { updateApplication } = mockedUseButton();

  render(<DropDownButton applicationId={1} reload={reloadMock} />);
  const buttonElement = screen.getByText('Edit');
  fireEvent.click(buttonElement);

  const optionElement = screen.getByText('Option 1');
  fireEvent.click(optionElement);

  expect(updateApplication).toHaveBeenCalledWith(1, 1);
  expect(reloadMock).toHaveBeenCalled();
});

export {};  