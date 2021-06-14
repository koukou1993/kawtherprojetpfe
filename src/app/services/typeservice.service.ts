import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeserviceService {

  serviceUrl: string = "http://localhost:8090/typeservice";
  

  constructor(private httpClient : HttpClient) { }


  getAllTypeservice() {

    return this.httpClient.get(this.serviceUrl);
  }

  getTypeserviceById(id) {

    return this.httpClient.get(`${this.serviceUrl}/${id}`);

  }
  addTypeservice(typeservice:any) {

    console.log(typeservice)
    return this.httpClient.post(this.serviceUrl, typeservice)
    
    
  }


  updateTypeservice(id :any ,typeservice: any ) { 
    console.log(typeservice)
  
    return this.httpClient.put(this.serviceUrl, typeservice)

  }
  deleteTypeservice(id:any) {
    return this.httpClient.delete(`${this.serviceUrl}/${id}`);
  }
  searchByTypeservice(typeservice: string) {
    return this.httpClient.get(`${this.serviceUrl}/search/${typeservice}`);
    // return this.httpClient.get(`${this.utilisateurUrl}/search`,team);

  }
}
