const express = require('express');
const router = express.Router()
const postController = require("../controllers/post.controller")
const userMiddleware = require("../middlewares/user.middleware")

/* /posts/create [get] */
router.get('/create', userMiddleware.authUser, postController.createPostView)

router.post('/create', userMiddleware.authUser, postController.createPost)

module.exports = router