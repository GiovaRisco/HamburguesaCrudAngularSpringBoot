import { Component, OnInit } from '@angular/core';
import { Hamburguesa } from '../hamburguesa';
import { HamburguesaService } from '../hamburguesa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hamburguesa-lista',
  templateUrl: './hamburguesa-lista.component.html'
})
export class HamburguesaListaComponent implements OnInit {

  hamburguesas: Hamburguesa[]

  constructor(private hamburguesaServicio: HamburguesaService,
    private enrutador: Router) { }

  ngOnInit(): void {
    this.obtenerHamburguesas();
  }

  private obtenerHamburguesas() {
    this.hamburguesaServicio.obtenerHamburguesasLista().subscribe(
      (datos => {
        this.hamburguesas = datos;
      })
    );
  }

  editarHamburguesa(id:number){
    this.enrutador.navigate(['editar-hamburguesa',id]);
  }

  eliminarHamburguesa(id:number){
    this.hamburguesaServicio.eliminarHamburguesa(id).subscribe(
      {
        next: (datos) => this.obtenerHamburguesas(),
        error: (errores: any) => console.log(errores)
      }
    );
  }

}
