// Arquivo que está subindo o servidor no ar

const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

conexao.connect((erro) => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')

        Tabelas.init(conexao)
        const app = customExpress()

app.listen(3000, () => console.log('servidor rodando na porta 3000'))
    }
})


