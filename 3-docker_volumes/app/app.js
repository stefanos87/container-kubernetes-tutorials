// Add required modules
var express = require('express');
var timeout = require('connect-timeout');
var propertiesReader = require('properties-reader');
const log4js = require('log4js');
const appName = require('./package').name;
const logger = log4js.getLogger(appName);
logger.level = require('./package').loggerLevel;
// Initialize application
var app = express();
app.use(express.static(process.cwd() + '/public'));
app.use(errorHandler);
app.use(timeout(5000));
app.use(haltOnTimedout);
// Variables section
var PORT = 8082;
var configDir = (process.env.CONFIG_DIR || (process.cwd() + '/config'));
// Routers setup
require("./routers/health")(app, logger);
require("./routers/restaurant")(app, logger);
require("./routers/fileManager")(app, logger);
// Run server
app.listen(PORT, function() {
	logger.info("Current working directory = " + process.cwd());
	logger.info("Upload directory from UPLOAD_DIR environment variable = " + process.env.UPLOAD_DIR);
	logger.info("Configuration files directory from CONFIG_DIR environment variable = " + configDir);
	try {
		var properties = propertiesReader(configDir + '/config.properties');
		var useDb = properties.get('use.db')
		logger.info("use.db = " + useDb);
		if (useDb) {
			logger.info("db.type = " + properties.get('db.type'));
			logger.info("db.url = " + properties.get('db.url'));
		}
	} catch (error) {
		logger.error("Not able to read from " + configDir + "/config.properties - check it exists");
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