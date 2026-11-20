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
            throw new Error('A matricula do colaborador é obrigatório.')
        }

        if(!this.turno || !this.turno.trim()) {
            throw new Error('O turno do colaborador é obrigatório.')
        }
    }
}