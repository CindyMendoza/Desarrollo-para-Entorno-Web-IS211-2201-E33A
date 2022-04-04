import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
import { ClienteService } from 'src/app/services/cliente.service';
=======
>>>>>>> aa953c0822971babb2c255901135d5d6cedf624a
=======
>>>>>>> aa953c0822971babb2c255901135d5d6cedf624a

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
<<<<<<< HEAD
  clientes : any = [] 

  constructor(
    private readonly clis: ClienteService
  ) { }

  __getClientes(){
    this.clis.__getClientes().subscribe((rest: any) => {
      this.clientes = rest.data;
      console.log(this.clientes)
    })
  }

  ngOnInit(): void {
    this.__getClientes();
=======

  constructor() { }

  ngOnInit(): void {
>>>>>>> aa953c0822971babb2c255901135d5d6cedf624a
  }

}
