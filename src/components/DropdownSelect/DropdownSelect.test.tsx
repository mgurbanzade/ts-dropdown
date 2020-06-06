import React from 'react';
import { render } from '@testing-library/react';
import DropdownSelect from './DropdownSelect';


describe('DropdownSelect', () => {
  it('renders option elements for provided option data', () => {
    const props = {
      filteredStreets: [
        { street: 'Filtered Street 1 ' },
        { street: 'Filtered Street 2 ' },
      ],
      onOptionClick: () => {},
    };
    const { getAllByText } = render(<DropdownSelect {...props} />);
    const dropdownOptions = getAllByText(/Filtered Street/i);
    expect(dropdownOptions).toHaveLength(2);
  });

  it('does not render any options unless data exist', () => {
    const props = {
      filteredStreets: [],
      onOptionClick: () => {},
    };
    const { container } = render(<DropdownSelect {...props} />);
    const dropdownOptions = container.querySelectorAll('.dropdown-option');
    expect(dropdownOptions).toHaveLength(0);
  });
});
