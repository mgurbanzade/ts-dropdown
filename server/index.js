const express = require('express');
const StreetService = require('./utils/StreetService');

const app = express();
const streetService = new StreetService();

app.get('/streets', (req, res) => {
  res.append('Access-Control-Allow-Origin', '*');
  res.json(streetService.allStreets());
});

app.listen(process.env.PORT || 8080);
