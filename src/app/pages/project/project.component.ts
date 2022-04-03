import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApartmentService } from 'src/app/services/apartment.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project : any = []
  apartments : any = []

  constructor(
    private readonly ps: ProjectService,
    private readonly as: ApartmentService,
    private ar: ActivatedRoute
  ) { }

  __getProjectById(id: number) {
    this.ps.__getProjects().subscribe((rest: any) => {
      this.project = rest.data.filter((item: {id: number }) => item.id == id);
      // console.log(this.project);
    })
  }

  __getApartmentsByProjectId(id: number) {
    this.as.__getApartments().subscribe((rest: any) => {
      this.apartments = rest.data.filter((item: {projectId: number}) => item.projectId == id);
      // console.log(this.apartments);
    })
  }

  ngOnInit(): void {
    this.ar.params.subscribe((p: Params) => {
      if(p.id) {
        this.__getProjectById(p.id);
        this.__getApartmentsByProjectId(p.id);
      }
    }) 
  }

}
