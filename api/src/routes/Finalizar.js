var express = require("express");
var router = express.Router();

var FinalizarController = require("../controllers/FinalizarController");

router.post("/Finalizar", function (req,res){
    FinalizarController.Finalizar(req,res);
})

router.get("/listar", function (req, res) {
    FinalizarController.listar(req, res);
});


module.exports = router;