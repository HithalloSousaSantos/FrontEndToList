import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtividadeAndamentoComponent } from './atividade-andamento/atividade-andamento.component';
import { AtividadeCadastroComponent } from './atividade-cadastro/atividade-cadastro.component';
import { AtividadeConcluidaComponent } from './atividade-concluida/atividade-concluida.component';
import { AtividadeRoutingModule } from './atividade.routing';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AtividadeService } from './atividade.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AtividadeEditarComponent } from './atividade-editar/atividade-editar.component';


@NgModule({
  declarations: [
    AtividadeAndamentoComponent,
    AtividadeCadastroComponent,
    AtividadeConcluidaComponent,
    AtividadeEditarComponent,
  ],
  imports: [
    CommonModule,
    AtividadeRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  exports: [
    AtividadeAndamentoComponent,
    AtividadeCadastroComponent,
    AtividadeConcluidaComponent,
  ],
  providers: [
    AtividadeService
   ],
  bootstrap: [
    AtividadeAndamentoComponent,
    AtividadeCadastroComponent,
    AtividadeConcluidaComponent,
  ]
})
export class AtividadeModule { }
