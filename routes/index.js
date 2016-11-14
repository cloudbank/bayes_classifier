var express = require('express')
  , router = express.Router()



router.get('/', function(req, res) {
  res.render('index')
})

var machine = require('../controllers/machine');

router.post('/train', machine.train);
router.post('/categorize', machine.categorize);

module.exports = router