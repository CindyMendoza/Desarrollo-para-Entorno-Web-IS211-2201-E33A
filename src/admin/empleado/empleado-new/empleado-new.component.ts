import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
=======
>>>>>>> aa953c0822971babb2c255901135d5d6cedf624a

@Component({
  selector: 'app-empleado-new',
  templateUrl: './empleado-new.component.html',
  styleUrls: ['./empleado-new.component.css']
})
export class EmpleadoNewComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }
  empleadoForm = this.fb.group({
    co_empleado: ['', Validators.required],
    no_empleado: ['', Validators.required],
    dni: ['', Validators.required],
    correo: ['', Validators.required],
    telefono: [''],
    co_cargo: ['']
  })
  
  __onSubmit() {
    if(this.empleadoForm.valid) {
      console.log(this.empleadoForm.value);
    } else {
      Swal.fire('Formulario no valido');
    }
  }

  ngOnInit(): void {
  }
}
