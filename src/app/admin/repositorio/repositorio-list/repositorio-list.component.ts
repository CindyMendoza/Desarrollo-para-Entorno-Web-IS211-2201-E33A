import { Component, OnInit } from '@angular/core';
import { RepositorioService } from 'src/app/services/repositorio.service';

@Component({
  selector: 'app-repositorio-list',
  templateUrl: './repositorio-list.component.html',
  styleUrls: ['./repositorio-list.component.css']
})
export class RepositorioListComponent implements OnInit {
  repositorios : any = [] 

  constructor(
    private readonly reps: RepositorioService
  ) { }

  __getrepositorios(){
    this.reps.__getRepositorios().subscribe((rest: any) => {
      this.repositorios = rest.data;
      console.log(this.repositorios)
    })
  }

  ngOnInit(): void {
    this.__getrepositorios();
  }

}
