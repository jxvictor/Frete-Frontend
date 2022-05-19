import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Page } from '../../page.model';
import { Entrega } from '../entrega.model';
import { EntregaService } from '../entrega.service';

@Component({
  selector: 'app-entrega-read',
  templateUrl: './entrega-read.component.html',
  styleUrls: ['./entrega-read.component.css']
})
export class EntregaReadComponent implements OnInit {

  entregas: Array<Entrega> = [];
  private page!: Page;
  pageEvent!: PageEvent;
  endpoint = 'http://localhost:8080/entrega';

  displayedColumns: string[] = ['peso', 'cepOrigem', 'cepDestino', 'nomeDestinatario', 'vlTotalFrete', 'dataPrevistaEntrega', 'dataConsulta', 'acoes'];

  constructor(
    private service: EntregaService,
    private router: Router)
    {}

  ngOnInit(): void {
    //this.findAll();
    this.pageEntregas(0, 5);
  }
  pageEntregas(page: number, size: number){
    this.service.findEntregaPage(page, size).subscribe(resposta => {
      this.page = resposta;
      this.entregas = this.page.content;
    })
  }
  onPaginateChange(event: PageEvent){
    let page = event.pageIndex;
    let size = event.pageSize;

    page = page;
    this.service.findEntregaPage(page, size).subscribe(resposta =>{
      this.page = resposta;
      this.entregas = this.page.content;
    });
  }

  /*findAll() {
    this.service.findAll().subscribe(res => {
      this.entregas = res;
    })
  }*/

  navegarParaCategoriaCreate() {
    this.router.navigate(["entrega/create"])
  }

}
