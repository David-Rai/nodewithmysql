const express = require('express')
const Router = express.Router()
const { createUser, getAll,updateUser,deleteUser } = require("../controllers/userController.js")

//getting all the users
Router.get('/', getAll)

//creating the user
Router.post('/create', createUser)

//updating the user
Router.post("/update",updateUser)

//deleting the user
Router.delete("/delete/:id",deleteUser)

module.exports = Router