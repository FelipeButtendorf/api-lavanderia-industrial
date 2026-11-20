import express from 'express';
import {cadastrarServico,atualizarServico,deletarServico,listarServicos,buscarServicoPorId} from '../controller/servicoController.js'

const router = express.Router()

router.post('/',cadastrarServico)
router.get('/',listarServicos)
router.get('/:id',buscarServicoPorId)
router.patch('/:id',atualizarServico)
router.delete('/:id',deletarServico)

export default router;