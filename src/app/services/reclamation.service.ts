import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  reclamationUrl: string = "http://localhost:8090/reclamation";
  

  constructor(private httpClient : HttpClient) { }


  getAllReclamation() {

    return this.httpClient.get(this.reclamationUrl);
  }

  getReclamationById(id) {

    return this.httpClient.get(`${this.reclamationUrl}/${id}`);

  }
  addReclamation(reclamation:any) {

    return this.httpClient.post(this.reclamationUrl, reclamation);//post tzid biha 
  }


  updateReclamation(id :any ,reclamation: any ) { 
    console.log(reclamation)
    const headers = new HttpHeaders()
    .set("Content-Type", "application/json");
    headers.append('Content-Type', 'application/json');

    return this.httpClient.put(this.reclamationUrl, reclamation, { headers: headers })

  }
  deleteReclamation(id:any) {
    return this.httpClient.delete(`${this.reclamationUrl}/${id}`);
  }
  searchByUser(user: string) {
    return this.httpClient.get(`${this.reclamationUrl}/search/${user}`);
    // return this.httpClient.get(`${this.utilisateurUrl}/search`,team);

  }
   
}
