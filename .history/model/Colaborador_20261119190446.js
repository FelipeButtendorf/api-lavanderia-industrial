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

        validar() {

        if(!this.nome || this.nome.trim().length < 3) {
            throw new Error('O nome do equipamento precisa conter mais de 3 digitos.')
        }

        if(!this.patrimonio || !this.patrimonio.trim()) {
            throw new Error('O patrimonio do equipamento é obrigatório.')
        }

        if(!this.status || !this.status.trim()) {
            throw new Error('O status do equipamento é obrigatório.')
        }
    }
    }
}