import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-livre',
  templateUrl: './list-livre.component.html',
  styleUrls: ['./list-livre.component.css']
})
export class ListLivreComponent implements OnInit {
  les_livres: any[] = []
  constructor(private h: HttpClient) {

  }
  ngOnInit(): void {
    this.get_livre()
  }
  get_livre() {
    this.h.get("http://localhost/m1_uahb/projet_1/get.php")
      .subscribe((reponse: any) => {
        console.log(reponse)
        this.les_livres = reponse
      })
  }
}
