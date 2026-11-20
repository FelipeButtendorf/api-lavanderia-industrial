import {Equip} from '../model/Equip.js';
import {atualizar, listar, buscarPorId, deletar, cadastrar} from '../repository/equipamentoRepository.js';

export async function cadastrarEquip(req,res) {
    try{
        const {nome, matricula, turno} = req.body;
        if(!nome || !matricula || !turno) {
            return res.status(400).json({mensagem: 'Todos os campos são obrigatórios.'})
        }

        const Equip = new Equip(nome, matricula, turno);

        Equip.validar();

        const id = await cadastrar(Equip);

        res.status(201).json(({mensagem: 'Equip cadastrado com sucesso.'}))
    }catch(erro) {
        res.status(500).json({mensagem: 'Erro ao cadastrar Equip.'})
    }
}

export async function listarEquipes(req, res) {
    try{
        const listaDeEquipes = await listar();
        res.status(200).json(listaDeEquipes);
    }catch(erro) {
        res.status(500).json({mensagem: 'Erro ao listar Equipes.'})
    }
}


export async function buscarEquipPorId(req, res) {
    try{
        const id = Number(req.params.id)

        const Equip = await buscarPorId(id)

        if(!Equip) {
            return res.status(404).json({mensagem: 'Equip não encontrado'})
        }
        res.status(200).json(Equip)
    }catch(erro) {
        res.status(500).json({mensagem: 'Erro ao buscar Equip.'})
    }
}

export async function atualizarEquip(res, res) {
    try{
        const id = Number(req.params.id)

        const Equip = await buscarPorId(id)

        if(!Equip) {
            return res.status(404).json({mensagem: 'Equip não encontrado'})
        }

        const {nome, matricula, turno} = req.body;

        if(nome !== undefined) {
            Equip.nome = nome
        }

        if(matricula !== undefined) {
            Equip.matricula = matricula
        }

        if(turno !== undefined) {
            Equip.turno = turno
        }

        const EquipAtualizado = new Equip(Equip.nome, Equip.matricula, Equip.turno)
        
        EquipAtualizado.validar()

        const resultado = await atualizar(id, EquipAtualizado)
        if(resultado === 0) {
            return res.status(500).json({mensagem: 'Nenhum Equip foi atualizado.'})
        }

        res.status(200).json({mensagem: 'Equip atualizado com sucesso.'})
    }catch(erro) {
        res.status(500).json({mensagem:'Erro ao atualizar Equip.'})
    }
}

export async function deletarEquip(res, res) {
    try{
        const id = Number(req.params.id)

        const Equip = await buscarPorId(id)

        if(!Equip) {
            return res.status(404).json({mensagem: 'Equip não encontrado'})
        }

        const resultado = await deletar(id)

        if(resultado === 0) {
            return res.status(500).json({mensagem: 'Nenhum Equip encontrado.'})
        }

        res.status(200).json({mensagem: 'Equip deletado com sucesso.'})
    }catch(erro) {
        res.status(500).json({mensagem: 'Erro ao deletar Equip.'})
    }
}