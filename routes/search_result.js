var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require("path");
/* GET home page. */

router.post('/search_result', function(req, res , next) {
    var name = req.body.name;
    var email = req.body.email;
    //console.log(req.files.data);
    // res.json(req.files.data);
    //console.log(req.files);
    var image_upload = req.files.image_upload;
    var name  = req.files.image_upload.name;
    //console.log(name);
    var tmp_path = req.files.image_upload.path;
    var target_path = './uploads'+image_upload.name;
    fs.rename(tmp_path , target_path , function(err){
       if(err){
            next(err);
       }
       fs.unlink(tmp_path , function(){
          if(err){
              next(err);
          } 
          console.log('File upload to'+target_path+' '+image_upload.size+ " ");
          res.redirect('/images' + image_upload.name);
       });
    });
});

// var bodyParser = require('body-parser');


// var app = express();

// app.use(bodyParser({
//    keepExtensions : true , 
//    uploadDir : './uploads'
    
// }));//for post form submission
module.exports = router;
