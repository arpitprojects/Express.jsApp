var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/coustom', function(req, res, next) {
  res.render('coustom.ejs', { title: 'Coustom page!!' });
});



module.exports = router;
