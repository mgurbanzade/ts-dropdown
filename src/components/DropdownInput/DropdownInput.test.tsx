import React from 'react';
import { render } from '@testing-library/react';
import DropdownInput from './DropdownInput';

const props = {
  selectedOptionValue: '',
  onInput: () => {},
  onResetOptionValue: () => {},
  onQueryIsEmpty: () => {},
};

describe('DropdownInput', () => {
  it('renders regular input element', () => {
    const { getByPlaceholderText } = render(<DropdownInput {...props} />);
    const input = getByPlaceholderText('Type something...');
    expect(input).toBeInTheDocument();
  });

  it('renders input element with predefined value', () => {
    const { getByPlaceholderText } =
      render(<DropdownInput {...{ ...props, selectedOptionValue: 'First' }} />);
    const input = getByPlaceholderText('Type something...');
    expect(input).toHaveValue('First');
  });
});
