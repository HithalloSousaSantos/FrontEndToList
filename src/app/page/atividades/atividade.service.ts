import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  url = environment.api;

  constructor(private http: HttpClient) {}

  cadastrarAtividade(descricao: string): Observable<any> {
    let urlRequest = `${this.url}atividade/cadastro`
    const body = { descricao };
    return this.http.post<any>(urlRequest, body);
  }

  obterAtividadeEditar(id: number): Observable<any> {
    let urlRequest = `${this.url}atividade/editar/${id}`;
    return this.http.get<any>(urlRequest)
  }

  editarAtividade(descricao: string, id: number): Observable<any> {
    let urlRequest = `${this.url}atividade/editar/${id}`
    const body = { descricao };
    console.log(urlRequest)
    return this.http.put<any>(urlRequest, body);
  }

  obterAtividadeAndamento(): Observable<any> {
    let urlRequest = `${this.url}atividade/andamento`
    return this.http.get<any>(encodeURI(urlRequest));
  }

  obterAtividadeConcluida(): Observable<any> {
    let urlRequest = `${this.url}atividade/concluida`
    return this.http.get<any>(encodeURI(urlRequest));
  }

  concluirAtividade(id: number): Observable<any> {
    const sequencial = JSON.stringify(id) 
    let urlRequest = `${this.url}atividade/andamento/concluida/${id}`
    return this.http.post<any>(urlRequest, sequencial)
  }
  
  excluirAtividade(id: number): Observable<any> {
    let urlRequest = `${this.url}atividade/delete/${id}`
    return this.http.delete<any>(urlRequest)
  }
}
