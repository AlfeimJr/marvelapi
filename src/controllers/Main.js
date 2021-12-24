const {Contato} = require('../models')

const mainController ={
    showPersonagens(req,res){
        return res.render('pages/marvel')
    },
    showInicio(req,res){
        return res.render('pages/home')
    },
    showComics(req,res){
        return res.render('pages/comics')
    },
    showEvents(req,res){
        return res.render('pages/events')
    },
    async contato(req, res){
        const{nome, email} = req.body
        try{
            const contato = await Contato.create({
                nome,
                email,
            });

            return res.redirect("/home")
        }catch(error){
            console.log(error)
            return res.redirect("/home")
        }
    }
}

module.exports = mainController