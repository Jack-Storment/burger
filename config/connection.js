const mysql = require('mysql');

const con = mysql.createConnection({
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: "burgers_db"
});

con.connect((err) => {
  if (err) {
    console.log('Error connecting to Db', err);
    return;
  }
  console.log('Connection established');
});

// con.end((err) => {});

module.exports = con;