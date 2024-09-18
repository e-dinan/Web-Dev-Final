var express = require('express');
var router = express.Router();


/* GET Syllabus page. */
router.get('/', function(req, res, next) {
  res.render('syllabus', { title: "Syllabus!!!", page: 'syllabus'});
});

module.exports = router;