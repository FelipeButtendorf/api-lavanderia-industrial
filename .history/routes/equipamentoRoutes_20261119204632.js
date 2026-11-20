import express from 'express';
import {cadastrarEquipamentos,atualizarEquipamentos,deletarEquipamentos,listarEquipamentoses,buscarEquipamentosPorId} from '../controller/EquipamentosController.js'

const router = express.Router()

router.post('/',cadastrarEquipamentos)
router.get('/',listarEquipamentoses)
router.get('/',buscarEquipamentosPorId)
router.patch('/',atualizarEquipamentos)
router.delete('/',deletarEquipamentos)

export default router;