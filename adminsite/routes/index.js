var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/grids', function(req, res, next) {
  res.render('grids', { title: 'Express' });
});
router.get('/mailbox', function(req, res, next) {
  res.render('mailbox', { title: 'Express' });
});
router.get('/widgets', function(req, res, next) {
  res.render('widgets', { title: 'Express' });
});
router.get('/pricing', function(req, res, next) {
  res.render('pricing', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
module.exports = router;
