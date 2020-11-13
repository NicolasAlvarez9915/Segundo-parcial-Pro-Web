import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './Prs/registro/registro.component';
import { ConsultaComponent } from './Prs/consulta/consulta.component';

const routes: Routes = [
  { path: 'Registro', component: RegistroComponent },
  { path: 'Consulta', component: ConsultaComponent }
];
  


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
