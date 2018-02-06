var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "manan198518",
  database: "train_dashboard"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  /*Create a table where the field "id" is primary key:*/
  var sql = "CREATE TABLE user (user_id INT AUTO_INCREMENT PRIMARY KEY, user_name VARCHAR(255), user_pass VARCHAR(255))";
  var sql = "CREATE TABLE train (train_id INT AUTO_INCREMENT PRIMARY KEY, train_name VARCHAR(255), train_number VARCHAR(255), train_path VARCHAR(255))";
  var sql = "CREATE TABLE station (station_id INT AUTO_INCREMENT PRIMARY KEY, station_name VARCHAR(255), station_code VARCHAR(255), station_long VARCHAR(255), station_lat VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});