const mysql = require('mysql');

// create mysql connection
const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root@123!',
    database: 'node_mysql_crud_db'
})

dbConnection.connect( (err) => {
    if(err) throw err;
    console.log('Database is connected successfully')
})

module.exports = dbConnection;