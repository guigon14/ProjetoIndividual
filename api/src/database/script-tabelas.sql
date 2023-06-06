CREATE DATABASE THAOP;

USE THAOP;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE Resultado(
	idQuiz INT PRIMARY KEY AUTO_INCREMENT,
	score INT,
	fkUsuario INT,
	constraint FK_Usuario foreign key (fkUsuario) 
		references usuario (idUsuario)
);

SELECT COUNT(idQuiz) AS quantidade, score FROM Resultado GROUP BY score;

select * from usuario;

