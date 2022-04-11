import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.css']
})
export class ProjectNewComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  projectForm = this.fb.group({
    nombre: ['', Validators.required],
    ubicacion: ['', Validators.required],
    precio: [0, Validators.required]
  })

  __onSubmit() {
    if(this.projectForm.valid) {
      console.log(this.projectForm.value);
    } else {
      Swal.fire("Formulario no valido");
    }
  }

  ngOnInit(): void {
  }

}
