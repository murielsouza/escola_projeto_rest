import {Injectable} from '@angular/core';
import {Turma} from './turma.model';
import {Disciplina} from './disciplina.model';
import {Professor} from './professor.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DisciplinasService {
    API_URL = 'http://localhost:3000';

    constructor(private http: HttpClient) {
    }

    todas() {
        return this.http.get(this.API_URL + '/disciplinas');
    }

    encontrar(arg: number) {
        return this.http.get(this.API_URL + '/disciplinas/' + arg);
    }

}