"use strict";
const cityMapping = require("./data/cityMap.json");

function findPartialMatch(itemsToSearch, searchString) {
	const searchItems = searchString.split(" ");
	const isPartialMatch = searchItems.every(function (i) {
		return itemsToSearch.toLowerCase().includes(i.toLowerCase());
	});
	return isPartialMatch;
}

function lookupViaCity(city) {
	if (city) {
		const cityLookup = cityMapping.filter(o => findPartialMatch(o.city, city));
		if (cityLookup && cityLookup.length) {
			return cityLookup;
		}
	}
	return [];
}

module.exports = {
	lookupViaCity,
	cityMapping,
};
