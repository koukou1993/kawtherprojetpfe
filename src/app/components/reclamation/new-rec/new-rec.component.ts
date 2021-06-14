import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { ObjetreclamationService } from 'src/app/services/objetreclamation.service';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-new-rec',
  templateUrl: './new-rec.component.html',
  styleUrls: ['./new-rec.component.css']
})
export class NewRecComponent implements OnInit {

  reclamation:any={};
  objetreclamation:any;
addReclamationForm:FormGroup;


  constructor( private formBuilder:FormBuilder,
    private router : Router,
   private  reclamationService : ReclamationService,
   private  objetreclamationService: ObjetreclamationService,
   

  ) { 

    
  }

  ngOnInit(): void {

    this.objetreclamationService.getAllObjetreclamation().subscribe((data1) => 
    this.objetreclamation = data1);


    this.addReclamationForm = this.formBuilder.group({
     
      numbonlivraison:[''],
     // nameproduit:[''],
     // dateReception:[''],
      objetreclamation:[''],
      description:[''],
      piecejoint:[''],
      motif:[''],
      etat:[''],
      createdAt:[''],
      updatedAt:[''],
      client:[''],
     
    
    }
      
    )
  }
  addReclamation(){
    alert('Btn clicked');
    console.log('This is my reclamation', this.reclamation);
    this.reclamationService.addReclamation(this.reclamation).subscribe(
      ()=> {
        console.log(this.reclamation);
      this.router.navigate(['gerer-rec-client']);
      
     }
    )
    
  }
}
