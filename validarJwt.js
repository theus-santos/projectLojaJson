const jwt = require('jsonwebtoken')

const middlewareValidaJwt = (req, res, next) => {
    const token = req.headers["authorization"]
    jwt.verify(token, "$@KEY@$", (err, userInfo)=> {
        if(err) {
            res.status(403).json(err)
            return
        }
        req.userInfo = userInfo
        next()
    })
}

module.exports = middlewareValidaJwt