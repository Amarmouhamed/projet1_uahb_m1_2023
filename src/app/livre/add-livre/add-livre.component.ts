import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css']
})
export class AddLivreComponent implements OnInit {
  mon_formulaire!: FormGroup
  constructor(private h: HttpClient, private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.mon_formulaire = this.fb.group({
      titre: "",
      prix: ""
    })
  }
  valider() {
    console.log(this.mon_formulaire)
    if (this.mon_formulaire.touched) {
      // Le formulaire a été touché
    } else {
      // Le formulaire n'a pas été touché
    }



    /* this.h.post("http://localhost/m1_uahb/projet_1/add.php", this.data)
      .subscribe((reponse: any) => {
        console.log(reponse)
      }) */
  }
}
