import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  tittle: string;
  subTittle: string;
  email: string;
  constructor() {
    this.tittle = 'Mario Troiano';
    this.subTittle = 'Desarrollador web';
    this.email = 'mariotroiano2@gmail.com';
  }

  ngOnInit(): void {
  }

}
