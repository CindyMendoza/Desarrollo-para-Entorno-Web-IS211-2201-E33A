import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargoService {
 

  constructor(
    private readonly http: HttpClient
    ) {}

    __getCargo(){
      return this.http.get("/api/cargo/getcargos");
    }
}
