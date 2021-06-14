import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ObjetreclamationService } from 'src/app/services/objetreclamation.service';


@Component({
  selector: 'app-type-reclamation',
  templateUrl: './type-reclamation.component.html',
  styleUrls: ['./type-reclamation.component.css']
})
export class TypeReclamationComponent implements OnInit {

 // alertAdd: boolean = false;
 // alertEdit: boolean = false;
 // alertDelete: boolean = false;
  submitted = false;
  
  idDelete: any = 0;
  idEdit: any =0;
  index: number;
  objetreclamation: any ;

  //user:any;
  id : any;
  
/*  initialisation des entrées du formulaire add  */
addObjetreclamationForm = new FormGroup({
  
  objetreclamation: new FormControl('')
 
 
 

});

 /*  initialisation des entrées du formulaire edit */
 editObjetreclamationForm = new FormGroup({
  id: new FormControl(''),
  objetreclamation: new FormControl('')
  //email: new FormControl(''),

  

});
  constructor(private objetreclamationService : ObjetreclamationService , private activatedRoute : ActivatedRoute ,
    private router : Router
     ) {
    
   }

  ngOnInit() : void  {
    
   
  this.getobjetreclamationFromService();
    

    this.id= this.activatedRoute.snapshot.paramMap.get('id');

    this.objetreclamationService.getObjetreclamationById(this.id).subscribe(
      (data) => {
        this.editObjetreclamationForm = new FormGroup({
          id: new FormControl(data['id']),
          objetreclamation: new FormControl(data['objetreclamation'])
         
        })
      }
      )
    
  }
  checks=false;
getobjetreclamationFromService()
{
  this.objetreclamationService.getAllObjetreclamation().subscribe((data) => {
    this.objetreclamation = data;
    }
    

    );
}

/* fonction click addObjetreclamation*/
addObjetreclamation() {
  this.submitted = true;
  if (this.addObjetreclamationForm.invalid) {
    return;
  }
  else {


    let objetreclamation = this.addObjetreclamationForm.value;
    console.log(this.objetreclamation);
     this.objetreclamationService.addObjetreclamation(objetreclamation).subscribe(
   (data) => {
    //this.alertAdd = true 
    this.addObjetreclamationForm.reset({})
    console.log(data)
    this.getobjetreclamationFromService()
    
    document.getElementById("close-add-modal").click();

  //  this.router.navigate(['TypeRec']);
  
   }
   )
   
    
   
    // alert("Type Reclamation ajouté avec succés");
    
  }
 
}


 // copy des données à modifer dans le form du modification
 moveDataToModifForm(index: any) { 
  //moveDataToModifForm
let currentobjetreclamation = this.objetreclamation[index];
  console.log(this.objetreclamation[index].id);

  this.idEdit = this.objetreclamation[index].id;
  //  mettre les valeurs de l'objet < currenttypeRec > dans les champs du formulaire edit 
  this.editObjetreclamationForm.patchValue(currentobjetreclamation);


}


 /* fonction click editTypeRec*/
 editObjetreclamation(idEdit) 
 {
   console.log(this.idEdit);
   let user = this.editObjetreclamationForm.value;

   this.objetreclamationService.updateObjetreclamation(idEdit,user)
   .subscribe(
     (data) => {
     // this.alertEdit = true 
      this.addObjetreclamationForm.reset({})
       console.log(data)
       this.getobjetreclamationFromService()
       
       document.getElementById("close-edit-modal").click();
       

     }
     ) 
     
   

 }
 
  // Send ID to deleteForm 
  moveIDToDeleteForm(index) {
    this.idDelete = this.objetreclamation[index].id;
    console.log(this.idDelete);
  }

  /* fonction click deleteTypeReclamation */
  deleteObjetreclamation(id) {
     this.objetreclamationService.deleteObjetreclamation(id)
    .subscribe(
      (data) => {
        //this.alertDelete = true 
        console.log(data)
        this.getobjetreclamationFromService()
        document.getElementById("close-delete-modal").click();
        
          }
          )
          console.log(id);
        // alert('Type Reclamation supprimé avec succés');
        }
        /*
        closeAlertDelete()
        {
          this.alertDelete = false
        }   */   










}

