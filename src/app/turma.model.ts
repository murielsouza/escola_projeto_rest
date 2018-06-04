export class Turma {
    id: number;
    disciplinaId: number;
    professorId: number;
    ano: string;
    qtdAlunos: number;

    constructor(id: number, disciplinaId: number, professorId: number, ano: string, qtdAlunos?: number) {
        this.id = id;
        this.disciplinaId = disciplinaId;
        this.professorId = professorId;
        this.ano = ano;
        this.qtdAlunos = qtdAlunos;
    }
}
