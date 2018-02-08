var express = require('express');
var router = express.Router();
var con = require('../db');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('entry');
});

router.post('/', function(req, res, next) {
	con.connect(function(err) {
		if (err) throw  err;
		console.log("connected");
		for ( i =0; i< req.body.length; i++){
		var sql = "INSERT INTO `station`(`station_name`,`station_code`,`station_long`,`station_lat`) VALUES ('"+req.body[i].name+"','"+req.body[i].num+"','"+req.body[i].longitude+"','"+req.body[i].latitude+"')";
		con.query(sql, function(err, result)  {
			if(err) throw err;
			console.log("table created");
		});
		}
	});
    res.send({redirect: '/train'});
});

module.exports = router;
