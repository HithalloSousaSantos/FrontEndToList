import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
// Pai
const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./page/home/home.module').then(i => i.HomeModule)
  },

  {
    path: 'atividade',
    loadChildren: () => import('./page/atividades/atividade.module').then(i => i.AtividadeModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
