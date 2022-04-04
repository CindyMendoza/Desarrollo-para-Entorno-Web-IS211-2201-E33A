import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proyecto-new',
  templateUrl: './proyecto-new.component.html',
  styleUrls: ['./proyecto-new.component.css']
})
export class ProyectoNewComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }
  proyectoForm = this.fb.group({
    co_proyecto: ['', Validators.required],
    no_proyecto: ['', Validators.required],
    fe_inicioproyecto: ['', Validators.required],
    fe_finproyecto: ['', Validators.required],
    co_cliente: ['', Validators.required],
    co_enlace: ['', Validators.required],
    co_repositorio: [''],
    co_colaboradores: ['']
  })
  
  __onSubmit() {
    if(this.proyectoForm.valid) {
      console.log(this.proyectoForm.value);
    } else {
      Swal.fire('Formulario no valido');
    }
  }


  ngOnInit(): void {
  }

}
