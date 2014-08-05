var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// Settings
router.use(bodyParser.json());
router.use(bodyParser.urlencoded());


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'NodeBook' });
});

router.post('/signin', function(req, res) {
   console.log(req.body.email);
   console.log(req.body.password);
   res.redirect('/portal');
});

module.exports = router;
