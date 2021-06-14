import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { ObjetreclamationService } from 'src/app/services/objetreclamation.service';
import { ReclamationassistantService } from 'src/app/services/reclamationassistant.service';

@Component({
  selector: 'app-add-rec-assistant',
  templateUrl: './add-rec-assistant.component.html',
  styleUrls: ['./add-rec-assistant.component.css']
})
export class AddRecAssistantComponent implements OnInit {

  public  addReclamationForm:FormGroup;
  public reclamationassistant:any;
  public objetreclamation:any;
  public client:any;
  public submitted = false;


  constructor( private router : Router, 
   private  reclamationassitantService : ReclamationassistantService,
   private  objetreclamationService: ObjetreclamationService,
   private clientService : ClientService,
   private fb: FormBuilder,

  ) { 

    
  }
  ngOnInit(): void {
        this.initForm();
        
    this.clientService.getAllClient().subscribe((data1) => 
    this.client = data1);

    this.objetreclamationService.getAllObjetreclamation().subscribe((data2) => 
    this.objetreclamation = data2);
      }



    public addReclamation() {
      this.submitted = true;
        if (this.addReclamationForm.valid) {
          let reclamationassistant = this.addReclamationForm.value;
          this.reclamationassitantService.addReclamationassistant(reclamationassistant).subscribe((data) => {
              
                console.log(this.reclamationassistant);
      this.router.navigate(['traitement']);
             
            }
          )
        }
      }


     private initForm(): void {
          this.addReclamationForm= this.fb.group({
           
          
           refcmd:[null],
           nameproduit:[null],
           dateReception:[null],
           objetreclamation:[null],
           description:[null],
           piecejoint:[null],
           motif:[null],
           etat:[null],
           client:[null],
           createdAt:[null],
           priorite:[null]
          
          
          })
        }

   
  
   
 
}
