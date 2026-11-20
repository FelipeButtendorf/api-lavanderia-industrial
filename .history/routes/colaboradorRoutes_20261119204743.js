import express from 'express';
import {cadastrarColaborador,atualizarColaborador,deletarColaborador,listarColaboradores,buscarColaboradorPorId} from '../controller/colaboradorController.js'

const router = express.Router()

router.post('/',cadastrarColaborador)
router.get('/',listarColaboradores)
router.get('/:id',buscarColaboradorPorId)
router.patch('/:id',atualizarColaborador)
router.delete('/:id',deletarColaborador)

export default router;