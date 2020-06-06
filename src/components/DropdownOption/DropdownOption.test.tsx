import React from 'react';
import { render } from '@testing-library/react';
import DropdownOption from './DropdownOption';

describe('DropdownOption', () => {
  it('renders option value', () => {
    const props = {
      value: 'Example Street',
      optionClickHandler: () => {},
    };
    const { getByText } = render(<DropdownOption {...props} />);
    const dropdownOptionEl = getByText(/Example Street/i);
    expect(dropdownOptionEl).toBeInTheDocument();
  });
});
