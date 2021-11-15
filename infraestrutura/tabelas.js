class Tabelas {
    init(conexao) {
        this.conexao = conexao
        this.criarAtendimentos()
    }

    criarAtendimentos() {
const sql = 'create table if not exists Atendimentos (id int not null auto_increment, cliente varchar(50) not null, pet varchar(20), servico varchar(20) not null, data datetime not null, dataCriacao datetime not null,  status varchar(20) not null, observacoes text, primary key(id))'

        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log(erro)
            } else {
                console.log('Tabela Atendimentos criada com sucesso')
            }
        })
    }
}


module.exports = new Tabelas