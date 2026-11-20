import {Colaborador} from '../model/Colaborador.js';
import {atualizar, listar, buscarPorId, deletar, cadastrar} from '../rtepository/colaboradorRepository.js';

export async function cadastrarColaborador(req,res) {
    try{
        const {nome, matricula, turno} = req.body;
        if(!nome || !matricula || !turno) {
            return res.status(400).json({mensagem: 'Todos os campos são obrigatórios.'})
        }

        const colaborador = new Colaborador(nome, matricula, turno);

        colaborador.validar();

        const id = await cadastrar(colaborador);

        res.status(201).json(({mensagem: 'Colaborador cadastrado com sucesso.'}))
    }catch(erro) {
        res.status(500).json({mensagem: 'Erro ao cadastrar colaborador'})
    }
}