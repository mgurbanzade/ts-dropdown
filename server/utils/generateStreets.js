const faker = require('faker');

const generateStreets = () => {
  const streets = [];

  for (let i = 0; i < 10000; i += 1) {
    streets.push({
      street: faker.address.streetAddress(),
    });
  }

  return streets;
};

module.exports = generateStreets;
