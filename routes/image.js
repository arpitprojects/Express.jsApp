var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/image' , function(req , res){
   res.send('Image Uploaded'); 
});

module.exports = router;