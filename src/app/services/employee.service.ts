import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  employeeUrl: string = "http://localhost:8090/employee";
  //definir url chemin 'coursier'

  constructor(private httpClient : HttpClient) { }


  getAllEmployee() {

    return this.httpClient.get(this.employeeUrl);
  }

  getEmployeeById(id) {

    return this.httpClient.get(`${this.employeeUrl}/${id}`);

  }
  
  addEmployee(employee: any) {

    return this.httpClient.post(this.employeeUrl, employee);
  }


  updateEmployee(employee: any ) { 
    console.log(employee)
    
    
    return this.httpClient.put(this.employeeUrl, employee)

  }
  deleteEmployee(id:any) {
    return this.httpClient.delete(`${this.employeeUrl}/${id}`);
  }
  searchByUser(user: string) {
    return this.httpClient.get(`${this.employeeUrl}/search/${user}`);
    // return this.httpClient.get(`${this.utilisateurUrl}/search`,team);

  }
   
}
