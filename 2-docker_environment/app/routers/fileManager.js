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
};