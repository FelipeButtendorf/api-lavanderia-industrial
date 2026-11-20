import {equipamento} from '../model/equipamento.js';
import {atualizar, listar, buscarPorId, deletar, cadastrar} from '../repository/equipamentoRepository.js';

export async function cadastrarEquipamento(req,res) {
    try{
        const {nome, patrimonio, status} = req.body;
        if(!nome || !patrimonio || !status) {
            return res.status(400).json({mensagem: 'Todos os campos são obrigatórios.'})
        }

        const equipamento = new equipamento(nome, patrimonio, status);

        equipamento.validar();

        const id = await cadastrar(equipamento);

        res.status(201).json(({mensagem: 'Equipamento cadastrado com sucesso.'}))
    }catch(erro) {
        res.status(500).json({mensagem: 'Erro ao cadastrar equipamento.'})
    }
}

export async function listarEquipamentos(req, res) {
    try{
        const listaDeEquipamentos = await listar();
        res.status(200).json(listaDeEquipamentos);
    }catch(erro) {
        res.status(500).json({mensagem: 'Erro ao listar equipamentos.'})
    }
}


export async function buscarEquipamentoPorId(req, res) {
    try{
        const id = Number(req.params.id)

        const equipamento = await buscarPorId(id)

        if(!equipamento) {
            return res.status(404).json({mensagem: 'Equipamento não encontrado'})
        }
        res.status(200).json(equipamento)
    }catch(erro) {
        res.status(500).json({mensagem: 'Erro ao buscar equipamento.'})
    }
}

export async function atualizarEquipamento(res, req) {
    try{
        const id = Number(req.params.id)

        const equipamento = await buscarPorId(id)

        if(!equipamento) {
            return res.status(404).json({mensagem: 'Equipamento não encontrado'})
        }

        const {nome, patrimonio, status} = req.body;

        if(nome !== undefined) {
            equipamento.nome = nome
        }

        if(patrimonio !== undefined) {
            equipamento.patrimonio = patrimonio
        }

        if(status !== undefined) {
            equipamento.status = status
        }

        const equipamentoAtualizado = new equipamento(equipamento.nome, equipamento.patrimonio, equipamento.status)
        
        equipamentoAtualizado.validar()

        const resultado = await ataualizar(id, equipamentoAtualizado)
        if(resultado === 0) {
            return res.status(500).json({mensagem: 'Nenhum equipamento foi atualizado.'})
        }

        res.status(200).json({mensagem: 'Equipamento atualizado com sucesso.'})
    }catch(erro) {
        res.status(500).json({mensagem:'Erro ao atualizar equipamento.'})
    }
}

export async function deletarEquipamento(res, req) {
    try{
        const id = Number(req.params.id)

        const equipamento = await buscarPorId(id)

        if(!equipamento) {
            return res.status(404).json({mensagem: 'Equipamento não encontrado'})
        }

        const resultado = await deletar(id)

        if(resultado === 0) {
            return res.status(500).json({mensagem: 'Nenhum equipamento encontrado.'})
        }

        res.status(200).json({mensagem: 'Equipamento deletado com sucesso.'})
    }catch(erro) {
        res.status(500).json({mensagem: 'Erro ao deletar equipamento.'})
    }
}