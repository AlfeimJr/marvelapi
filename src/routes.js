const express = require("express");
const router = express.Router();

const mainController = require("./controllers/Main");

router.get('/personagens', mainController.showPersonagens)
router.get('/home', mainController.showInicio)
router.get('/comics', mainController.showComics)
router.get('/events', mainController.showEvents)

router.post('/contato', mainController.contato)



module.exports = router;

