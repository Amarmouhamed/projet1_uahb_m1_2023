import { Component } from '@angular/core';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.css']
})
export class AproposComponent {
  prenom: string = "Mouhamed"
  conducteur: string = "test"
  constructor() {

  }
  test(event: any) {
    console.log("event= ", event)
    alert("test")
  }
}
