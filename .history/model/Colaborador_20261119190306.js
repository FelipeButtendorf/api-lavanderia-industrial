export class Colaborador {
    constructor(nome,matricula,turno){
        this.nome = nome;
        this.matricula = matricula;
        this.turno = turno;
    }

    validar() {

        if(!this.descricao || this.descricao.trim().length < 3) {
            throw new Error('A descricao do serviço de lavagem precisa conter mais de 3 digitos.')
        }

        if(!this.tipo_tecido || !this.tipo_tecido.trim()) {
            throw new Error('O tipo do tecido do serviço de lavagem é obrigatório.')
        }

        if(!this.valor || !this.valor > 0) {
            throw new Error('O valor do serviço de lavagem precisa ser maior do que zero.')
        }
    }
}