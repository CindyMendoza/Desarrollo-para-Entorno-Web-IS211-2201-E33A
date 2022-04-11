import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(
    private readonly http: HttpClient
  ) { }

  __getEmpleados(){
    return this.http.get("/api/empleado/getempleados");
  }
  
}
