import { Component, OnInit } from '@angular/core';
import { AtividadeService } from '../atividade.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-atividade-editar',
  templateUrl: './atividade-editar.component.html',
  styleUrls: ['./atividade-editar.component.css']
})
export class AtividadeEditarComponent implements OnInit {
  idAtividade!: number
  atividadeForm!: FormGroup;


  constructor(private atividadeService: AtividadeService, private formBuilder: FormBuilder, private router: Router, private routeActivated: ActivatedRoute) {
    this.routeActivated.params.subscribe(parametros => {
      this.idAtividade = parametros[
        'id'
      ]
    })
  }

  ngOnInit(): void {
    this.atividadeForm = this.formBuilder.group({
      descricao: ['', Validators.required]
    });

    this.atividadeService.obterAtividadeEditar(this.idAtividade).subscribe(
      response => {
        this.atividadeForm.controls['descricao'].setValue(response.atividade.descricao)
      }
    )
  }

  editarAtividade(form:any): void {
    if (this.atividadeForm.valid) {
      const descricao = form.descricao;
      this.atividadeService.editarAtividade(descricao, this.idAtividade).subscribe(
        () => {
          this.router.navigate(['/']);
        },(error) => {
          console.log(error);
        }
      )
    }
  }
}
