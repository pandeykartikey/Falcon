var mysql = require('mysql');
var settings = require('./settings.json');

var con = mysql.createConnection(settings);

module.exports = con;
