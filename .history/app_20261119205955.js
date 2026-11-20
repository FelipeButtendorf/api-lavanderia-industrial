import express from 'express'
import colaboradorRoutes from './routes/colaboradorRoutes.js'
import equipamentoRoutes from './routes/equipamentoRoutes.js'
import servicoRoutes from './routes/servicoRoutes.js'
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
        app.listen(PORT, () => {
            console.log(`Servidor rodando em https://localhost:${PORT}`)
        })
    }catch(erro) {
        console.log('Erro ao conectar com o banco de dados')
        console.log(erro.mensagem)
        process.exit(1)
    }
}

iniciarServidor()