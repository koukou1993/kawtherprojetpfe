import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReclamationassistantService {

  reclamationUrl: string = "http://localhost:8090/reclamationassistant";
  

  constructor(private httpClient : HttpClient) { }


  getAllReclamationassistant() {

    return this.httpClient.get(this.reclamationUrl);
  }

  getReclamationassistantById(id) {

    return this.httpClient.get(`${this.reclamationUrl}/${id}`);

  }
  addReclamationassistant(reclamationassistant:any) {

    return this.httpClient.post(this.reclamationUrl, reclamationassistant); 
  }


  updateReclamationassistant(id :any ,reclamationassistant: any ) { 
    console.log(reclamationassistant)
    const headers = new HttpHeaders()
    .set("Content-Type", "application/json");
    headers.append('Content-Type', 'application/json');

    return this.httpClient.put(this.reclamationUrl, reclamationassistant, { headers: headers })

  }
  deleteReclamationassistant(id:any) {
    return this.httpClient.delete(`${this.reclamationUrl}/${id}`);
  }
  searchByUser(user: string) {
    return this.httpClient.get(`${this.reclamationUrl}/search/${user}`);
    // return this.httpClient.get(`${this.utilisateurUrl}/search`,team);

  }
   
}
