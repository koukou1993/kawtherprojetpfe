import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/services/employee.service';
import { TypeserviceService } from 'src/app/services/typeservice.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public addEmployeeForm: FormGroup;
 

  public submitted = false;
  public idDelete: any = 0;
  public idEdit: any =0;
  public index: number;
  public employee: any ;

  //user:any;
  public id : any;

  public typeservice : any;
  public action: string;

  


  constructor(private employeeService : EmployeeService , 
    private typeserviceService : TypeserviceService,
     private fb: FormBuilder,
     private toastr : ToastrService
     ) { }
        

    ngOnInit(): void {
        this.initForm();
        this.getemployeeFromService();
    this.typeserviceService.getAllTypeservice().subscribe((data1) => 
    this.typeservice = data1);

      }


private getemployeeFromService()
{
  this.employeeService.getAllEmployee().subscribe((data) => 
    this.employee = data);
  
  
  }
    
    
  
/* fonction click addEmployee */
public addEmployee() {
  this.submitted = true;
    if (this.addEmployeeForm.valid) {
      let employee = this.addEmployeeForm.value;
      this.employeeService.addEmployee(employee).subscribe((data) => {
          this.getemployeeFromService();
        
          document.getElementById("close-add-modal").click();
           this.toastr.success('Employee ajouté avec succés');
          this.addEmployeeForm.reset();
        }
      )
    }
  }

public openPopup() {
      this.action = "new";
    }
  
/*closeAlertAdd()
{
  this.alertAdd = false
}*/
 // copy des données à modifer dans le form du modification
 public moveDataToModifForm(index: any) { 

  this.action = "edit";

  //moveDataToModifForm
let currentemployee = this.employee[index];
  console.log(this.employee[index].id);

  this.idEdit = this.employee[index].id;
  //  mettre les valeurs de l'objet < currentEmployee > dans les champs du formulaire edit 
  this.addEmployeeForm.patchValue(currentemployee);


}


 /* fonction click editEmployee */
 public editEmployee() {
 
   console.log(this.idEdit);
   let user = this.addEmployeeForm.value;
   user.id = this.idEdit;
   this.employeeService.updateEmployee(user).subscribe((data) => {
              this.getemployeeFromService();
              document.getElementById("close-add-modal").click();
            this.toastr.success('Employee Modifier avec succés');

            })}
 

    
  // Send ID to deleteForm 
  public moveIDToDeleteForm(index) {
    this.idDelete = this.employee[index].id;
    console.log(this.idDelete);
  }

  /* fonction click deleteEmployee */
 public  deleteEmployee(id) {
     this.employeeService.deleteEmployee(id).subscribe((data) => {
       
       console.log(data)
        this.getemployeeFromService()
        document.getElementById("close-delete-modal").click();
      /* setTimeout(()=>{                           
        this.alertDelete = false;
   }, 1000);*/
      
          })}
          
         /* console.log(id);
         alert('Employee supprimé avec succés');
        } */
       
  
  
   


          private initForm(): void {
              this.addEmployeeForm = this.fb.group({
               
               name: [null],
               username:[null],
               email:[null],
               phone: [null],
               password: [null],
               typeservice: [null],
               role: [null],
              
              })
            }
          
       /*   private initForm(): void {
                this.addUtilisateurForm = this.fb.group({
                  cin: [null],
                  prenom: [null, [Validators.required]],
                  nom: [null, [Validators.required]],
                  telephone: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
                  certification: [null, [Validators.required]],
                  adresse: [null, [Validators.required]],
                  email: [null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
                  role: [null, [Validators.required]]
                })
              }*/
            







}
