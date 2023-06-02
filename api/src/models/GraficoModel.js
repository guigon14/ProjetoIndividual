var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT COUNT(idQuiz) AS quantidade, score FROM Resultado GROUP BY score;
    `;
    return database.executar(instrucao);
}


module.exports = {
    listar
};