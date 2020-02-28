const express = require('express');
const router = express.Router();
const multer = require('multer');
const mysql = require('mysql');

let upload = multer({
  dest:"upload/"
});

let db = mysql.createConnection({
  user: "root",
  password: "132435",
  database: "capstone"
});

/* GET home page. */
router.get('/', function(req, res, next){
  res.render('capstone/firstPage');
});

router.get('/login', function(req, res, next){
  res.render('capstone/login');
});

router.get('/main', function(req, res, next){
  res.render('capstone/main');
});

router.get('/create', function(req, res, next){
  res.render('capstone/create');
});

router.post('/create_process', function(req, res, next){
  console.log('여기부터');
  console.log(req);
  console.log('여기까지');
  res.render('capstone/create_process');
});

router.post('/upload', upload.single('imgFile'), function(req, res, next){
  var body = req.body;

//  db.query("INSERT INTO sns (description, tag, created, user) VALUES(?, ?, NOW(), ?)", [body.description, body.tags, ])
});

module.exports = router;
