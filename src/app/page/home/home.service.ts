import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url = environment.api;

  constructor(private http: HttpClient) {}

  obterDados(): Observable<any> {
    let urlRequest = `${this.url}test`
    return this.http.get<any>(encodeURI(urlRequest))
  }
}
