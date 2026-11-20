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

        if(!this.tipo_tecido || !this.tipo_tecido.trim()) {
            throw new Error('O tipo do tecido do equipamento é obrigatório.')
        }

        if(!this.valor || !this.valor > 0) {
            throw new Error('O valor do equipamento precisa ser maior do que zero.')
        }
    }
}