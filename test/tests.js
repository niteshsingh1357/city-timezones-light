const assert = require('assert');
const cityTimezones = require('../index.js');

describe('City lookup tests', function() {
    it('return empty for non matching city', function() {
      let city = cityTimezones.lookupViaCity('Foobar')
      assert.deepEqual([], city);
    })
    it('return multiple matches', function() {
      let city = cityTimezones.lookupViaCity('Springfield')
      console.log(city.length + ' matches found for Springfield')
      assert(city.length > 1, city);
    });
});

describe('Returns full list of cities from source JSON', function() {
    it('finding all cities', function() {
        const cityMapping = cityTimezones.cityMapping
        console.log('found number of cities: ', cityMapping.length)
        assert(cityMapping.length >= 7323, 'finding all cities');
    });
});
