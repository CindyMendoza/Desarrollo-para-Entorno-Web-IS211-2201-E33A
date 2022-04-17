import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(
    private readonly http: HttpClient
  ) { }

  __getProyectos(){
    return this.http.get("/api/proyecto/getproyectos");
  }
}
