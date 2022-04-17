import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {
  empleados : any = [] 

  constructor(
    private readonly emps: EmpleadoService
  ) { }

  __getEmpleados(){
    this.emps.__getEmpleados().subscribe((rest: any) => {
      this.empleados = rest.data;
      console.log(this.empleados)
    })
  }

  ngOnInit(): void {
    this.__getEmpleados();
  }

}
