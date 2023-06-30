import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HamburguesaListaComponent } from './hamburguesa-lista/hamburguesa-lista.component';
import { HamburguesaAgregarComponent } from './hamburguesa-agregar/hamburguesa-agregar.component';
import { HamburguesaEditarComponent } from './hamburguesa-editar/hamburguesa-editar.component';

const routes: Routes = [
  {path:'hamburguesas',component: HamburguesaListaComponent},
  {path:'',redirectTo: 'hamburguesas',pathMatch:'full'},
  {path:'agregar-hamburguesa',component:HamburguesaAgregarComponent},
  {path:'editar-hamburguesa/:id',component:HamburguesaEditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
