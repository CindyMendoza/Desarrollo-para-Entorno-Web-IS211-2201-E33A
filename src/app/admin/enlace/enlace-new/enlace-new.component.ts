import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-enlace-new',
  templateUrl: './enlace-new.component.html',
  styleUrls: ['./enlace-new.component.css']
})
export class EnlaceNewComponent implements OnInit {

  constructor(
    private fb:FormBuilder
  ) { }
  enlaceForm=this.fb.group({

    co_enlace:['',Validators.required],
    no_url: ['', Validators.required],
    no_dominio: ['',Validators.required],
    no_subdominio: ['',Validators.required],
    so_servidor:['',Validators.required]

  })
  __onSubmit() {
    if(this.enlaceForm.valid) {
      console.log(this.enlaceForm.value);
    } else {
      // if(!this.contactusForm.value.persona.nombre.valid) Swal.fire('Nombre no valido');
      // if(!this.contactusForm.value.email.valid) Swal.fire('Email no valido');

      Swal.fire('Formulario no valido');
    }
  }

  ngOnInit(): void {
  }

}
