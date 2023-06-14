import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AtividadeAndamentoComponent } from "./atividade-andamento/atividade-andamento.component";
import { AtividadeConcluidaComponent } from "./atividade-concluida/atividade-concluida.component";
import { AtividadeCadastroComponent } from "./atividade-cadastro/atividade-cadastro.component";
import { AtividadeEditarComponent } from "./atividade-editar/atividade-editar.component";

const routes: Routes = [
    {
        path: 'andamento',
        component: AtividadeAndamentoComponent
    },

    {
        path: 'concluida',
        component: AtividadeConcluidaComponent
    },

    {
        path: 'cadastro',
        component: AtividadeCadastroComponent
    },

    {
        path: 'andamento/editar/:id',
        component: AtividadeEditarComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AtividadeRoutingModule {}