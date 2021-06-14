import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjetreclamationService {


  objetreclamationUrl: string = "http://localhost:8090/objetreclamation";
  

  constructor(private httpClient : HttpClient) { }


  getAllObjetreclamation() {

    return this.httpClient.get(this.objetreclamationUrl);
  }

  getObjetreclamationById(id) {

    return this.httpClient.get(`${this.objetreclamationUrl}/${id}`);

  }
  addObjetreclamation(objetreclamation:any) {

    console.log(objetreclamation)
    return this.httpClient.post(this.objetreclamationUrl, objetreclamation)
    
    
  }


  updateObjetreclamation(id :any ,objetreclamation: any ) { 
    console.log(objetreclamation)
  
    return this.httpClient.put(this.objetreclamationUrl, objetreclamation)

  }
  deleteObjetreclamation(id:any) {
    return this.httpClient.delete(`${this.objetreclamationUrl}/${id}`);
  }
  searchByObjetreclamation(objetreclamation: string) {
    return this.httpClient.get(`${this.objetreclamationUrl}/search/${objetreclamation}`);
    // return this.httpClient.get(`${this.utilisateurUrl}/search`,team);

  }
}