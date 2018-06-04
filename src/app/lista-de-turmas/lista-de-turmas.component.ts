import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-lista-de-turmas',
    templateUrl: './lista-de-turmas.component.html',
    styleUrls: ['./lista-de-turmas.component.css']
})
export class ListaDeTurmasComponent implements OnInit {
    @Input()
    turmas = null;

    @Input()
    professores = null;

    @Input()
    disciplinas = null;

    @Input()
    editando = null;

    @Output()
    onEditar = new EventEmitter<any>();

    @Output()
    onExcluir = new EventEmitter<any>();

    @Output()
    onBuscarDisciplina = new EventEmitter<any>()

    constructor() {
    }

    ngOnInit() {
    }

    excluir(turma) {
        this.onExcluir.emit(turma);
    }

    editar(turma) {
        this.onEditar.emit(turma);
    }
    buscarDisciplina(id) {
      this.onBuscarDisciplina.emit(id);
    }
}