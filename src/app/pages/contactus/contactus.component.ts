import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  contactusForm = this.fb.group({
    persona: this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required]
    }),
    email: ['', [Validators.required, Validators.email]],
    mensaje: ['']
  })

  __onSubmit() {
    if(this.contactusForm.valid) {
      console.log(this.contactusForm.value);
    } else {
      // if(!this.contactusForm.value.persona.nombre.valid) Swal.fire('Nombre no valido');
      // if(!this.contactusForm.value.email.valid) Swal.fire('Email no valido');

      Swal.fire('Formulario no valido');
    }
  }

  ngOnInit(): void {
  }

}