var GraficoModel = require("../models/GraficoModel");

function listar(req, res) {
   GraficoModel.listar()
        .then(function (resultado) {
            res.status(200).json(resultado)
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    listar,
}