const mysql=require('mysql2')
require('dotenv').config()

//creating the pool
const pool=mysql.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
    connectionLimit:10,
    waitForConnections:true,
    queueLimit:0
})

//creating the promise based pool
const promisePool=pool.promise()


//exporting the pool for query
module.exports=promisePool