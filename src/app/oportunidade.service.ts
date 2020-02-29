import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OportunidadeService {

  apiUrl = 'http://localhost:8080/oportunidades';

  constructor(private HttpClient: HttpClient) { }

  
  listar(){
    return this.HttpClient.get(this.apiUrl);
  }

  adicionar(oportunidade: any){
    return this.HttpClient.post(this.apiUrl, oportunidade);
  }

}
