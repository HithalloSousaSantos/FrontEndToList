import { Component } from '@angular/core';
import { AtividadeService } from '../atividade.service';

@Component({
  selector: 'app-atividade-cadastro',
  templateUrl: './atividade-cadastro.component.html',
  styleUrls: ['./atividade-cadastro.component.css']
})
export class AtividadeCadastroComponent {
  constructor(private atividadeService: AtividadeService) {}

  ngOnInit(): void {
    // this.atividadeService.obterDados().subscribe(
    //   response => (
    //     console.log(response)
    //   )
    // )
  }
}
