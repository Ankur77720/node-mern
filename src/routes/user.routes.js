const express = require("express")
const router = express.Router()
const userController = require("../controllers/user.controller")


/* /users/register [get] */
router.get('/register', userController.registerViewController)


/* /users/register [post] */
router.post('/register',userController.registerUserController)

module.exports = router