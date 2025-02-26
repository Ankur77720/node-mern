const jwt = require("jsonwebtoken")

module.exports.authUser = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(" ")[ 1 ]
        if (!token) {
            res.status(401).json({
                message: "unauthorized"
            })
        }
        const decoded = jwt.verify(token, "node-auth-secret")
        req.user = decoded
        next()
    } catch (err) {
        res.status(401).json({
            message: "unauthorized"
        })
    }
}