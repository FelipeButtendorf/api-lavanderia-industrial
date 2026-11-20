import express from 'express';
import {cadastrarServico,atualizarServico,deletarServico,listarServicos,buscarServicoPorId} from '../controller/SservicoController.js'

const router = express.Router()

router.post('/',cadastrarServico)
router.get('/',listarServicos)
router.get('/',buscarServicoPorId)
router.patch('/',atualizarServico)
router.delete('/',deletarServico)

export default router;