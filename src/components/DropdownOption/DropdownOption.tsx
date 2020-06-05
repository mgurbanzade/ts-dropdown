import React from 'react';
import './dropdown-option.scss';

interface Props {
  value: string
  optionClickHandler: Function
}

const DropdownOption = (props: Props) => {
  const { value, optionClickHandler } = props;
  return (
    <div
      className="dropdown-option"
      onClick={(e) => optionClickHandler(value)}
    >
      {value}
    </div>
  );
};

export default DropdownOption;
