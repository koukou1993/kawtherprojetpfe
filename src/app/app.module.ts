import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Pipe } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { FooterComponent } from './components/footer/footer.component';
import { EmployeeComponent } from './components/employee/employee.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientComponent } from './components/client/client.component';
import { ServiceComponent } from './components/service/service.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { NewRecComponent } from './components/reclamation/new-rec/new-rec.component';
import { ClientProfilComponent } from './components/client-profil/client-profil.component';
import { GererRecClientComponent } from './components/reclamation/gerer-rec-client/gerer-rec-client.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { AssistantProfilComponent } from './components/assistant/assistant-profil/assistant-profil.component';
import { IntervenantProfilComponent } from './components/intervenant/intervenant-profil/intervenant-profil.component';
import { TypeReclamationComponent } from './components/type-reclamation/type-reclamation.component';



import { HomeComponent } from './home/home.component';
import { EmployeeService } from './services/employee.service';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { AddRecAssistantComponent } from './components/add-rec-assistant/add-rec-assistant.component';
import { TraitemetComponent } from './components/assistant/traitemet/traitemet.component';
import { ToastrModule } from 'ngx-toastr';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    EmployeeComponent,
    ClientComponent,
    ServiceComponent,
    ListEmployeesComponent,
    ClientsListComponent,
    NewRecComponent,
    ClientProfilComponent,
    GererRecClientComponent,
    DashboardComponent,
  
    AssistantProfilComponent,
    IntervenantProfilComponent,
    TypeReclamationComponent,

    HomeComponent,

    AddRecAssistantComponent,

    TraitemetComponent
   
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    //InMemoryWebApiModule.forRoot(DataService),
    HttpClientModule,
    ToastrModule.forRoot()
   // JwtModule.forRoot({
    //  config: {
      //  tokenGetter: function  tokenGetter() { 
     //   return localStorage.getItem('token');
     //   } 
   //  }
  // })
    
    
    
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
  
})

export class AppModule { }
