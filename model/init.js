const multerS3 = require("multer-s3");
var multer = require("multer");
const aws = require("aws-sdk");
// client fb
aws.config.update({
    // Your SECRET ACCESS KEY from AWS should go here,
    // Never share it!
    // Setup Env Variable, e.g: process.env.SECRET_ACCESS_KEY
    secretAccessKey: "zJOaSdT6v+U+ebh6jgMcwiokgzVVpZhleJbb5SaS",
    // Not working key, Your ACCESS KEY ID from AWS should go here,
    // Never share it!
    // Setup Env Variable, e.g: process.env.ACCESS_KEY_ID
    accessKeyId:"AKIA2BH6MTTBSGXGLXNL",
    region: "ap-southeast-1" // region of your bucket
});

const s3 = new aws.S3();
var uploadAWS = multer({
    storage: multerS3({
        s3: s3,
        bucket: "bbs-final",
        // cacheControl: "max-age=2592000",
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: "public-read",
        metadata: function (req, file, cb) {
            cb(null, {
                fieldName: file.fieldname
            });
        },
        key: function (req, file, cb) {
            cb(null, file.originalname);
        }
    })
});
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

var upload = multer({
    storage: storage
});
module.exports={
    s3:s3,
    uploadAWS:uploadAWS,
    upload:upload,

    UploadFromUrlToS3:function(url, id) {
        return new Promise((resolve, reject) => {
            request({
                url: url,
                encoding: null
            }, function (err, res, body) {
                var awsUrl = 'https://s3-ap-southeast-1.amazonaws.com';
                if (err || res.statusCode != 200) {
                    resolve('https://s3-ap-southeast-1.amazonaws.com/nosa/Avatar/defaul.png');
                } else {
                    var key = id + '.jpg';
                    var objectParams = {
                        ContentType: res.headers['content-type'],
                        ContentLength: res.headers['content-length'],
                        Bucket: "kyc-nosa-file/HuyHoang",
                        Key: key,
                        Body: body
                    };
                    awsUrl += '/' + objectParams.Bucket + '/' + key;
                    s3.putObject(objectParams, (err, data) => {
                        if (err) {
                            resolve('https://s3-ap-southeast-1.amazonaws.com/nosa/Avatar/defaul.png');
                        } else {
                            resolve(awsUrl);
                        }
                    });

                }
            });
        });
    },
    creatUploadS3: function (path, etag) {
        return multer({
             storage: multerS3({
                 s3: s3,
                 bucket: "kyc-nosa-file/HuyHoang"+path,
                 contentType: multerS3.AUTO_CONTENT_TYPE,
                 acl: "public-read",
                 metadata: function (req, file, cb) {
                     cb(null, {
                         fieldName: file.fieldname,
                     });
                 },
                 key: function (req, file, cb) {
                     cb(null, req.body.filename);
                 }
             })
         });
    }
}