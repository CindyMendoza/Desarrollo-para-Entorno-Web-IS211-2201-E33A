import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-proyecto-list',
  templateUrl: './proyecto-list.component.html',
  styleUrls: ['./proyecto-list.component.css']
})
export class ProyectoListComponent implements OnInit {
  proyectos : any = [] 

  constructor(
    private readonly pros: ProyectoService
  ) { }

  __getProyectos(){
    this.pros.__getProyectos().subscribe((rest: any) => {
      this.proyectos = rest.data;
      console.log(this.proyectos)
    })
  }

  ngOnInit(): void {
    this.__getProyectos();
  }
}
