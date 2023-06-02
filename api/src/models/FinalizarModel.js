var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM Resultado;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function Finalizar(score) {
    console.log("Acessei o aviso model \n \n\t\t >> Se der erro aqui de 'Error: connect ECONNREFESUD', \n \t\t >> verifique suas credenciais de acesso ao banco \n\t\t >> e se o servidor do seu BD esta rodando corretamente. \n\n function Finalizar():", score);
    var instrucao = `
        INSERT INTO Resultado (score) VALUES ('${score}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}


module.exports = {
    Finalizar,
    listar
};