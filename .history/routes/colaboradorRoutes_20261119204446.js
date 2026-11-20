import express from 'express';
import {cadastrarColaborador,atualizarColaborador,deletarColaborador,listarColaboradores,buscarColaboradorPorId} from '../controller/colaboradorController.js'

const router = express