import React, { useState, useEffect } from 'react';
import './dropdown-input.scss';
import useDebounce from '../../utils/useDebounce';

interface Props {
  onInput: Function,
  onResetOptionValue: Function,
  onQueryIsEmpty: Function,
  selectedOptionValue: string
}

const DropdownInput = (props: Props) => {
  const [currentVal, setCurrentVal] = useState('');
  const {
    onInput,
    selectedOptionValue,
    onResetOptionValue,
    onQueryIsEmpty,
  } = props;
  const updateCurrentVal = (val: string) => {
    onResetOptionValue();
    setCurrentVal(val);
  };

  const value = selectedOptionValue || currentVal;
  const debouncedVal = useDebounce(currentVal, 200);

  useEffect(() => {
    if (!currentVal) onQueryIsEmpty();
    if (debouncedVal) onInput(debouncedVal);
    /* eslint-disable-next-line  react-hooks/exhaustive-deps */
  }, [debouncedVal]);

  return (
    <input
      type="text"
      className='dropdown-input'
      placeholder="Type something..."
      onChange={(e) => updateCurrentVal(e.target.value)}
      value={value}
    />
  );
};

export default DropdownInput;
