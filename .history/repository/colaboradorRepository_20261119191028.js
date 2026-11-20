import conexao from '../database/conexao.js';

export async function cadastrar(colaborador) {
    const sql = 'INSERT INTO colaborador (nome, matricula, turno) VALUES (?, ?, ?)'
    const [resultado] = await conexao.execute(sql, [colaborador.nome, colaborador.matricula, colaborador.turno])
    return resultado.insertId;
}

export async function cadastrar(colaborador) {
    const sql = 'INSERT INTO colaborador (nome, matricula, turno) VALUES (?, ?, ?)'
    const [resultado] = await conexao.execute(sql, [colaborador.nome, colaborador.matricula, colaborador.turno])
    return resultado.insertId;
}