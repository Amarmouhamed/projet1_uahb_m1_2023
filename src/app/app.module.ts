import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AproposComponent } from './apropos/apropos.component';
import { Page1Component } from './page1/page1.component';
import { ListEtudiantComponent } from './enseignant/list-etudiant/list-etudiant.component';
import { EnseignantRoutingModule } from './enseignant/enseignant-routing.module';
import { EnseignantModule } from './enseignant/enseignant.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { CompteurComponent } from './compteur/compteur.component';
import { HttpClientModule } from "@angular/common/http";
import { AddLivreComponent } from './livre/add-livre/add-livre.component';
import { ListLivreComponent } from './livre/list-livre/list-livre.component';
import { EditLivreComponent } from './livre/edit-livre/edit-livre.component';

@NgModule({
  declarations: [
    AppComponent,
    AproposComponent,
    Page1Component,
    ButtonComponent,
    CompteurComponent,
    AddLivreComponent,
    ListLivreComponent,
    EditLivreComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EnseignantModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
