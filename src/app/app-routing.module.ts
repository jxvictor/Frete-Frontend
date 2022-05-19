import { EntregaReadComponent } from './components/views/entrega/entrega-read/entrega-read.component';
import { EnderecoReadComponent } from './components/views/endereco/endereco-read/endereco-read.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { EntregaCreateComponent } from './components/views/entrega/entrega-create/entrega-create.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'endereco',
    component: EnderecoReadComponent
  },
  {
    path: 'entrega',
    component: EntregaReadComponent
  },
  {
    path: 'entrega/create',
    component: EntregaCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
