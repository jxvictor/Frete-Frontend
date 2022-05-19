import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Endereco } from './endereco.model';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  endpoint = 'http://localhost:8080/endereco';
  baseUrl: String = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private _snack: MatSnackBar) { }

  /*findAll():Observable<Endereco[]>{
    return this.http.get<Endereco[]>(this.endpoint)
  }*/
  /*findEnderecoPage(page: number, size: number):Observable<any>{
    return this.http.get(this.endpoint + `?page=${page}&size=${size}`);
  }*/

  create(endereco: Endereco): Observable<Endereco>{
    return this.http.post<Endereco>(this.endpoint, endereco);
  }

  mensagem(str: String): void{
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

  findByCep(cep: String): Observable<Endereco> {
    const url = `${this.endpoint}/${cep}`
    return this.http.get<Endereco>(url)
  }
}
