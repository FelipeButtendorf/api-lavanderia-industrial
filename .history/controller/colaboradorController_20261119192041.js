import {Colaborador} from '../model/Colaborador.js';
import {atualizar, listar, buscarPorId, deletar, cadastrar} from '../rtepository/colaboradorRepository.js';

export async function cadastrarColaborador(req,res) {
    try{
        const {nome, matricula, turno} = req.body;
        if(!nome || !matricula || !turno) {
            return res.status(400).json({mensagem: 'Todos os campos são obrigatórios.'})
        }

        const colaborador = new Colaborador(nome, matricula, turno);
        
    }
}