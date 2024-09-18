var express = require('express');
var router = express.Router();


/* GET Study page. */
router.get('/', function(req, res, next) {
  res.render('study', { title: "Cheat Sheet", page: 'study'});
});

module.exports = router;