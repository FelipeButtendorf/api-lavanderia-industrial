export class Equipamento {
    constructor(nome,patrimonio,status){
        this.nome = nome;
        this.patrimonio = patrimonio;
        this.status = status;
    }

    validar() {

        if(!this.nome || this.nome.trim().length < 3) {
            throw new Error('O nome do equipamento precisa conter mais de 3 digitos.')
        }

        if(!this.patrimonio || !this.patrimonio.trim()) {
            throw new Error('O patrimonio do equipamento é obrigatório.')
        }

        if(!this.patrimonio || !this.patrimonio.trim()) {
            throw new Error('O patrimonio do equipamento é obrigatório.')
        }
    }
}