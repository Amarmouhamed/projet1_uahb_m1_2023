import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.css']
})
export class CompteurComponent {
  compteur: number = 1
  les_livres: any = []
  constructor(private http: HttpClient) {

  }
  inc() {
    console.log("inc")
    this.http.get("http://localhost/m1_uahb/projet_1/")
      .subscribe(
        (reponse) => {
          this.les_livres = reponse
          console.log("retour de la requette ", reponse)
        }
      )
    this.compteur = this.compteur + 1
  }
  dec() {
    this.compteur = this.compteur - 1
  }
}
