import React from 'react';
import './dropdown-select.scss';
import { uniqueId } from 'lodash';
import DropdownOption from '../DropdownOption/DropdownOption';

interface Street {
  street: string
}

interface Props {
  filteredStreets: Street[]
  onOptionClick: Function
}

const DropdownSelect = (props: Props) => {
  const { filteredStreets, onOptionClick } = props;
  const optionClickHandler = (val: string) => onOptionClick(val);

  const options = filteredStreets.map((o: Street) => (
    <DropdownOption
      key={uniqueId()}
      value={o.street}
      optionClickHandler={optionClickHandler}
    />
  ));

  const selectEl = options.length > 0 ? <div className="dropdown-select">{options}</div> : null;

  return selectEl;
};

export default DropdownSelect;
