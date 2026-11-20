export class Servico {
    constructor(descricao,tipo_tecido,valor){
        this.descricao = descricao;
        this.tipo_tecido = tipo_tecido;
        this.valor = valor;
    }

    validar() {

        if(!this.descricao || this.descricao.trim().length < 3) {
            throw new Error('A descricao do serviço de lavagem precisa conter mais de 3 digitos.')
        }

        if(!this.material )
    }
}