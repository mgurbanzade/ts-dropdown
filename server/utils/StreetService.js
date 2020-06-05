const generateStreets = require('./generateStreets');

class StreetService {
  constructor() {
    this.streets = generateStreets();
  }

  allStreets() {
    return this.streets;
  }
}

module.exports = StreetService;
