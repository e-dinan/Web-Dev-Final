var express = require('express');
var router = express.Router();


/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: " Web Development ECCS 2441", page: 'home'});
});

module.exports = router;