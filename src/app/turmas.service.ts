import {Injectable} from '@angular/core';
import {Turma} from './turma.model';
import {Disciplina} from './disciplina.model';
import {Professor} from './professor.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TurmasService {
    API_URL = 'http://localhost:3000';
    status = false;

    constructor(private http: HttpClient) {
    }

    todas() {
        return this.http.get(this.API_URL + '/turmas');
    }

    salvar(id: number, disciplinaId: number, professorId: number, ano: string, alunos: number) {
        const turma = {disciplinaId: disciplinaId, professorId: professorId, ano: ano, alunos: alunos};
        this.encontrar(id)
            .subscribe(() => {
                this.status = true;
            }, () => this.status = false);

        if (this.status) {
            return this.http.patch(this.API_URL + '/turmas/' + id, turma);
        } else {
            return this.http.post(this.API_URL + '/turmas', turma);
        }
    }

    excluir(turma: number | Turma) {
        let id;
        if (typeof(turma) === 'number') {
            id = turma;
        } else {
            id = turma.id;
        }
        return this.http.delete(this.API_URL + '/turmas/' + id);
    }

    encontrar(arg: number) {
        return this.http.get(this.API_URL + '/turmas/' + arg);
    }

}
