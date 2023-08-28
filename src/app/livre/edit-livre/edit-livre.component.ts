import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-livre',
  templateUrl: './edit-livre.component.html',
  styleUrls: ['./edit-livre.component.css']
})
export class EditLivreComponent implements OnInit {
  data: any = {}

  @Input()
  id_livre: number = 0
  constructor(private h: HttpClient) {
  }
  ngOnInit(): void {
    console.log("id_livre=", this.id_livre)

  }
  valider() {
    console.log(this.data)
    this.h.post("http://localhost/m1_uahb/projet_1/edit.php", this.data)
      .subscribe((reponse: any) => {
        console.log(reponse)
      })
  }
}
