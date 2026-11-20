import express from 'express';
import {cadastrarEquipamento,atualizarEquipamento,deletarEquipamento,listarEquipamentoes,buscarEquipamentoPorId} from '../controller/EquipamentoController.js'

const router = express.Router()

router.post('/',cadastrarEquipamento)
router.get('/',listarEquipamentoes)
router.get('/',buscarEquipamentoPorId)
router.patch('/',atualizarEquipamento)
router.delete('/',deletarEquipamento)

export default router;