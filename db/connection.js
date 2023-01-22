const mysql = require("mysql2");


const connection = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"1234",
    database:"mandee"
});

connection.connect((error)=>{
    if(error) throw error;
    console.log("connected !")
});

module.exports = connection