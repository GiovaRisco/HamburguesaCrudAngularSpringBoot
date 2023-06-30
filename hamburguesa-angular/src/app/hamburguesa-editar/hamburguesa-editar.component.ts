import { Component, OnInit } from '@angular/core';
import { HamburguesaService } from '../hamburguesa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Hamburguesa } from '../hamburguesa';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hamburguesa-editar',
  templateUrl: './hamburguesa-editar.component.html'
})
export class HamburguesaEditarComponent implements OnInit {

  hamburguesa: Hamburguesa = new Hamburguesa;
  id: number

  formularioHamburguesa = new FormGroup({
    descripcion: new FormControl('', [Validators.required]),
    precio: new FormControl(''),
    stock: new FormControl('')
  });

  constructor(private hamburguesaServicio: HamburguesaService, private enrutador: Router,
    private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.ruta.snapshot.params['id'];
    this.hamburguesaServicio.obtenerHamburguesa(this.id).subscribe(
      {
        next: (datos) => {
          this.hamburguesa = datos
        },
        error: (errores: any) => console.log(errores)
      }
    );
  }

  envio() {
    if (this.formularioHamburguesa.valid)
      this.guardarHamburguesa();
    else
      this.enrutador.navigate(['/editar-hamburguesa'])
  }

  guardarHamburguesa() {
    this.hamburguesaServicio.editarHamburguesa(this.id, this.hamburguesa).subscribe(
      {
        next: (datos) => {
          this.irHamburguesaLista();
        },
        error: (errores: any) => console.log(errores)
      }
    );
  }

  irHamburguesaLista() {
    this.enrutador.navigate(['/hamburguesas'])
  }

}
