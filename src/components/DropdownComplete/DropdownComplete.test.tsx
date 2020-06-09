import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  act
} from '@testing-library/react';
import DropdownComplete from './DropdownComplete';

const streets = [
  { street: 'First street' },
  { street: 'Second street' },
  { street: 'Third street' },
];

jest.useFakeTimers();
afterEach(cleanup);

describe('DropdownComplete ', () => {
  let wrapper: HTMLElement;
  let inputEl: HTMLElement;

  beforeEach(() => {
    const { container, getByPlaceholderText } =
      render(<DropdownComplete allStreets={streets} />);
    wrapper = container;
    inputEl = getByPlaceholderText('Type something...');
  });

  it('renders input', async () => {
    expect(inputEl).toBeInTheDocument();
  });

  it('renders select options on input change', () => {
    fireEvent.change(inputEl, { target: { value: 'First' } });

    act(() => {
      jest.advanceTimersByTime(200);
    });

    act(() => {
      jest.advanceTimersByTime(0);
    });

    const select = wrapper.querySelector('.dropdown-select');
    expect(select).toBeInTheDocument();

    const options = wrapper.querySelectorAll('.dropdown-option');
    expect(options).toHaveLength(1);
    expect(options[0]).toHaveTextContent('First street');
  });

  it('does not update select options on every user input', () => {
    fireEvent.change(inputEl, { target: { value: 'First' } });

    act(() => {
      jest.advanceTimersByTime(200);
    });

    const options = wrapper.querySelectorAll('.dropdown-option');
    expect(options).toHaveLength(1);
    expect(options[0]).toHaveTextContent('First street');

    fireEvent.change(inputEl, { target: { value: 'Second' } });

    act(() => {
      jest.advanceTimersByTime(100);
    });

    fireEvent.change(inputEl, { target: { value: 'Thi' } });

    act(() => {
      jest.advanceTimersByTime(190);
    });

    const recentOptions = wrapper.querySelectorAll('.dropdown-option');
    expect(recentOptions).toHaveLength(1);
    expect(recentOptions[0]).toHaveTextContent('First street');
  });

  it('sets option value to input element on click', () => {
    fireEvent.change(inputEl, { target: { value: 'street' } });

    act(() => {
      jest.advanceTimersByTime(200);
    });

    const options = wrapper.querySelectorAll('.dropdown-option');
    expect(options).toHaveLength(3);

    fireEvent.click(options[1]);

    expect(inputEl).toHaveValue('Second street');
  });

  it('unmounts options container on option click', () => {
    fireEvent.change(inputEl, { target: { value: 'street' } });

    act(() => {
      jest.advanceTimersByTime(200);
    });

    const options = wrapper.querySelectorAll('.dropdown-option');
    expect(options).toHaveLength(3);

    fireEvent.click(options[1]);

    const selectContainer = wrapper.querySelector('.dropdown-select');
    expect(selectContainer).not.toBeInTheDocument();
  });

  it('unmounts options container when input value is removed', () => {
    fireEvent.change(inputEl, { target: { value: 'street' } });

    act(() => {
      jest.advanceTimersByTime(200);
    });

    const selectContainer = wrapper.querySelector('.dropdown-select');
    expect(selectContainer).toBeInTheDocument();

    fireEvent.change(inputEl, { target: { value: '' } });

    act(() => {
      jest.advanceTimersByTime(200);
    });

    expect(selectContainer).not.toBeInTheDocument();
  });
});
