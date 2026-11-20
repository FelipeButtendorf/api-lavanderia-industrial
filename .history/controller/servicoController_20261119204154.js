import {Servico} from '../model/servico.js';
import {atualizar, listar, buscarPorId, deletar, cadastrar} from '../repository/servicoRepository.js';

export async function cadastrarServico(req,res) {
    try{
        const {nome, patrimonio, status} = req.body;
        if(!nome || !patrimonio || !status) {
            return res.status(400).json({mensagem: 'Todos os campos são obrigatórios.'})
        }

        const servico = new servico(nome, patrimonio, status);

        servico.validar();

        const id = await cadastrar(servico);

        res.status(201).json(({mensagem: 'Servico cadastrado com sucesso.'}))
    }catch(erro) {
        res.status(500).json({mensagem: 'Erro ao cadastrar servico.'})
    }
}

export async function listarServicos(req, res) {
    try{
        const listaDeServicos = await listar();
        res.status(200).json(listaDeServicos);
    }catch(erro) {
        res.status(500).json({mensagem: 'Erro ao listar servicos.'})
    }
}


export async function buscarServicoPorId(req, res) {
    try{
        const id = Number(req.params.id)

        const servico = await buscarPorId(id)

        if(!servico) {
            return res.status(404).json({mensagem: 'Servico não encontrado'})
        }
        res.status(200).json(servico)
    }catch(erro) {
        res.status(500).json({mensagem: 'Erro ao buscar servico.'})
    }
}

export async function atualizarServico(res, res) {
    try{
        const id = Number(req.params.id)

        const servico = await buscarPorId(id)

        if(!servico) {
            return res.status(404).json({mensagem: 'Servico não encontrado'})
        }

        const {nome, patrimonio, status} = req.body;

        if(nome !== undefined) {
            servico.nome = nome
        }

        if(patrimonio !== undefined) {
            servico.patrimonio = patrimonio
        }

        if(status !== undefined) {
            servico.status = status
        }

        const servicoAtualizado = new Servico(servico.nome, servico.patrimonio, servico.status)
        
        servicoAtualizado.validar()

        const resultado = await atualizar(id, servicoAtualizado)
        if(resultado === 0) {
            return res.status(500).json({mensagem: 'Nenhum servico foi atualizado.'})
        }

        res.status(200).json({mensagem: 'Servico atualizado com sucesso.'})
    }catch(erro) {
        res.status(500).json({mensagem:'Erro ao atualizar servico.'})
    }
}

export async function deletarServico(res, res) {
    try{
        const id = Number(req.params.id)

        const servico = await buscarPorId(id)

        if(!servico) {
            return res.status(404).json({mensagem: 'Servico não encontrado'})
        }

        const resultado = await deletar(id)

        if(resultado === 0) {
            return res.status(500).json({mensagem: 'Nenhum servico encontrado.'})
        }

        res.status(200).json({mensagem: 'Servico deletado com sucesso.'})
    }catch(erro) {
        res.status(500).json({mensagem: 'Erro ao deletar servico.'})
    }
}