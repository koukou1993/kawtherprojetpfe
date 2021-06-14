import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  index: number;
  employee: any ;
  id : any;

  constructor(private employeeService : EmployeeService , private activatedRoute : ActivatedRoute) { }

  ngOnInit()  : void  {
     this.getemployeeFromService();
  }
  private getemployeeFromService()
  {
    this.employeeService.getAllEmployee().subscribe((data) => 
      this.employee = data);
    
    
    }
}
