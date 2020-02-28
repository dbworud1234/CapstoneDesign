var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.send("new router is registered.");
});

module.exports = router;
