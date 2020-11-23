import { Component, OnInit } from '@angular/core';
import { Recipie } from '../models/recepie.model';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit {
  selectedRecepie: Recipie;
  constructor() { }

  ngOnInit(): void {
  }
  
  onRecepieWasSelected(recepie: Recipie) {
     this.selectedRecepie = recepie;
  }
}
