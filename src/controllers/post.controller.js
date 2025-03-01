const postModel = require("../models/post.model")
const userModel = require("../models/user.model")

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

    await userModel.findOneAndUpdate({
        _id: req.user.id
    }, {
        $push: {
            posts: post._id
        }
    })
    res.send(post)
}