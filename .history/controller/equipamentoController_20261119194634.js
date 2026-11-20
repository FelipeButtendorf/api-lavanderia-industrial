import {Equipamento} from '../model/Equipamento.js';
import {atualizar, listar, buscarPorId, deletar, cadastrar} from '../repository/equipamentoRepository.js';

export async function cadastrarEquipamento(req,res) {
    try{
        const {nome, matricula, turno} = req.body;
        if(!nome || !matricula || !turno) {
            return res.status(400).json({mensagem: 'Todos os campos são obrigatórios.'})
        }

        const Equipamento = new Equipamento(nome, matricula, turno);

        Equipamento.validar();

        const id = await cadastrar(Equipamento);

        res.status(201).json(({mensagem: 'Equipamento cadastrado com sucesso.'}))
    }catch(erro) {
        res.status(500).json({mensagem: 'Erro ao cadastrar Equipamento.'})
    }
}

export async function listarEquipamentoes(req, res) {
    try{
        const listaDeEquipamentoes = await listar();
        res.status(200).json(listaDeEquipamentoes);
    }catch(erro) {
        res.status(500).json({mensagem: 'Erro ao listar Equipamentoes.'})
    }
}


export async function buscarEquipamentoPorId(req, res) {
    try{
        const id = Number(req.params.id)

        const Equipamento = await buscarPorId(id)

        if(!Equipamento) {
            return res.status(404).json({mensagem: 'Equipamento não encontrado'})
        }
        res.status(200).json(Equipamento)
    }catch(erro) {
        res.status(500).json({mensagem: 'Erro ao buscar Equipamento.'})
    }
}

export async function atualizarEquipamento(res, res) {
    try{
        const id = Number(req.params.id)

        const Equipamento = await buscarPorId(id)

        if(!Equipamento) {
            return res.status(404).json({mensagem: 'Equipamento não encontrado'})
        }

        const {nome, matricula, turno} = req.body;

        if(nome !== undefined) {
            Equipamento.nome = nome
        }

        if(matricula !== undefined) {
            Equipamento.matricula = matricula
        }

        if(turno !== undefined) {
            Equipamento.turno = turno
        }

        const EquipamentoAtualizado = new Equipamento(Equipamento.nome, Equipamento.matricula, Equipamento.turno)
        
        EquipamentoAtualizado.validar()

        const resultado = await atualizar(id, EquipamentoAtualizado)
        if(resultado === 0) {
            return res.status(500).json({mensagem: 'Nenhum Equipamento foi atualizado.'})
        }

        res.status(200).json({mensagem: 'Equipamento atualizado com sucesso.'})
    }catch(erro) {
        res.status(500).json({mensagem:'Erro ao atualizar Equipamento.'})
    }
}

export async function deletarEquipamento(res, res) {
    try{
        const id = Number(req.params.id)

        const Equipamento = await buscarPorId(id)

        if(!Equipamento) {
            return res.status(404).json({mensagem: 'Equipamento não encontrado'})
        }

        const resultado = await deletar(id)

        if(resultado === 0) {
            return res.status(500).json({mensagem: 'Nenhum Equipamento encontrado.'})
        }

        res.status(200).json({mensagem: 'Equipamento deletado com sucesso.'})
    }catch(erro) {
        res.status(500).json({mensagem: 'Erro ao deletar Equipamento.'})
    }
}