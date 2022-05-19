import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entrega } from '../entrega.model';
import { EntregaService } from '../entrega.service';

@Component({
  selector: 'app-entrega-create',
  templateUrl: './entrega-create.component.html',
  styleUrls: ['./entrega-create.component.css']
})
export class EntregaCreateComponent implements OnInit {

  entrega: Entrega = {}
  //entrega: Entrega = new Entrega();

  constructor(private service: EntregaService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.entrega).subscribe((resposta: any) => {
      console.log(resposta);
      this.router.navigate(['entregas'])
      this.service.mensagem('Entrega criada com sucesso!');
    }, (error: any) => {
      console.log(error);
    })
  }

  cancel(): void {
    this.router.navigate(['entrega'])
    this.service.mensagem('Você cancelou a criação de uma nova entrega!');
  }

}
