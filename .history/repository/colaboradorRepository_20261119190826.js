import conexao from '../database/conexao.js';

export async function cadastrar(colaborador) {
    const sql = 'INSERT INTO colaborador (nome, matricula, turno) VALUES (?, ?, ?)'
    
}