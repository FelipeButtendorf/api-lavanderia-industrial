import mysql from 'mysql2/promisse';

const conexao = mysql.createPool({
    host:process.env.DB_HOST,
    port:process.env.DB_HOST,
    user:process.env.DB_HOST,
    password:process.env.DB_HOST,
    database:process.env.DB_HOST,
    connectionLimit: 10,
    host:process.env.DB_HOST,
})