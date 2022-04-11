import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cargo-new',
  templateUrl: './cargo-new.component.html',
  styleUrls: ['./cargo-new.component.css']
})
export class CargoNewComponent implements OnInit {


  constructor(
    private fb:FormBuilder
  ) { }
  cargosForm=this.fb.group({

    co_cargo:['',Validators.required],
    no_cargo: ['', Validators.required],
    descripcion_funcion: ['']
  })

  __onSubmit() {
    if(this.cargosForm.valid) {
      console.log(this.cargosForm.value);
    } else {
      // if(!this.contactusForm.value.persona.nombre.valid) Swal.fire('Nombre no valido');
      // if(!this.contactusForm.value.email.valid) Swal.fire('Email no valido');

      Swal.fire('Formulario no valido');
    }
  }

  ngOnInit(): void {
  }

}
