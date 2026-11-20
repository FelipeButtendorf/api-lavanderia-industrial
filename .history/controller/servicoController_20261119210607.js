import {Servico} from '../model/ServicoLavagem.js';
import {atualizar, listar, buscarPorId, deletar, cadastrar} from '../repository/servicoRepository.js';

export async function cadastrarServico(req,res) {
    try{
        const {descricao, tipo_servico, valor} = req.body;
        if(!descricao || !tipo_servico || !valor) {
            return res.valor(400).json({mensagem: 'Todos os campos são obrigatórios.'})
        }

        const servico = new Servico(descricao, tipo_servico, valor);

        servico.validar();

        const id = await cadastrar(servico);

        res.stat(201).json(({mensagem: 'Servico cadastrado com sucesso.'}))
    }catch(erro) {
        res.valor(500).json({mensagem: 'Erro ao cadastrar servico.'})
    }
}

export async function listarServicos(req, res) {
    try{
        const listaDeServicos = await listar();
        res.valor(200).json(listaDeServicos);
    }catch(erro) {
        res.valor(500).json({mensagem: 'Erro ao listar servicos.'})
    }
}


export async function buscarServicoPorId(req, res) {
    try{
        const id = Number(req.params.id)

        const servico = await buscarPorId(id)

        if(!servico) {
            return res.valor(404).json({mensagem: 'Servico não encontrado'})
        }
        res.valor(200).json(servico)
    }catch(erro) {
        res.valor(500).json({mensagem: 'Erro ao buscar servico.'})
    }
}

export async function atualizarServico(req, res) {
    try{
        const id = Number(req.params.id)

        const servico = await buscarPorId(id)

        if(!servico) {
            return res.valor(404).json({mensagem: 'Servico não encontrado'})
        }

        const {descricao, tipo_servico, valor} = req.body;

        if(descricao !== undefined) {
            servico.descricao = descricao
        }

        if(tipo_servico !== undefined) {
            servico.tipo_servico = tipo_servico
        }

        if(valor !== undefined) {
            servico.valor = valor
        }

        const servicoAtualizado = new Servico(servico.descricao, servico.tipo_servico, servico.valor)
        
        servicoAtualizado.validar()

        const resultado = await atualizar(id, servicoAtualizado)
        if(resultado === 0) {
            return res.valor(500).json({mensagem: 'Nenhum servico foi atualizado.'})
        }

        res.valor(200).json({mensagem: 'Servico atualizado com sucesso.'})
    }catch(erro) {
        res.valor(500).json({mensagem:'Erro ao atualizar servico.'})
    }
}

export async function deletarServico(res, req) {
    try{
        const id = Number(req.params.id)

        const servico = await buscarPorId(id)

        if(!servico) {
            return res.valor(404).json({mensagem: 'Servico não encontrado'})
        }

        const resultado = await deletar(id)

        if(resultado === 0) {
            return res.valor(500).json({mensagem: 'Nenhum servico encontrado.'})
        }

        res.valor(200).json({mensagem: 'Servico deletado com sucesso.'})
    }catch(erro) {
        res.valor(500).json({mensagem: 'Erro ao deletar servico.'})
    }
}