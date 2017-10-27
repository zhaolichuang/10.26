var express = require('express');
var router = express.Router();
var msy=require('mysql');

/* GET home page. */

  var connection=msy.createConnection({
    host:'localhost',
    user:'root',
    password:'123456'
  })
router.post('/', function(req, res, next) {
  connection.connect();
  connection.query('SELECT * FROM zlc.1701b', function(err, rows, fields) {
    res.header('Access-Control-Allow-Origin',"*")
    res.send(rows)
  });
  connection.end();
});

module.exports = router;
