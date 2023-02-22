"use strict";
const _ = require("lodash");
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
		const cityLookup = _.filter(cityMapping, function (o) {
			return findPartialMatch(o.city, city);
		});
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
