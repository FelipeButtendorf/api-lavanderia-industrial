import express from 'express';
import {cadastrarEquipamento,atualizarEquipamento,deletarEquipamento,listarEquipamentos,buscarEquipamentoPorId} from '../controller/equipamentoController.js'

const router = express.Router()

router.post('/',cadastrarEquipamento)
router.get('/',listarEquipamentos)
router.get('/',buscarEquipamentoPorId)
router.patch('/',atualizarEquipamento)
router.delete('/',deletarEquipamento)

export default router;