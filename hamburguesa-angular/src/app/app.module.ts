import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HamburguesaListaComponent } from './hamburguesa-lista/hamburguesa-lista.component';
import { HamburguesaAgregarComponent } from './hamburguesa-agregar/hamburguesa-agregar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HamburguesaEditarComponent } from './hamburguesa-editar/hamburguesa-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    HamburguesaListaComponent,
    HamburguesaAgregarComponent,
    HamburguesaEditarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
