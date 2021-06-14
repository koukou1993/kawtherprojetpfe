import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  index: number;
  client: any ;
  id : any;

  constructor( private clientService : ClientService) { }

  ngOnInit(){
   

    this.getclientFromService();
  }
  getclientFromService()
  {
    this.clientService.getAllClient()
      .subscribe((data) => {
      this.client = data;
      }
      
  
      );
  }

}
