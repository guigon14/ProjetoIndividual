var express = require("express");
var router = express.Router();

var GraficoController = require("../controllers/GraficoController");

router.get("/ultimas", function (req, res) {
    GraficoController.listar(req, res);
});


module.exports = router;