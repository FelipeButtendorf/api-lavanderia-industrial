import express from 'express'
import colaboradorRoutes from '../routes/colaboradorRoutes.js'
import equipamentoRoutes from '../routes/equipamentoRoutes.js'
import servicoRoutes from '../routes/servicoRoutes.js'
import conexao from '../database/conexao.js'

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use('/colaborador', colaboradorRoutes)
app.use('/equipamento', equipamentoRoutes)
app.use('/servico', servicoRoutes)

async function iniciarServidor() {
    console.log(PORT)
    try{
        app.listen(PORT, () => )
    }
}