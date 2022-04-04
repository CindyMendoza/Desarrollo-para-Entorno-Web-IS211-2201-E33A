import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnlaceService {

  constructor(
    private readonly http: HttpClient
  ) { }
  
  __getEnlace(){
    return this.http.get("/api/enlaces/getenlaces")
  }
}
