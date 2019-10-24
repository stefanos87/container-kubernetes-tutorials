var logger = require('../utils/logger');

function getRestaurants(callback) {
	logger.info("RestaurantService.getRestaurants called");
	var restaurants = __getFakeRestaurants();
	callback({ restaurants : restaurants});
}

function __getFakeRestaurants() {
	var restaurant1 = { id : 1, name : "Hostaria Vecchio Portico", city : "Arona", rating: 4};
	var restaurant2 = { id : 2, name : "Il Ragazzo di Campagna", city : "Gallarate", rating: 4}
	var restaurant3 = { id : 3, name : "Il Cormorano", city : "Milano", rating: 3}
	var restaurant4 = { id : 4, name : "Roadhouse", city : "Varese", rating: 3}
	var restaurant5 = { id : 5, name : "Arancioamaro", city : "Cannero", rating: 3}
	var restaurants = [restaurant1, restaurant2, restaurant3, restaurant4, restaurant5];
	return restaurants;
}	

exports.getRestaurants = getRestaurants;