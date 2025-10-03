/** load library express */
const express = require(`express`)

/** initiate object that instance of express */
const app = express()

/** allow to read 'request' with json type */
app.use(express.json())

/** load user's controller */
const userController = require(`../controllers/user.controller`)

/** load function from simple-middleware */
const { midOne } = require("../middlewares/simple-middleware")

/** load function from user-validation */
const { validateUser } = require("../middlewares/user-validation")

/** 
 * ===============================
 * ROUTE DEFINITION START HERE ✅
 * ===============================
 */

/** create route to get all users (with simple middleware) */
app.get("/", [midOne], userController.getAllUser)
/** create route to get all users */
app.get("/", userController.getAllUser)

/** create route to find user using keyword */
app.get("/:key", userController.findUser)

/** ✅ FIXED: create route to add new user with validation */
app.post("/", validateUser, userController.addUser)

/** ✅ FIXED: create route to update user with validation */
app.put("/:id", validateUser, userController.updateUser)

/** create route to delete user */
app.delete("/:id", userController.deleteUser)

/** export app in order to load in another file */
module.exports = app