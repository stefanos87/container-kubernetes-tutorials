// Add required modules
var fs = require('fs-extra');
var multer = require('multer');
// Read environment variables
var uploadDir = process.env.UPLOAD_DIR;
// Setup multipart upload configuration
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadDir)
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })

module.exports = function(app, logger) {
    app.get('/dir', function (req, res) {
        logger.info("/dir endpoint called");
        logger.info("Upload directory is: " + uploadDir);
        var response = '<html><head><meta charset="utf-8"><title>Restaurants</title><meta name="description" content=""><meta name="viewport" content="width=device-width, initial-scale=1"></head>';
        response += '<body><h3>Upload directory is: ' + uploadDir + ' </h3>';
        response += '</body></html>';
        res.send(response);
    });
    app.post('/upload', upload.array('fileToUpload'), function(req, res) {
        logger.info("/upload endpoint called");
        const files = req.files;
        if (files) {
            var response = '<html><head><meta charset="utf-8"><title>Restaurants</title><meta name="description" content=""><meta name="viewport" content="width=device-width, initial-scale=1"></head>';
            response += '<body><h3>File Upload result</h3>';
            response += 'The following files have been uploaded to <i>' + uploadDir + '</i> directory : ';
            files.forEach(file => {
                logger.info('Uploading ' + file.originalname + ' file...');
                response += '<br><i>' + file.originalname + '</i>';
            });
            response += '</body></html>';
            var uploadStatus = 'File Uploaded Successfully';
            res.send(response);

        } else {
            logger.info('No File Uploaded');
            var fileName = 'File not uploaded';
            var uploadStatus = 'File Upload Failed';
            res.send(fileName + ' to <i>' + uploadDir + '</i> directory!!!');
        }
    });
    app.get('/list', function (req, res) {
        logger.info("/list endpoint called");
        logger.info("List files from " + uploadDir + " directory");
        var response = '<html><head><meta charset="utf-8"><title>Restaurants</title><meta name="description" content=""><meta name="viewport" content="width=device-width, initial-scale=1"></head>';
        response += '<body><h3>List files from ' + uploadDir + ' directory :</h3>';
        fs.readdir(uploadDir, function (err, files) {
            if (err) {
                return logger.error(err);
            }
            files.forEach(function (file) {
                logger.info(file);
                response += '<br>' + file + '</br>';
            });
            response += '</body></html>';
            res.send(response);
        });
    });
    app.get('/delete', function (req, res) {
        logger.info("/delete endpoint called");
        logger.info("Delete files from " + uploadDir + " directory");
        var response = '<html><head><meta charset="utf-8"><title>Restaurants</title><meta name="description" content=""><meta name="viewport" content="width=device-width, initial-scale=1"></head>';
        // Delete directory content - Async with callbacks:
        fs.emptyDir(uploadDir, err => {
            if (err) 
                return console.error(err)
            logger.info("Files deleted from " + uploadDir + " directory");
            response += '<body><h3>Files deleted from "' + uploadDir + '" directory</h3>';
            response += '</body></html>';
            res.send(response);
        })
    });
};