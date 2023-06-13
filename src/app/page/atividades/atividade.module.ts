import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtividadeAndamentoComponent } from './atividade-andamento/atividade-andamento.component';
import { AtividadeCadastroComponent } from './atividade-cadastro/atividade-cadastro.component';
import { AtividadeConcluidaComponent } from './atividade-concluida/atividade-concluida.component';
import { AtividadeRoutingModule } from './atividade.routing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    AtividadeAndamentoComponent,
    AtividadeCadastroComponent,
    AtividadeConcluidaComponent,
  ],
  imports: [
    CommonModule,
    AtividadeRoutingModule,
    HttpClientModule,
    BrowserModule,
  ],
  exports: [
    AtividadeAndamentoComponent,
    AtividadeCadastroComponent,
    AtividadeConcluidaComponent,
  ]
})
export class AtividadeModule { }
