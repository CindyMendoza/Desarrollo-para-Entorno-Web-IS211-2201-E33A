import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepositorioService {

  constructor(
    private readonly http: HttpClient
  ) { }
  
  __getRepositorios(){
    return this.http.get("/api/repositorio/getrepositorio")
  }
}
