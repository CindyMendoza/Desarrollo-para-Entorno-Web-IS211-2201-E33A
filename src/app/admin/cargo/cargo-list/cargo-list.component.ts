import { Component, OnInit } from '@angular/core';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-cargo-list',
  templateUrl: './cargo-list.component.html',
  styleUrls: ['./cargo-list.component.css']
})
export class CargoListComponent implements OnInit {

  cargos : any = []
  

  constructor(
    private readonly cs: CargoService
  ) { }
  __getCargo() {
    this.cs.__getCargo().subscribe((rest: any) => {
      this.cargos = rest.data;
      console.log(this.cargos);
    })
  }

  ngOnInit(): void {
    this.__getCargo();
  }

}
