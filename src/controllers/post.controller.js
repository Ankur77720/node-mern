const postModel = require("../models/post.model")

module.exports.createPostView = (req, res) => {
    res.render("create-post")
}


module.exports.createPost = async (req, res) => {
    const { media, caption } = req.body

    console.log(req.user)

    const post = await postModel.create({
        media,
        caption,
        author: req.user.id
    })

    res.send(post)
}