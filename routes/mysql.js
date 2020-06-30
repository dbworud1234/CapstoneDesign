const mysql = require('mysql');

var db = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '132435',
  database : 'capstone'
});

db.connect();

module.exports = db;
