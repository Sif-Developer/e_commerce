const express = require("express");
const UserController = require("../controllers/UserController");
const { authentication } = require("../middleware/authentication");
const { uploadUserImages } = require("../middleware/multer");
const router = express.Router()

// const imageUploader = require('../helpers/image-uploader')


router.post("/createUser", uploadUserImages.single('image'),UserController.createUser )
router.post("/loginUser",UserController.loginUser)
router.get("/getUsers",UserController.getUsers)
router.delete("/logoutUser",authentication, UserController.logoutUser)
router.get("/getUserLogged",authentication,UserController.getUserLogged)

module.exports = router;