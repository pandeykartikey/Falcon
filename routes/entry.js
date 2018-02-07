var express = require('express');
var router = express.Router();
var con = require('../db');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('entry');
});

router.post('/', function(req, res, next) {
	console.log(req);
	con.connect(function(err) {
		if (err) throw  err;
		console.log("connected");
		// var sql = "INSERT INTO `station`(`station_name`,`station_code`,'station_long','station_latitude') VALUES ('"+req.body.user_name+"','"+req.body.user_pass+"')";
		// con.query(sql, function(err, result)  {
			// if(err) throw err;
			// console.log("table created");
		// });
	});
  res.render('entry');
});

module.exports = router;
