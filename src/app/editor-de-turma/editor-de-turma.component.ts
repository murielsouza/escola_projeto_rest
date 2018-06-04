import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Turma} from 'C:/Users/Muriel/Desktop/LPWEB/escola-application/src/app/turma.model';
import {Disciplina} from '../disciplina.model';
import {Professor} from '../professor.model';

@Component({
    selector: 'app-editor-de-turma',
    templateUrl: './editor-de-turma.component.html',
    styleUrls: ['./editor-de-turma.component.css']
})
export class EditorDeTurmaComponent implements OnInit {
    @Input()
    turma = new Turma(null, null, null, null, null);

    @Input()
    disciplina = new Disciplina(null, null, null);

    @Input()
    professor = new Professor(null, null, null);

    @Output()
    onSalvar = new EventEmitter<any>();

    @Output()
    onCancelar = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
    }

    salvar() {
        this.onSalvar.emit(this.turma);
    }

    cancelar() {
        this.onCancelar.emit(null);
    }

}