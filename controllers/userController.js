const db = require("../model/db.js")

//getting all the users
const getAll = async (req, res) => {
    try {
        const query = "select * from users"
        const [rows] = await db.execute(query)
        res.json(rows)
    } catch (err) {
        console.log("database error")
        res.status(500).send("database error")
    }
}

//adding the users
const createUser = async (req, res) => {
    const { name, email } = req.body

    try {
        const query = "insert into users (name,email) values (?,?)"
        const data = await db.execute(query, [name, email])
        if (data.affectedRows !== 0) {
            res.status(200).send("sucessfully added")
        }
    } catch (err) {
        console.log("database erro")
        res.status(500).send("database erro")
    }
}

//updating the users
const updateUser = async (req, res) => {
    const { id, name, email } = req.body

    try {
        const query = "update users set name=? ,email=? where id=?"
        const result = await db.execute(query, [name, email, id])
        if (result.affectedRows !== 0) {
            res.status(200).send("sucessfully updated")
        }
    } catch (err) {
        res.status(500).send("database error")
    }

}

//deleting the users
const deleteUser = async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const query = "delete from users where id = ?"
        const result = await db.execute(query, [id])
        if (result.affectedRows !== 0) {
            res.status(200).send("sucessfully deleted")
        }
    } catch (err) {
        res.status(500).send("database problem")
    }

}


module.exports = { createUser, getAll, updateUser, deleteUser }