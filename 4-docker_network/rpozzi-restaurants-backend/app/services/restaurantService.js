// Add required modules
var propertyReader = require('../utils/propertyReader');
var logger = require('../utils/logger');
// Functions
function getRestaurants(callback) {
	logger.debug("RestaurantService.getRestaurants called");
	try {
		var useDb = propertyReader.getProperty('use.db');
		if (useDb) {
			logger.debug("Getting restaurants from database");
			logger.debug("db.type = " + propertyReader.getProperty('db.type'));
			logger.debug("db.url = " + propertyReader.getProperty('db.url'));
			logger.debug("db.port = " + propertyReader.getProperty('db.port'));
			logger.debug("db.user = " + propertyReader.getProperty('db.user'));
		} else {
			logger.debug("Getting restaurants from stub service");
			__getFakeRestaurants(callback);
		}
	} catch (error) {
		logger.error("Not able to read 'use.db' property, getting restaurants from stub service");
		restaurants = __getFakeRestaurants();
	}
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