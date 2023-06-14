import { Component } from '@angular/core';
import { AtividadeService } from '../atividade.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atividade-andamento',
  templateUrl: './atividade-andamento.component.html',
  styleUrls: ['./atividade-andamento.component.css']
})
export class AtividadeAndamentoComponent {
  obterAtividadeAndamentoDados: any[any];
  constructor(private atividadeService: AtividadeService, private route: Router) { }

  ngOnInit(): void {
    this.atividadeService.obterAtividadeAndamento().subscribe(
      response => {
        this.obterAtividadeAndamentoDados = response;
      }
    )
  }

  concluirAtividade(id: number): void {
    this.atividadeService.concluirAtividade(id).subscribe(
      response => {
        console.log(response.message);
        window.location.reload()
      }
    )
  }

  editarAtividade(id: number): void {
    this.route.navigate([`atividade/andamento/editar/${id}`])
  }

  excluirAtividade(id: number): void {
    this.atividadeService.excluirAtividade(id).subscribe(
      response => {
        console.log(response.message);
        window.location.reload()
      }
    )
  }
}