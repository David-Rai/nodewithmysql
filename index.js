const express=require("express")
const app=express()
const db=require('./model/db')

// configuring the environment variables
require('dotenv').config()

app.get('/',getUser,(req,res)=>{

res.send("hello there annay")
})

async function getUser(req,res,next){
    try {
        // Run a simple query to check if the connection is alive
        const [data,aa] = await db.execute('SELECT * from users');
        console.log(data)
        console.log('Connection to the database is successful.');
        return next()
      } catch (err) {
        console.error('Failed to connect to the database:', err);
      }
}


const port=process.env.PORT
app.listen(port,()=> console.log("server started..."))