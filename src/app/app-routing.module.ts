import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionavisComponent } from './gestionavis/gestionavis.component';
import { GestionbarComponent } from './gestionbar/gestionbar.component';
import { GestionbiereComponent } from './gestionbiere/gestionbiere.component';
import { GestiongroupeComponent } from './gestiongroupe/gestiongroupe.component';
import { GestionuserComponent } from './gestionuser/gestionuser.component';
import { CreationuserComponent } from './creationuser/creationuser.component';

const routes: Routes = [
  {path: 'gestionavis', component: GestionavisComponent},
  {path: 'gestionbar', component: GestionbarComponent},
  {path: 'gestiongroupe', component: GestiongroupeComponent},
  {path: 'gestionuser', component: GestionuserComponent},
  {path: 'gestionbiere', component: GestionbiereComponent},
  {path: 'creationUser', component: CreationuserComponent},
  {path: 'editUser/:id_user', component: CreationuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
