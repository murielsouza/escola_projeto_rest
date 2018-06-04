export class Professor {
    id: number;
    nome: string;
    descricao: string;

    constructor(id: number, nome: string, descricao?: string) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
}
