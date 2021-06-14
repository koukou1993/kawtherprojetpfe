import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { ObjetreclamationService } from 'src/app/services/objetreclamation.service';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-gerer-rec-client',
  templateUrl: './gerer-rec-client.component.html',
  styleUrls: ['./gerer-rec-client.component.css']
})
export class GererRecClientComponent implements OnInit {




  submitted = false;
  
  idDelete: any = 0;
  idEdit: any =0;
  index: number;

  reclamation:any ;
  id:any;
  objetreclamation:any;
  client:any;


  /*  initialisation des entrées du formulaire edit */
 editReclamationForm = new FormGroup({
  id: new FormControl(''),
 // societe: new FormControl(''),
 // fullName: new FormControl(''),
 // email: new FormControl(''),
 // phone: new FormControl(''),
 // address: new FormControl(''),
 // ville: new FormControl(''),
  numbonlivraison: new FormControl(''),


  objetreclamation: new FormControl(''),
  description: new FormControl(''),
  piecejoint: new FormControl(''),
  motif: new FormControl(''),
  etat: new FormControl(''),
  createdAt: new FormControl(''),
  updatedaAt: new FormControl('')
  

}); 
  constructor(private router : Router,
    private reclamationService: ReclamationService,
    private activatedRoute: ActivatedRoute,
    private  objetreclamationService: ObjetreclamationService,
    private clientService: ClientService

    ) { }


  ngOnInit() : void {
    this.clientService.getAllClient().subscribe((data) => 
    this.client = data);

    this.objetreclamationService.getAllObjetreclamation().subscribe((data1) => 
    this.objetreclamation = data1);

    this.id= this.activatedRoute.snapshot.paramMap.get('id');

    this.getReclamationFromService();

    this.reclamationService.getReclamationById(this.id).subscribe(
      (data) => {
        this.editReclamationForm = new FormGroup({
          id: new FormControl(data['id']),
          
          // societe: new FormControl(data['societe']),
          // fullName: new FormControl(data['fullName']),
          // email: new FormControl(data['email']),
          // phone: new FormControl(data['phone']),
          // address: new FormControl(data['address']),
          // ville: new FormControl(data['ville']),
          numbonlivraison: new FormControl('numbonlivraison'),
         
          objetreclamation: new FormControl('objetreclamation'),
         
          description: new FormControl('description'),
          piecejoint: new FormControl('piecejoint'),
          motif: new FormControl('motif'),
          etat: new FormControl('etat'),
          createdAt: new FormControl('createdAt'),
          updatedAt: new FormControl('updatedAt'),
          client: new FormControl('client')
        

      
        })
      }
      )




     this.reclamationService.getReclamationById(this.id).subscribe(
      (data) =>{
      this.reclamation = data;
      }
      )

     
  }



  getReclamationFromService()
  {
      this.reclamationService.getAllReclamation().subscribe((data) => {
      this.reclamation= data;
    
    }
    );
  
  }


 // copy des données à modifer dans le form du modification
 moveDataToModifForm(index: any) { 
  //moveDataToModifForm
let currentreclamation = this.reclamation[index];
  console.log(this.reclamation[index].id);

  this.idEdit = this.reclamation[index].id;
  //  mettre les valeurs de l'objet < currentReclamation > dans les champs du formulaire edit 
  this.editReclamationForm.patchValue(currentreclamation);


}


/* fonction click editReclamation */
editReclamation(idEdit) 
{
  console.log(this.idEdit);
  let user = this.editReclamationForm.value;

  this.reclamationService.updateReclamation(idEdit,user)
  .subscribe(
    (data) => {
    // this.alertEdit = true 
     
      console.log(data)
      this.getReclamationFromService()
      
      document.getElementById("close-edit-modal").click();
      

    }
    ) 
    
  

}





}
