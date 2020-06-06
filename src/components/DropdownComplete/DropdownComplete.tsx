import React, { useState } from 'react';
import DropdownInput from '../DropdownInput/DropdownInput';
import DropdownSelect from '../DropdownSelect/DropdownSelect';
import './dropdown-complete.scss';

interface Street {
  street: string
}

interface Props {
  allStreets: Street[]
}

const DropdownComplete = (props: Props) => {
  const [filteredStreets, setFilteredStreets] = useState<Street[]>([]);
  const [selectedOptionValue, setSelectedOptionValue] = useState<string>('');
  const [areResultsShown, setAreResultsShown] = useState(false);

  const handleOptionClick = (val: string) => {
    setSelectedOptionValue(val);
    setAreResultsShown(false);
  };

  const filterStreets = (str: string) => {
    return props.allStreets.filter((o: Street) => o.street.includes(str));
  };

  const handleInput = (val: string) => {
    setAreResultsShown(true);
    handleFilter(val);
  };

  const handleFilter = async (val: string) => {
    await setFilteredStreets(filterStreets(val));
  };

  const results = areResultsShown ? (
    <DropdownSelect
      onOptionClick={handleOptionClick}
      filteredStreets={filteredStreets}
    />
  ) : null;

  return (
    <div className="dropdown-complete">
      <h1 className="main-heading">Street Finda!</h1>
      <DropdownInput
        onResetOptionValue={() => setSelectedOptionValue('')}
        onQueryIsEmpty={() => setAreResultsShown(false)}
        selectedOptionValue={selectedOptionValue}
        onInput={handleInput}
      />
      {results}
    </div>
  );
};

export default DropdownComplete;
