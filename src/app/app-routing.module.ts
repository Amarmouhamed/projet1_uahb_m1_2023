import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { CompteurComponent } from './compteur/compteur.component';
import { AddLivreComponent } from './livre/add-livre/add-livre.component';
import { ListLivreComponent } from './livre/list-livre/list-livre.component';
import { EditLivreComponent } from './livre/edit-livre/edit-livre.component';

const routes: Routes = [
  { path: 'accueil', component: Page1Component },
  { path: '', component: CompteurComponent },
  { path: 'compteur', component: CompteurComponent },
  { path: 'livre/add', component: AddLivreComponent },
  { path: 'livre/edit/:id_livre', component: EditLivreComponent },
  { path: 'livre', component: ListLivreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
