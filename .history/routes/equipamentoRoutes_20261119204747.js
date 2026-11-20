import express from 'express';
import {cadastrarEquipamento,atualizarEquipamento,deletarEquipamento,listarEquipamentos,buscarEquipamentoPorId} from '../controller/equipamentoController.js'

const router = express.Router()

router.post('/',cadastrarEquipamento)
router.get('/',listarEquipamentos)
router.get('/:id',buscarEquipamentoPorId)
router.patch('/:id',atualizarEquipamento)
router.delete('/:id',deletarEquipamento)

export default router;