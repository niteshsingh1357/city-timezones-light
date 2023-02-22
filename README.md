# city-timezones-light

A light and fast method of looking up timezones given the name of a city.

```bash
npm install city-timezones-light
```

```javascript
var cityTimezones = require('city-timezones-light');
```

### cityTimezones.lookupViaCity(city: string)

If a city is found, returns an **array** of possible matches with city and timezone. Returns an empty `[]` if nothing matches. Multiple cities can be found if they have the same name, i.e. Springfield.

finding based on city name of Chicago (case insensitive):
```javascript
const cityLookup = cityTimezones.lookupViaCity('Chicago')
console.log(cityLookup)
```
Will return:
```javascript
[ { city: 'Chicago', timezone: 'America/Chicago' } ]
```

### cityTimezones.cityMapping

This array will contain the full list of all available cities.

```javascript
const cityMapping = cityTimezones.cityMapping
console.log(cityMapping)
```
Will return:
```javascript
[
  {
    "city": "Qal eh-ye Now",
    "timezone": "Asia/Kabul"
  },
  {
    "city": "Chaghcharan",
    "timezone": "Asia/Kabul"
  },
  ...
]	
```
