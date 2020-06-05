import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DropdownComplete from '../DropdownComplete/DropdownComplete';
import { getStreetsEndpoint } from '../../utils/routes';
import './App.css';

const App = () => {
  const [allStreets, setAllStreets] = useState([]);
  const fetchAndSetStreets = async () => {
    const endpoint = getStreetsEndpoint();
    try {
      const { data } = await axios.get(endpoint);
      setAllStreets(data);
    } catch (e) {
      setAllStreets([]);
    }
  };

  useEffect(() => {
    fetchAndSetStreets();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <DropdownComplete allStreets={allStreets} />
      </div>
    </div>
  );
};

export default App;
