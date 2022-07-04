import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionavisComponent } from './gestionavis/gestionavis.component';
import { GestionbarComponent } from './gestionbar/gestionbar.component';
import { GestionbiereComponent } from './gestionbiere/gestionbiere.component';
import { GestiongroupeComponent } from './gestiongroupe/gestiongroupe.component';
import { GestionuserComponent } from './gestionuser/gestionuser.component';
import { CreationuserComponent } from './creationuser/creationuser.component';
import { CrationBarComponent } from './cration-bar/cration-bar.component';
import { CreationBiereComponent } from './creation-biere/creation-biere.component';

const routes: Routes = [
  {path: 'gestionavis', component: GestionavisComponent},
  {path: 'gestionbar', component: GestionbarComponent},
  {path: 'gestiongroupe', component: GestiongroupeComponent},
  {path: 'gestionuser', component: GestionuserComponent},
  {path: 'gestionbiere', component: GestionbiereComponent},
  {path: 'creationUser', component: CreationuserComponent},
  {path: 'editUser/:id_user', component: CreationuserComponent},
  {path: 'crationBar', component: CrationBarComponent},
  {path: 'editBar/:idBar', component: CrationBarComponent},
  {path: 'creationbiere', component: CreationBiereComponent},
  {path: 'editbiere/:idBiere', component: CreationBiereComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
