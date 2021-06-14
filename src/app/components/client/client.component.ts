import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

 // alertAdd: boolean = false;
 // alertEdit: boolean = false;
 // alertDelete: boolean = false;
  submitted = false;
  
  idDelete: any = 0;
  idEdit: any =0;
  index: number;
  client: any ;
  id : any;


  /*  initialisation des entrées du formulaire add  */
addClientForm = new FormGroup({
  code: new FormControl(''),
  client: new FormControl(''),
  email: new FormControl(''),
  phone: new FormControl(''),
  address: new FormControl(''),
 
 
});

/*  initialisation des entrées du formulaire edit */
editClientForm = new FormGroup({
  id: new FormControl(''),
  code: new FormControl(''),
  client: new FormControl(''),
  email: new FormControl(''),
  phone: new FormControl(''),
  address: new FormControl(''),

  
});


  constructor( private clientService : ClientService , private activatedRoute : ActivatedRoute
     , private router :Router ) { }

  ngOnInit() : void  {
   
    this.getclientFromService();

   this.id= this.activatedRoute.snapshot.paramMap.get('id');

   this.clientService.getClientById(this.id).subscribe(
    (data) => {
      this.editClientForm = new FormGroup({
        id: new FormControl(data['id']),
        code: new FormControl(data['code']),
        client: new FormControl(data['client']),
        email: new FormControl(data['email']),
        phone: new FormControl(data['phone']),
        address: new FormControl(data['address'])
    
       
      })
    }
    )
  
}
  getclientFromService()
 {
  this.clientService.getAllClient()
    .subscribe((data) => {
    this.client = data;
    }
    

    );
 }

/* fonction click addClient */
addClient() {
  this.submitted = true;
  if (this.addClientForm.invalid) {
    return;
  }
  else {

    let Client = this.addClientForm.value;
    console.log(this.client);
     this.clientService.addClient(Client).subscribe(
   (data) => {
    //this.alertAdd = true 
    this.addClientForm.reset({})
    console.log(data)
    this.getclientFromService()
    document.getElementById("close-add-modal").click();
   
  //  this.router.navigate(['client']);
  
   }
   )
   
    // alert("client ajouté avec succés");
    
  }
 
}

 // copy des données à modifer dans le form du modification
 moveDataToModifForm(index: any) { 
  
let currentclient = this.client[index];
  console.log(this.client[index].id);

  this.idEdit = this.client[index].id;
  //  mettre les valeurs de l'objet < currentClient > dans les champs du formulaire edit 
  this.editClientForm.patchValue(currentclient);


}

/* fonction click editClient */
editClient(idEdit) 
{
  console.log(this.idEdit);
  let user = this.editClientForm.value;

  this.clientService.updateClient(idEdit,user)
  .subscribe(
    (data) => {
   //  this.alertEdit = true 
     this.editClientForm.reset({})
      console.log(data)
      this.getclientFromService()
      document.getElementById("close-edit-modal").click();
      

    }
    ) 
  }
  
   // Send ID to deleteForm 
   moveIDToDeleteForm(index) {
     this.idDelete = this.client[index].id;
     console.log(this.idDelete);
   }

//* fonction click deleteService */
deleteClient(id) {
  this.clientService.deleteClient(id)
 .subscribe(
   (data) => {
    
     console.log(data)
     this.getclientFromService()
     document.getElementById("close-delete-modal").click();
   
       }
       )
       console.log(id);
     // alert('Service supprimé avec succés');
     //document.getElementById("close-add-modal").click();
     }










}


