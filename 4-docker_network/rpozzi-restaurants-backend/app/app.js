// Add required modules
var express = require('express');
var timeout = require('connect-timeout');
const cors = require('cors');
var propertyReader = require('./utils/propertyReader');
var logger = require('./utils/logger');
// Initialize application
var app = express();
app.use(cors());
app.use(errorHandler);
app.use(timeout(5000));
app.use(haltOnTimedout);
// Variables section
var PORT = 8082;
var configDir = (process.env.CONFIG_DIR || (process.cwd() + '/config'));
// Routers setup
require("./routers/restaurant")(app, logger);
// Run server
app.listen(PORT, function() {
	logger.info("Current working directory = " + process.cwd());
	logger.info("Upload directory from UPLOAD_DIR environment variable = " + process.env.UPLOAD_DIR);
	logger.info("Configuration files directory from CONFIG_DIR environment variable = " + configDir);
	try {
		var useDb = propertyReader.getProperty('use.db');
		logger.info("use.db = " + useDb);
	} catch (error) {
		logger.error("Not able to read 'use.db' property");
	}
	logger.info("Application is listening on port " + (process.env.EXPOSED_PORT || PORT));
});
// ############ Common Functions
// Halt timeout
function haltOnTimedout(req, res, next){
	if (!req.timedout) next();
}
// Error Handling
function errorHandler (err, req, res, next) {
	if (res.headersSent) {
	  return next(err)
	}
	logger.error("Error : " + err);
	res.status(500);
	//res.render('error.html', { error: err });
	res.sendFile('error.html', {root : process.cwd() + '/public'});
}