import {} from '../model/.js';
import {atualizar, listar, buscarPorId, deletar, cadastrar} from '../repository/equipamentoRepository.js';

export async function cadastrar(req,res) {
    try{
        const {nome, matricula, turno} = req.body;
        if(!nome || !matricula || !turno) {
            return res.status(400).json({mensagem: 'Todos os campos são obrigatórios.'})
        }

        const  = new (nome, matricula, turno);

        .validar();

        const id = await cadastrar();

        res.status(201).json(({mensagem: ' cadastrado com sucesso.'}))
    }catch(erro) {
        res.status(500).json({mensagem: 'Erro ao cadastrar .'})
    }
}

export async function listares(req, res) {
    try{
        const listaDees = await listar();
        res.status(200).json(listaDees);
    }catch(erro) {
        res.status(500).json({mensagem: 'Erro ao listar es.'})
    }
}


export async function buscarPorId(req, res) {
    try{
        const id = Number(req.params.id)

        const  = await buscarPorId(id)

        if(!) {
            return res.status(404).json({mensagem: ' não encontrado'})
        }
        res.status(200).json()
    }catch(erro) {
        res.status(500).json({mensagem: 'Erro ao buscar .'})
    }
}

export async function atualizar(res, res) {
    try{
        const id = Number(req.params.id)

        const  = await buscarPorId(id)

        if(!) {
            return res.status(404).json({mensagem: ' não encontrado'})
        }

        const {nome, matricula, turno} = req.body;

        if(nome !== undefined) {
            .nome = nome
        }

        if(matricula !== undefined) {
            .matricula = matricula
        }

        if(turno !== undefined) {
            .turno = turno
        }

        const Atualizado = new (.nome, .matricula, .turno)
        
        Atualizado.validar()

        const resultado = await atualizar(id, Atualizado)
        if(resultado === 0) {
            return res.status(500).json({mensagem: 'Nenhum  foi atualizado.'})
        }

        res.status(200).json({mensagem: ' atualizado com sucesso.'})
    }catch(erro) {
        res.status(500).json({mensagem:'Erro ao atualizar .'})
    }
}

export async function deletar(res, res) {
    try{
        const id = Number(req.params.id)

        const  = await buscarPorId(id)

        if(!) {
            return res.status(404).json({mensagem: ' não encontrado'})
        }

        const resultado = await deletar(id)

        if(resultado === 0) {
            return res.status(500).json({mensagem: 'Nenhum  encontrado.'})
        }

        res.status(200).json({mensagem: ' deletado com sucesso.'})
    }catch(erro) {
        res.status(500).json({mensagem: 'Erro ao deletar .'})
    }
}