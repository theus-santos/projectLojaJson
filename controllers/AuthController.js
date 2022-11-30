const { User } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
class AuthController {
    static async login(req, res)
    {
        try {
            const email = req.body.email
            const password = req.body.password

            const user = await User.findOne({
                where:{
                    email: email
                }
            })
            if(user){
                if(await bcrypt.compareSync(password, user.password)){
                    jwt.sign({id: user.id}, "$@KEY@$", (error,token)=>{
                        res.status(200).json({
                            success: true,
                            token:token
                        })
                    })
                } else {
                    res.status(401).json('Senha inválida!')
                }
            } else {
                res.status(401).json('Usuário não encontrado')
            }
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}

module.exports = AuthController