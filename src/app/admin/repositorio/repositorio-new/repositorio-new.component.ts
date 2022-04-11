import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-repositorio-new',
  templateUrl: './repositorio-new.component.html',
  styleUrls: ['./repositorio-new.component.css']
})
export class RepositorioNewComponent implements OnInit {

  constructor(
    private fb:FormBuilder
  ) { }
  repositorioForm=this.fb.group({

    co_repositorio:['',Validators.required],
    url_repositorio: ['', Validators.required],
    version: ['',Validators.required],
    registro_de_credenciales: ['',Validators.required]
  })
  __onSubmit() {
    if(this.repositorioForm.valid) {
      console.log(this.repositorioForm.value);
    } else {
      // if(!this.contactusForm.value.persona.nombre.valid) Swal.fire('Nombre no valido');
      // if(!this.contactusForm.value.email.valid) Swal.fire('Email no valido');

      Swal.fire('Formulario no valido');
    }
  }


  ngOnInit(): void {
  }

}
