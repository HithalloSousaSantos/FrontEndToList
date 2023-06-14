import { Component } from '@angular/core';
import { AtividadeService } from '../atividade.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atividade-concluida',
  templateUrl: './atividade-concluida.component.html',
  styleUrls: ['./atividade-concluida.component.css']
})
export class AtividadeConcluidaComponent {
  atividadeForm: FormGroup;

  isCollapsed = true;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed
  }

  constructor(private route: Router, private atividadeService: AtividadeService, private formBuilder: FormBuilder) {
    this.atividadeForm = this.formBuilder.group({
      descricao: ['', Validators.required]
    });
  }

  obterAtividadeConcluidaDados: any[any];
  ngOnInit(): void {
    this.atividadeService.obterAtividadeConcluida().subscribe(
      response => {
        this.obterAtividadeConcluidaDados = response;
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
