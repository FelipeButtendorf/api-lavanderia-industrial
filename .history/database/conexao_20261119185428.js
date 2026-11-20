import mysql from 'mysql2/promisse';

const conexao = mysql.createPool({
    host:process.env.DB_HOST
})