import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private readonly http: HttpClient
  ) { }

  __getClientes(){
    return this.http.get("/api/cliente/getclientes");
  }

}
