import express from 'express';
import {cadastrarColaborador,atualizarColaborador,deletarColaborador,listarColaboradores,buscarColaboradorPorId} from '../controller/colaboradorController.js'

const router = express.Router()

router.post('/',cadastrarColaborador)
router.get('/',cadastrarColaborador)
router.get('/',cadastrarColaborador)
router.post('/',cadastrarColaborador)
router.post('/',cadastrarColaborador)