import { renderHook } from '@testing-library/react-hooks';
import TestRenderer from 'react-test-renderer';
import useDebounce from './useDebounce';

jest.useFakeTimers();

const { act } = TestRenderer;

it.only('updates value only after delay', () => {
  const { result, rerender } = renderHook(
    ({ value, delay }) => useDebounce(value, delay),
    { initialProps: { value: '', delay: 200 } }
  );

  expect(result.current).toBe('');
  act(() => {
    jest.advanceTimersByTime(210);
  });

  expect(result.current).toBe('');

  act(() => {
    rerender({ value: 'First street', delay: 200 });
  });
  expect(result.current).toBe('');

  act(() => {
    jest.advanceTimersByTime(199);
  });

  expect(result.current).toBe('');

  act(() => {
    jest.advanceTimersByTime(3);
  });

  expect(result.current).toBe('First street');
});
