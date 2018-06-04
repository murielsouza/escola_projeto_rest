export class Turma {
    id: number;
    disciplinaId: number;
    professorId: number;
    ano: string;
    alunos: number;

    constructor(id: number, disciplinaId: number, professorId: number, ano: string, alunos?: number) {
        this.id = id;
        this.disciplinaId = disciplinaId;
        this.professorId = professorId;
        this.ano = ano;
        this.alunos = alunos;
    }
}
