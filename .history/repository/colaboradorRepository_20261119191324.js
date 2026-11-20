import conexao from '../database/conexao.js';

export async function cadastrar(colaborador) {
    const sql = 'INSERT INTO colaborador (nome, matricula, turno) VALUES (?, ?, ?)'
    const [resultado] = await conexao.execute(sql, [colaborador.nome, colaborador.matricula, colaborador.turno])
    return resultado.insertId;
}

export async function listar() {
    const sql = 'SELECT * FROM colaborador'
    const [resultado] = await conexao.execute(sql)
    return resultado;
}

export async function buscarPorId(id) {
    const sql = 'SELECT * FROM colaborador WHERE id_colaborador = ?'
    const [resultado] = await conexao.execute(sql, [id])
    return resultado[0];
}

export async function atualizar(id, colaborador) {
    const sql = 'UPDATE colaborador SET nome = ?, matricula = ?, turno = ?'
    const [resultado] = await conexao.execute(sql, [colaborador.nome, colaborador.matricula, colaborador.turno], id)
    return resultado.insertId;
}
