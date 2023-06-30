import { Component, OnInit } from '@angular/core';
import { Hamburguesa } from '../hamburguesa';
import { HamburguesaService } from '../hamburguesa.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hamburguesa-agregar',
  templateUrl: './hamburguesa-agregar.component.html'
})
export class HamburguesaAgregarComponent implements OnInit {
  hamburguesa: Hamburguesa = new Hamburguesa;

  formularioHamburguesa = new FormGroup({
    descripcion: new FormControl('', [Validators.required]),
    precio: new FormControl(''),
    stock: new FormControl('')
  });

  constructor(private hamburguesaServicio: HamburguesaService, private enrutador: Router) { }

  ngOnInit(): void {
  }

  envio() {
    if (this.formularioHamburguesa.valid)
      this.guardarHamburguesa();
    else
      this.enrutador.navigate(['/agregar-hamburguesa'])
  }

  guardarHamburguesa() {
    this.hamburguesaServicio.agregarHamburguesa(this.hamburguesa).subscribe({
      next: (datos) => {
        this.enviarALista();
      },
      error: (errores: any) => console.log(errores)
    });
  }

  enviarALista() {
    this.enrutador.navigate(['/hamburguesas'])
  }

}
