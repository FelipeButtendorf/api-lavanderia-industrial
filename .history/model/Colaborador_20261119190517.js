export class Colaborador {
    constructor(nome,matricula,turno){
        this.nome = nome;
        this.matricula = matricula;
        this.turno = turno;
    }

    validar() {

        if(!this.nome || this.nome.trim().length < 3) {
            throw new Error('O nome do colaborador precisa conter mais de 3 digitos.')
        }

        if(!this.matricula || !this.matricula.trim()) {
            throw new Error('O matricula do colaborador é obrigatório.')
        }

        if(!this.status || !this.status.trim()) {
            throw new Error('O status do colaborador é obrigatório.')
        }
    }
}