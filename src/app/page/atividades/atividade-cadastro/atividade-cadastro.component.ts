import { Component } from '@angular/core';
import { AtividadeService } from '../atividade.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-atividade-cadastro',
  templateUrl: './atividade-cadastro.component.html',
  styleUrls: ['./atividade-cadastro.component.css']
})
export class AtividadeCadastroComponent {
  
  isCollapsed = true;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed
  }

  obterDadosAtividadesCadastro: any[any];
  descricao!: string;
  atividadeForm: FormGroup;

  constructor(private atividadeService: AtividadeService, private formBuilder: FormBuilder, private router: Router) {
    this.atividadeForm = this.formBuilder.group({
      descricao: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  cadastrarAtividade(): void {
    if (this.atividadeForm.valid) {
      const descricao = this.atividadeForm.value.descricao;
      this.atividadeService.cadastrarAtividade(descricao).subscribe(
        response => {
          console.log(response.message);
          this.router.navigate(['/']);
        }
      );
    }
  }
  
}