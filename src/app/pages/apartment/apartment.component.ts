import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApartmentService } from 'src/app/services/apartment.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {

  apartment : any = [];
  project: any = [];

  constructor(
    private readonly ps: ProjectService,
    private readonly as: ApartmentService,
    private ar: ActivatedRoute
  ) { }

  __getApartmentById(id: number) {
    this.as.__getApartments().subscribe((rest: any) => {
      this.apartment = rest.data.filter((item: { id: number }) => item.id == id );
      // console.log(this.apartment);
    })
  }

  __getProjectById(id: number) {
    this.ps.__getProjects().subscribe((rest: any) => {
      this.project = rest.data.filter((item: { id: number }) => item.id == id);
      // console.log(this.project);
    })
  }

  ngOnInit(): void {
    this.ar.params.subscribe((p: Params) => {
      if(p.idproject && p.id) {
        this.__getApartmentById(p.id);
        this.__getProjectById(p.idproject);
      }
    })
  }

}
