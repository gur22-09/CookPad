import { Component, OnInit } from '@angular/core';
import { Recipie } from '../models/recepie.model';
import { RecipieServices } from '../services/recipie.services';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css'],
  providers: [RecipieServices]
})
export class RecepiesComponent implements OnInit {
  selectedRecepie: Recipie;
  constructor(
    private recipieService : RecipieServices
  ) { }

  ngOnInit(){
    this.recipieService.recipieSelected.subscribe((recipie) => this.selectedRecepie = recipie);
  }
  
  onRecepieWasSelected(recepie: Recipie) {
     this.selectedRecepie = recepie;
  }
}
