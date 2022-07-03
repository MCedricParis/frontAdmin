import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GestionuserComponent } from './gestionuser/gestionuser.component';
import { GestionbarComponent } from './gestionbar/gestionbar.component';
import { GestionavisComponent } from './gestionavis/gestionavis.component';
import { GestiongroupeComponent } from './gestiongroupe/gestiongroupe.component';
import { GestionbiereComponent } from './gestionbiere/gestionbiere.component';
import { CreationuserComponent } from './creationuser/creationuser.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionuserComponent,
    GestionbarComponent,
    GestiongroupeComponent,
    GestionavisComponent,
    GestionbiereComponent,
    CreationuserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
