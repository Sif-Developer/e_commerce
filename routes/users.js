const express = require("express");
const UserController = require("../controllers/UserController");
const { authentication } = require("../middleware/authentication");
const router = express.Router()

router.post("/createUser",UserController.createUser)
router.post("/loginUser",UserController.loginUser)
router.get("/getUsers",UserController.getUsers)
router.delete("/logoutUser",authentication, UserController.logoutUser)
router.get("/getUserLogged",authentication,UserController.getUserLogged)

module.exports = router;