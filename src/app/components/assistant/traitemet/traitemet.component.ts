import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { ObjetreclamationService } from 'src/app/services/objetreclamation.service';
import { ReclamationassistantService } from 'src/app/services/reclamationassistant.service';

@Component({
  selector: 'app-traitemet',
  templateUrl: './traitemet.component.html',
  styleUrls: ['./traitemet.component.css']
})
export class TraitemetComponent implements OnInit {

  submitted = false;
  
  idDelete: any = 0;
  idEdit: any =0;
  index: number;

  reclamationassistant:any ;
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
  refcmd: new FormControl(''),
  nameproduit: new FormControl(''),
  dateReception: new FormControl(''),
  objetreclamation: new FormControl(''),
  autrepb: new FormControl(''),
  description: new FormControl(''),
  piecejoint: new FormControl(''),
  motif: new FormControl(''),
  etat: new FormControl(''),
  createdAt: new FormControl(''),
  client: new FormControl('')
  

}); 
  constructor(private router : Router,
    private reclamationassistantService: ReclamationassistantService,
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

    this.reclamationassistantService.getReclamationassistantById(this.id).subscribe(
      (data) => {
        this.editReclamationForm = new FormGroup({
          id: new FormControl(data['id']),
          
          // societe: new FormControl(data['societe']),
          // fullName: new FormControl(data['fullName']),
          // email: new FormControl(data['email']),
          // phone: new FormControl(data['phone']),
          // address: new FormControl(data['address']),
          // ville: new FormControl(data['ville']),
          refcmd: new FormControl('refcmd'),
          nameproduit: new FormControl('nameproduit'),
          dateReception: new FormControl('dateReception'),
          objetreclamation: new FormControl('objetreclamation'),
         
          description: new FormControl('description'),
          piecejoint: new FormControl('piecejoint'),
          motif: new FormControl('motif'),
          etat: new FormControl('etat'),
          createdAt: new FormControl('createdAt'),
          client: new FormControl('client')
        

      
        })
      }
      )




     this.reclamationassistantService.getReclamationassistantById(this.id).subscribe(
      (data) =>{
      this.reclamationassistant = data;
      }
      )

     
  }



  getReclamationFromService()
  {
      this.reclamationassistantService.getAllReclamationassistant().subscribe((data) => {
      this.reclamationassistant= data;
    
    }
    );
  
  }


 // copy des données à modifer dans le form du modification
 moveDataToModifForm(index: any) { 
  //moveDataToModifForm
let currentreclamation = this.reclamationassistant[index];
  console.log(this.reclamationassistant[index].id);

  this.idEdit = this.reclamationassistant[index].id;
  //  mettre les valeurs de l'objet < currentReclamation > dans les champs du formulaire edit 
  this.editReclamationForm.patchValue(currentreclamation);


}


/* fonction click editReclamation */
editReclamationassistant(idEdit) 
{
  console.log(this.idEdit);
  let user = this.editReclamationForm.value;

  this.reclamationassistant.updateReclamationassistant(idEdit,user)
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
