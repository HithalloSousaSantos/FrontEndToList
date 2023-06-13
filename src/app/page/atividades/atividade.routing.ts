import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AtividadeAndamentoComponent } from "./atividade-andamento/atividade-andamento.component";
import { AtividadeConcluidaComponent } from "./atividade-concluida/atividade-concluida.component";
import { AtividadeCadastroComponent } from "./atividade-cadastro/atividade-cadastro.component";

const routes: Routes = [
    {
        path: 'andamento',
        component: AtividadeAndamentoComponent
    },

    {
        path: 'concluido',
        component: AtividadeConcluidaComponent
    },

    {
        path: 'cadastro',
        component: AtividadeCadastroComponent
    },
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