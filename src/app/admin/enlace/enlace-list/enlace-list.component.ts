import { Component, OnInit } from '@angular/core';
import { EnlaceService } from 'src/app/services/enlace.service';

@Component({
  selector: 'app-enlace-list',
  templateUrl: './enlace-list.component.html',
  styleUrls: ['./enlace-list.component.css']
})
export class EnlaceListComponent implements OnInit {
  enlaces : any = [] 

  constructor(
    private readonly ens: EnlaceService
  ) { }

  __getEnlaces(){
    this.ens.__getEnlace().subscribe((rest: any) => {
      this.enlaces = rest.data;
      console.log(this.enlaces)
    })
  }

  ngOnInit(): void {
    this.__getEnlaces();
  }

}
