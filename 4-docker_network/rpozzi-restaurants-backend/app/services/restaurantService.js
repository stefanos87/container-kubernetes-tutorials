const log4js = require('log4js');
const appName = require('../package').name;
const logger = log4js.getLogger(appName);
logger.level = require('../package').loggerLevel;
var propertiesReader = require('properties-reader');

function getRestaurants(callback) {
	logger.info("RestaurantService.getRestaurants called");
	// Read properties from a file
	// Refer to: https://www.npmjs.com/package/properties-reader
	__getFakeRestaurants(callback);
}

function __getFakeRestaurants(callback) {
	var restaurant1 = { id : 1, name : "Hostaria Vecchio Portico", city : "Arona", rating: 4};
	var restaurant2 = { id : 2, name : "Il Ragazzo di Campagna", city : "Gallarate", rating: 4}
	var restaurant3 = { id : 3, name : "Il Cormorano", city : "Milano", rating: 3}
	var restaurant4 = { id : 4, name : "Roadhouse", city : "Varese", rating: 3}
	var restaurant5 = { id : 5, name : "Arancioamaro", city : "Cannero", rating: 3}
	var restaurants = [restaurant1, restaurant2, restaurant3, restaurant4, restaurant5];
	callback({ restaurants : restaurants});
}	

exports.getRestaurants = getRestaurants;