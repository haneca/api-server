var express = require('express');
var router = express.Router();
// 新たに追加
var cors = require('cors');
var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

// corsの処理を追加
router.get('/api/sample', cors(corsOptions), function(req, res, next) {
  res.json('success');
});

module.exports = router;
