import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeserviceService } from 'src/app/services/typeservice.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  alertAdd: boolean = false;
  alertEdit: boolean = false;
 // alertDelete: boolean = false;
  submitted = false;
  
  idDelete: any = 0;
  idEdit: any =0;
  index: number;
  typeservice: any ;
  id : any;
  
/*  initialisation des entrées du formulaire add  */
  addTypeserviceForm = new FormGroup({
      typeservice: new FormControl('', [Validators.required])
});



 /*  initialisation des entrées du formulaire edit */
 editTypeserviceForm = new FormGroup({
     id: new FormControl(''),
     typeservice: new FormControl('', [Validators.required])
});


  constructor(private typeserviceService : TypeserviceService , private activatedRoute : ActivatedRoute ,
    private router : Router
     ) {
    
   }

  ngOnInit() : void  {
  
   
 this.getTypeserviceService();
    

    this.id= this.activatedRoute.snapshot.paramMap.get('id');

    this.typeserviceService.getTypeserviceById(this.id).subscribe(
      (data) => {
        this.editTypeserviceForm = new FormGroup({
          id: new FormControl(data['id']),
          typeservice: new FormControl(data['typeservice']),
          created_at: new FormControl(data['created_at'])
         
        })
      }
      )
    
  }
  
getTypeserviceService()
{
  this.typeserviceService.getAllTypeservice().subscribe((data) => {
    this.typeservice = data;
    }
    

    );
}

/* fonction click addService */
addTypeservice() {
  this.submitted = true;
  if (this.addTypeserviceForm.invalid) {
    return;
  }
  else {


    let typeservice = this.addTypeserviceForm.value;
    console.log(this.typeservice);
     this.typeserviceService.addTypeservice(typeservice).subscribe(
   (data) => {
    this.alertAdd = true
    console.log(this.typeservice); 
    this.addTypeserviceForm.reset({})
    console.log(data)
    this.getTypeserviceService()
    
    setTimeout(()=>{                           //<<<---using ()=> syntax
      this.alertAdd = false;
 }, 1000);
  //  this.router.navigate(['service']);
  
   }
   )
   
    
   
    // alert("Service ajouté avec succés");
    
  }
 
}

closeAlertAdd()
{
  this.alertAdd = false
}
 // copy des données à modifer dans le form du modification
 moveDataToModifForm(index: any) { 
  //moveDataToModifForm
let currenttypeservice = this.typeservice[index];
  console.log(this.typeservice[index].id);

  this.idEdit = this.typeservice[index].id;
  //  mettre les valeurs de l'objet < currentService > dans les champs du formulaire edit 
  this.editTypeserviceForm.patchValue(currenttypeservice);


}


 /* fonction click editService */
 editTypeservice(idEdit) 
 {
   console.log(this.idEdit);
   let typeservice = this.editTypeserviceForm.value;

   this.typeserviceService.updateTypeservice(idEdit,typeservice)
   .subscribe(
     (data) => {
    
      this.addTypeserviceForm.reset({})
       console.log(data)
       this.getTypeserviceService()
          
           
       
       document.getElementById("close-delete-modal").click();
       

     }
     ) 
     
   

 }
 closeAlertEdit()
 {
   this.alertEdit = false
   
 }
  // Send ID to deleteForm 
  moveIDToDeleteForm(index) {
    this.idDelete = this.typeservice[index].id;
    console.log(this.idDelete);
  }

  /* fonction click deleteService */
  deleteTypeservice(id) {
     this.typeserviceService.deleteTypeservice(id)
    .subscribe(
      (data) => {
       // this.alertDelete = true 
        console.log(data)
        this.getTypeserviceService()
        document.getElementById("close-delete-modal").click();
      
          }
          )
          console.log(id);
        // alert('Service supprimé avec succés');
        //document.getElementById("close-add-modal").click();
        }
       








}
