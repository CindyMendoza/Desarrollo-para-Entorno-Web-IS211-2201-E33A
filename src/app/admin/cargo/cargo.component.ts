import { Component, OnInit } from '@angular/core';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {

  cargos : any = [];

  constructor(
    private readonly csc: CargoService
  ) { }

  __getCargo() {
    this.csc.__getCargo().subscribe((rest: any) => {
      this.cargos = rest.data;
      console.log(this.cargos);
    })
  }



  ngOnInit(): void {
    this.__getCargo();
  }

}
