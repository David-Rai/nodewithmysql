const express = require("express")
const app = express()
const Router = require("./routes/userRoutes")

// configuring the environment variables
require('dotenv').config()

//middlewares for parsing the json
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(Router)


const port = process.env.PORT
app.listen(port, () => console.log("server started..."))