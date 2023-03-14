const mysql= require("mysql2");
const connect = require("../config/config");

const conn = mysql.createConnection({
    host:connect.host,
    user:connect.user,
    password:connect.password,
    database:connect.database
});


conn.connect((err)=>{
 if (err) throw err
 console.log("DB Connected")
})

module.exports = conn