import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-apartment-new',
  templateUrl: './apartment-new.component.html',
  styleUrls: ['./apartment-new.component.css']
})
export class ApartmentNewComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  apartmentForm = this.fb.group({
    tipo: ['', Validators.required],
    nombre: ['', Validators.required],
    area: [0, Validators.required],
    piso: [0, Validators.required]
  })

  __onSubmit() {
    if(this.apartmentForm.valid) { 
      console.log(this.apartmentForm.value);
    } else {
      Swal.fire("Formulario no valido");
    }
  }

  ngOnInit(): void {
  }

}
