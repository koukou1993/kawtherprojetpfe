import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  clientUrl: string = "http://localhost:8090/client";


  constructor(private httpClient : HttpClient) { }


  getAllClient() {

    return this.httpClient.get(this.clientUrl);
  }

  getClientById(id) {

    return this.httpClient.get(`${this.clientUrl}/${id}`);

  }
  addClient(client:any) {

    return this.httpClient.post(this.clientUrl, client);
  }


  updateClient(id :any ,client: any ) { 
    console.log(client)
    const headers = new HttpHeaders()
    .set("Content-Type", "application/json");
    headers.append('Content-Type', 'application/json');

    return this.httpClient.put(this.clientUrl, client, { headers: headers })

  }
  deleteClient(id:any) {
    return this.httpClient.delete(`${this.clientUrl}/${id}`);
  }
  searchByUser(user: string) {
    return this.httpClient.get(`${this.clientUrl}/search/${user}`);
    // return this.httpClient.get(`${this.utilisateurUrl}/search`,team);

  }

  


}
