// Add required modules
var propertiesReader = require('properties-reader');// Read properties - https://www.npmjs.com/package/properties-reader
var logger = require('./logger');
// Variables section
var configDir = (process.env.CONFIG_DIR || (process.cwd() + '/config'));
logger.info("Configuration files directory from CONFIG_DIR environment variable = " + configDir);
var properties;
	try {
		properties = propertiesReader(configDir + '/config.properties');
	} catch (error) {
		logger.error("Not able to read from " + configDir + "/config.properties - check whether the file exists");
	}
// Functions
function getProperty(key) {
	return properties.get(key);
}
function getProperties() {
	return properties;
}

exports.getProperty = getProperty;
exports.getProperties = getProperties;