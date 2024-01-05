var express = require('express');
var router = express.Router();
module.exports = router;


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('partials/home.ejs',{ title: 'home' });
  });
  
  /* GET flower page. */
  router.get('/flower', function(req, res, next) {
    res.render('partials/flower.ejs', { title: 'flower' });
  });

  module.exports = router;