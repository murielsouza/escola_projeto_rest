import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { ListaDeTurmasComponent } from './lista-de-turmas/lista-de-turmas.component';
import { EditorDeTurmaComponent } from './editor-de-turma/editor-de-turma.component';
import { TurmasService } from './turmas.service';
import {HttpClientModule} from '@angular/common/http';
import { DisciplinasService } from './disciplinas.service';
import { ProfessoresService } from './professores.service';


@NgModule({
  declarations: [
    AppComponent,
    ListaDeTurmasComponent,
    EditorDeTurmaComponent
  ],
  imports: [
      NgbModule.forRoot(),
      BrowserModule,
      HttpClientModule,
      FormsModule
  ],
  providers: [TurmasService, DisciplinasService, ProfessoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
