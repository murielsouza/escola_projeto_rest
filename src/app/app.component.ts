import {Component} from '@angular/core';
import {Turma} from './turma.model';
import {TurmasService} from './turmas.service';
import {DisciplinasService} from './disciplinas.service';
import {ProfessoresService} from './professores.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    editando: any = new Turma(null, null, null, null, null);
    status_lista = null;
    excluir_ok = false;
    excluir_erro = false;
    salvar_ok = false;
    salvar_erro = false;
    turmas = null;
    disciplinas = null;
    professores = null;
    num = null;

    constructor(private turmasService: TurmasService,  private disciplinasService: DisciplinasService, private professoresService: ProfessoresService) {
        this.atualizarLista();
    }

    atualizarLista() {
        this.turmasService.todas()
            .subscribe(turmas => {
                this.turmas = turmas;
                this.status_lista = true;
            }, () => this.status_lista = false);

        this.disciplinasService.todas()
            .subscribe(disciplinas => {
                this.disciplinas = disciplinas;
                this.status_lista = true;
            }, () => this.status_lista = false);

        this.professoresService.todas()
            .subscribe(professores => {
                this.professores = professores;
                this.status_lista = true;
            }, () => this.status_lista = false);

    }

    buscarDisciplina(idDisciplina: number) {
        this.disciplinasService.encontrar(idDisciplina)
            .subscribe(disciplina => {
                this.disciplinas = disciplina;
                this.status_lista = true;
            }, () => this.status_lista = false);

    }

    salvar() {
        this.turmasService.salvar(this.editando.id, this.editando.disciplinaId, this.editando.professorId, this.editando.ano, this.editando.alunos)
            .subscribe(() => {
                    this.redefinir();
                    this.salvar_ok = true;
                    this.atualizarLista();
                },
                () => {
                    this.redefinir();
                    this.salvar_erro = true;
                }
            );
    }


    excluir(turma) {
        if (this.editando.id === turma.id) {
            alert('Você não pode excluir uma turma que está editando');
        } else {
            if (confirm('Tem certeza que deseja excluir a turma "' + turma.id + '"?')) {
                this.turmasService.excluir(turma)
                    .subscribe(() => {
                            this.redefinir();
                            this.excluir_ok = true;
                            this.atualizarLista();
                        },
                        () => {
                            this.redefinir();
                            this.excluir_erro = true;
                        });
            }
        }
    }

    editar(t) {
        this.redefinir();
        this.turmasService.encontrar(t.id)
            .subscribe(turma => this.editando = turma);
    }

    cancelar() {
        this.redefinir();
    }

    redefinir() {
        this.editando = new Turma(null, null, null, null, null);
        this.excluir_ok = false;
        this.salvar_ok = false;
        this.excluir_erro = false;
        this.salvar_erro = false;
    }
}