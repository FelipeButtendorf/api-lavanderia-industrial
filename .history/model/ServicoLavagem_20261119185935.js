export class Servico {
    constructor(descricao,tipo_tecido,valor){
        this.descricao = descricao;
        this.tipo_tecido = tipo_tecido;
        this.valor = valor;
    }

    validar() {

        if(!this.descricao || this.descricao.trim().length)
    }
}