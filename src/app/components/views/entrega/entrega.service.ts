import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Entrega } from './entrega.model';

@Injectable({
  providedIn: 'root'
})
export class EntregaService {

  endpoint = 'http://localhost:8080/entrega';
  baseUrl: String = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private _snack: MatSnackBar) { }

  /*findAll():Observable<Entrega[]>{
    return this.http.get<Entrega[]>(this.endpoint)
  }*/
  findEntregaPage(page: number, size: number):Observable<any>{
    return this.http.get(this.endpoint + `?page=${page}&size=${size}`);
  }

  create(entrega: Entrega): Observable<Entrega>{
    return this.http.post<Entrega>(this.endpoint, entrega);
  }

  mensagem(str: String): void{
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
