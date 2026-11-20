CREATE DATABASE lavanderia_industrial;

USE lavanderia_industrial;

CREATE TABLE servico_lavagem(
id_servico_lavagem INT PRIMARY KEY AUTO_INCREMENT,
descricao TEXT NOT NULL,
tipo_tecido VARCHAR(20) NOT NULL,
valor DECIMAL(10,2) NOT NULL
);

CREATE TABLE equipamento(
id_equipamento INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50) NOT NULL,
patrimonio VARCHAR(20) UNIQUE NOT NULL,
`status` VARCHAR(20) NOT NULL
);

CREATE TABLE colaborador(
id_colaborador INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(150) NOT NULL,
matricula VARCHAR(20) UNIQUE NOT NULL,
turno VARCHAR(20) NOT NULL
); 
