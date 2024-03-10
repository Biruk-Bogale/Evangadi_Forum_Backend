const mysql2 = require("mysql2");

const dbConnection = mysql2.createPool({
  user: "sql8690036",
  password: "YzcaK2QExi",
  database: "sql8690036",
  host: "sql8.freesqldatabase.com",
  port: 3306,
  connectionLimit: 10,
});

// const dbConnection = mysql2.createPool({
// 	user: "biruk1",
// 	password: "1616",
// 	database: "evangadi_db",
// 	host: "localhost",
// 	connectionLimit: 10,
// });

// dbConnection.execute("select 'test'", (err, result) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(result);
//   }
// });

module.exports = dbConnection.promise();

///// turn this on only when creating a table then it off.
// module.exports = dbConnection
