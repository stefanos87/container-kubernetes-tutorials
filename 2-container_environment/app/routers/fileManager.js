// Add required modules
var propertyReader = require('../utils/propertyReader');
// Read environment variables
var uploadDir = process.env.UPLOAD_DIR;

module.exports = function(app, logger) {
    app.get('/dir', function (req, res) {
        logger.info("/dir endpoint called");
        logger.info("Upload directory is: " + uploadDir);
        var response = '<html><head><meta charset="utf-8"><title>Restaurants</title><meta name="description" content=""><meta name="viewport" content="width=device-width, initial-scale=1"></head>';
        response += '<body><h3>Upload directory is: ' + uploadDir + ' </h3>';
        response += '</body></html>';
        res.send(response);
    });
    app.get('/config', function (req, res) {
        logger.info("/config endpoint called");
        var response = '<html><head><meta charset="utf-8"><title>Restaurants</title><meta name="description" content=""><meta name="viewport" content="width=device-width, initial-scale=1"></head>';
        response += '<body><h3>Configuration properties are: </h3>';
        var properties = propertyReader.getProperties();
        properties.forEach(element => {          
            response += '<br><i>' + element[0] + " = " + element[1] + '</i>';
        });
        response += '<br>';
        response += '<br><i>KeyStore Password = ' + process.env.KEYSTORE_PASSWORD + '</i>';
        response += '</body></html>';
        res.send(response);
    });
};