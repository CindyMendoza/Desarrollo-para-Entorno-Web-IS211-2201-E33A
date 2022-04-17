import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
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
  }

}
