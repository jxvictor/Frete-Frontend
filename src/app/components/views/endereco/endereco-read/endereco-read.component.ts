import { Endereco } from './../endereco.model';
import { Component, OnInit } from '@angular/core';
import { EnderecoService } from '../endereco.service';
import { Router } from '@angular/router';
import { Page } from '../../page.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-endereco-read',
  templateUrl: './endereco-read.component.html',
  styleUrls: ['./endereco-read.component.css']
})
export class EnderecoReadComponent implements OnInit {

  enderecos: Array<Endereco> = [];
  displayedColumns: string[] = ['cep', 'logradouro', 'complemento', 'bairro', 'localidade', 'uf', 'ibge', 'acoes'];

  private page!: Page;
  pageEvent!: PageEvent;
  endpoint = 'http://localhost:8080/endereco';

  constructor(
    private service: EnderecoService,
    private router: Router)
    {}

  ngOnInit(): void {
    //this.findAll();
    //this.pageEnderecos(0, 5);
  }
  /*pageEnderecos(page: number, size: number){
    this.service.findEnderecoPage(page, size).subscribe(resposta => {
      this.page = resposta;
      this.enderecos = this.page.content;
    })
  }
  onPaginateChange(event: PageEvent){
    let page = event.pageIndex;
    let size = event.pageSize;

    page = page;
    this.service.findEnderecoPage(page, size).subscribe(resposta =>{
      this.page = resposta;
      this.enderecos = this.page.content;
    });
  }*/

  /*findAll() {
    this.service.findAll().subscribe(res => {
      this.enderecos = res;
    })
  }*/

  navegarParaCategoriaCreate() {
    this.router.navigate(["endereco/create"])
  }

}
