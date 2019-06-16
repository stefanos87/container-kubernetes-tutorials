// Services setup
var restaurantService = require('../services/restaurantService');

module.exports = function(app, logger) {
	app.get('/healthz', function(req, res) {
        logger.info("/healthz endpoint called");
        res.json({ response : 'App is healthy !!!'});
    });
    app.get('/restaurants', function (req, res) {
        logger.info("/restaurants endpoint called");
        logger.info("Calling RestaurantService.getRestaurants() ...");
        restaurantService.getRestaurants(function(response) {
            res.json(response);
        });
    });
};