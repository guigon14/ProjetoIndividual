var FinalizarModel = require("../models/FinalizarModel");

function testar(req, res) {
    console.log("ENTRAMOS NA FinalizarController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
   FinalizarModel.listar()
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

function Finalizar(req, res) {
    var score = req.body.scoreServer;
    var idUsuario = req.body.iduser;
    if (score == undefined) {
        res.status(400).send("Seu score está undefined!");
    }
    else {
        
        FinalizarModel.Finalizar(score, idUsuario)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    res.status(200).send("Score enviado")
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o Finalizar! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}


module.exports = {
    listar,
    Finalizar,
    testar
}