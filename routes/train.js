var express = require('express');
var router = express.Router();
var con = require('../db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('train');
});

router.post('/', function(req, res, next) {
	con.connect(function(err) {
		console.log(req.body);
		if (err) throw  err;
		var sql = "INSERT INTO `train`(`train_name`,`train_number`,`train_path`) VALUES ('"+req.body.name+"','"+req.body.num+"','1,2,3')";
		con.query(sql, function(err, result)  {
			if(err) throw err;
			console.log("table created");
		});
	});
    res.send();
});

module.exports = router;
