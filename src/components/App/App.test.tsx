import React from 'react';
import { render, wait } from '@testing-library/react';
import axiosMock from 'axios';
import App from './App';
import { getStreetsEndpoint } from '../../utils/routes';

describe('App', () => {
  it('fetches streets', async () => {
    await wait(() => render(<App />));
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(getStreetsEndpoint());
  });
});
