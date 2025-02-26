const express = require("express")
const router = express.Router()
const userController = require("../controllers/user.controller")
const userMiddleware = require("../middlewares/user.middleware")

/* /users/register [get] */
router.get('/register', userController.registerViewController)


/* /users/register [post] */
router.post('/register', userController.registerUserController)


router.get('/login', userController.loginViewController)

router.post('/login', userController.loginUserController)

router.get('/feed', userMiddleware.authUser,userController.feedViewController)



/* /users/profile [get] */
router.get('/profile', (req, res) => {
    const token = req.cookies.token
})

module.exports = router