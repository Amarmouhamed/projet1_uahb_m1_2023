import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnseignantRoutingModule } from './enseignant-routing.module';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';


@NgModule({
  declarations: [
    ListEtudiantComponent
  ],
  imports: [
    CommonModule,
    EnseignantRoutingModule
  ],
  exports: [
    ListEtudiantComponent
  ]
})
export class EnseignantModule { }
