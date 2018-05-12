var express = require('express');
var router = express.Router();

router.get('/api/sample', function(req, res, next) {
  res.json('success');
});

module.exports = router;
