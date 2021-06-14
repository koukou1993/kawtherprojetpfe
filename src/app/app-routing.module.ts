import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRecAssistantComponent } from './components/add-rec-assistant/add-rec-assistant.component';
import { AssistantProfilComponent } from './components/assistant/assistant-profil/assistant-profil.component';
import { TraitemetComponent } from './components/assistant/traitemet/traitemet.component';
import { ClientProfilComponent } from './components/client-profil/client-profil.component';
import { ClientComponent } from './components/client/client.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { EmployeeComponent } from './components/employee/employee.component';

import { IntervenantProfilComponent } from './components/intervenant/intervenant-profil/intervenant-profil.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';

import { GererRecClientComponent } from './components/reclamation/gerer-rec-client/gerer-rec-client.component';
import { NewRecComponent } from './components/reclamation/new-rec/new-rec.component';


import { ServiceComponent } from './components/service/service.component';
import { TypeReclamationComponent } from './components/type-reclamation/type-reclamation.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'employee' ,component: EmployeeComponent },
  {path: 'list-employees' ,component: ListEmployeesComponent },
  {path: 'client' ,component: ClientComponent },
  {path: 'clients-list' ,component: ClientsListComponent },
  {path: 'service' ,component: ServiceComponent },
  {path: 'client-profil' ,component: ClientProfilComponent },
  {path: 'gerer-rec-client' ,component: GererRecClientComponent },
  {path: 'assistant-profil' ,component: AssistantProfilComponent },
  {path: 'intervenant-profil' ,component: IntervenantProfilComponent },
  {path: 'login' ,component: LoginComponent},
  {path: 'objetreclamation' ,component: TypeReclamationComponent},
  {path: 'newreclamation' ,component: NewRecComponent},
  {path: 'newreclamationAssistant' ,component: AddRecAssistantComponent},
  {path: 'traitement' ,component: TraitemetComponent},


];
/*
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
const routes: Routes = [
  
  {
    path: 'home',
    component: HomeComponent
},
  {
      path: 'auth/login',
      component: LoginComponent
  },
  {
      path: 'signup',
      component: RegisterComponent
  },
  {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
  }
  // { path: 'dashboard', component: LayoutComponent },
  // { path: 'users', component: ListUserComponent },
  //{ path: 'administration', loadChildren: () => import('./pages/administration/administration.module').then(m => m.AdministrationModule) },

 // { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  // tslint:disable-next-line: max-line-length
 // { path: '', component: LayoutComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), canActivate: [AuthGuard] },
];
*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
