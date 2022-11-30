const { Pessoas, Telefone } = require('../models')
const routes = require('../routes/apiRoutes')

class ApiController {
    static async index(req, res)
    {
        try {
            const pessoas = await Pessoas.findAll()
            res.status(200).json({
                data: pessoas
            })
        }
        catch(error) {
            res.status(500).json({
                erro: true,
                message: error.message
            })
        }
    }

    static async store(req, res)
    {
        try {
            const pessoa = await Pessoas.create({
                nome: req.body.nome,
                email: req.body.email,
                data_nascimento: req.body.data_nascimento
            })
            res.status(200).json({
                data: pessoa
            })
        } catch (error) {
            res.status(500).json({
                erro:true,
                message: error.message
            })
        }
    }

    static async show(req, res)
    {
        try {
            const pessoa = await Pessoas.findByPk(req.params.id)
            if(!pessoa){
                res.status(404).json({
                    message:"Pessoa não encontrada"
                })
            }else{
                res.status(200).json({
                    data:pessoa
                })
            }
        } catch (error) {
            res.status(500).json({
                erro: true,
                message: error.message
            })
        }
    }

    static async update(req, res)
    {
        try {
            const pessoa = await Pessoas.findByPk(req.params.id)
            if(!pessoa){
                res.status(404).json({
                    message: "Pessoa não encontrada"
                })
            }else{
                await pessoa.update({
                    nome: req.body.nome,
                    email: req.body.email,
                    data_nascimento: req.body.data_nascimento
                })
                res.status(200).json({
                    data:pessoa
                })
            }
        } catch (error) {
            res.status(500).json({
                erro: true,
                message: error.message
            })
        }
    }   

    static async destroy(req, res)
    {
        try {
            const telefones = await Telefone.findAll({
                where:{
                    pessoaId: req.params.id
                }
            })
            if(telefones){
                telefones.map((telefone, index)=>{
                    telefone.destroy()
                })
            }
            const pessoa = await Pessoas.findByPk(req.params.id)
            await pessoa.destroy()

            res.status(200).json({
                success: true,
                message: "Pessoa deletada com sucesso"
            })
        } catch (error) {
            res.status(500).json({
                erro: true,
                message: error.message
            })
        }
    }
}

module.exports = ApiController