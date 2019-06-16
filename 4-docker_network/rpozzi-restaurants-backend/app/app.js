// Add required modules
var express = require('express');
var timeout = require('connect-timeout');
const cors = require('cors');
const log4js = require('log4js');
const appName = require('./package').name;
const logger = log4js.getLogger(appName);
logger.level = require('./package').loggerLevel;
// Initialize application
var app = express();
app.use(cors());
app.use(errorHandler);
app.use(timeout(5000));
app.use(haltOnTimedout);
// Variables section
var PORT = 8082;
// Routers setup
require("./routers/restaurant")(app, logger);
// Run server
app.listen(PORT, function() {
	logger.info("Application is listening on port " + PORT);
	logger.info("Current working directory = " + process.cwd());
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