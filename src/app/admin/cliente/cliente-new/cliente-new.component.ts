import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-new',
  templateUrl: './cliente-new.component.html',
  styleUrls: ['./cliente-new.component.css']
})
export class ClienteNewComponent implements OnInit {

  contactos : any [];
  constructor(
    private fb: FormBuilder
  ) { }
  representanteForm= this.fb.group({
    co_contacto: ['',Validators.required],
    no_contacto: ['',Validators.required],
    correo: ['',Validators.required],
    telefono: ['',Validators.required]
  })

  clientesForm = this.fb.group({
    co_cliente: ['', Validators.required],
    no_cliente: ['', Validators.required],
    ruc_dni: ['', Validators.required],
    representante: []
  })
  
  __onSubmit() {
    if(this.clientesForm.valid) {
      console.log(this.clientesForm.value);
      //this.clientesForm.value.representante.value = this.contacto;//para probar
    } else {
      Swal.fire('Formulario no valido');
    }
  }
  
  __onAddContacto() {
    if(this.representanteForm.valid) {
      console.log(this.representanteForm.value);
      //this.contactos.push()
      //this.contacto = this.representanteForm.value;//para probar
      console.log(this.contactos);

    } else {
      Swal.fire('Formulario no valido');
    }
  }

  ngOnInit(): void {
  }

}
