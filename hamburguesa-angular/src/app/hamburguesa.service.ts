import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Hamburguesa } from './hamburguesa';
import { Observable } from 'rxjs';
import { outputAst } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class HamburguesaService {

  private urlbase = "http://localhost:8080/burguer-app/hamburguesas"

  constructor(private httpCliente: HttpClient) { }

  obtenerHamburguesasLista(): Observable<Hamburguesa[]>{
    return this.httpCliente.get<Hamburguesa[]>(this.urlbase);
  }

  agregarHamburguesa(hamburguesa: Hamburguesa):Observable<object>{
    return this.httpCliente.post(this.urlbase,hamburguesa);
  }

  obtenerHamburguesa(id: number){
    return this.httpCliente.get<Hamburguesa>(`${this.urlbase}/${id}`);
  }

  editarHamburguesa(id:number,hamburguesa: Hamburguesa){
    return this.httpCliente.put(`${this.urlbase}/${id}`,hamburguesa);
  }

  eliminarHamburguesa(id:number){
    return this.httpCliente.delete(`${this.urlbase}/${id}`);
  }
}
