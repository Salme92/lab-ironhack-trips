const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/my-trips', function(req, res, next) {
  res.render('my-trips/my-trips')
})

router.get('/private', function(req, res, next) {
  res.render('private');
});


module.exports = router;