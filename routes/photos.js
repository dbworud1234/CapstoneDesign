const express = require('express');
const router = express.Router();
const multer = require('multer');

let upload = multer({
  dest:"upload/"
});

router.post('/photos', upload.single("imgFile"), function(req, res, next){
  console.log(req.body);
  console.log(req);
  res.status(204).end();
});

module.exports = router;
