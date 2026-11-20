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
        res.status(500).json({mensagem: 'Erro ao cadastrar colaborador.'})
    }
}

export async function listarColaboradores(req, res) {
    try{
        const listaDeColaboradores = await listar();
        res.status(200).json(listaDeColaboradores);
    }catch(erro) {
        res.status(500).json({mensagem: 'Erro ao listar colaboradores.'})
    }
}


export async function buscarColaboradorPorId(req, res) {
    try{
        const id = Number(req.params.id)

        const colaborador = await buscarPorId(id)

        if(!colaborador) {
            return res.status(404).json({mensagem: 'Colaborador não encontrado'})
        }
        res.status(200).json(colaborador)
    }catch(erro) {
        res.status(500).json({mensagem: 'Erro ao buscar colaborador.'})
    }
}

export async function atualizarColaborador(res, res) {
    try{
        const id = Number(req.params.id)

        const colaborador = await buscarPorId(id)

        if(!colaborador) {
            return res.status(404).json({mensagem: 'Colaborador não encontrado'})
        }

        const {nome, matricula, turno} = req.body;

        if(nome !== undefined) {
            colaborador.nome = nome
        }

        if(matricula !== undefined) {
            colaborador.matricula = matricula
        }

        if(turno !== undefined) {
            colaborador.turno = turno
        }

        const colaboradorAtualizado = new Colaborador(colaborador.nome, colaborador.matricula, colabor)
    }
}