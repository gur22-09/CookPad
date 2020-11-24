import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipieServices } from 'src/app/services/recipie.services';
import { Recipie } from '../../models/recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css'],
  providers: [RecipieServices]
})
export class RecepieListComponent implements OnInit {
  recipies : Recipie[];
  @Output() recepieWasSelected = new EventEmitter<Recipie>(); 
  constructor(
    private recipieService: RecipieServices
  ) { }

  ngOnInit(){
    this.recipies = this.recipieService.getRecipies();
  }
  
  onRecipieSelected(recipie: Recipie) {
    this.recepieWasSelected.emit(recipie);
  }
}
