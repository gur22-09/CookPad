import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { RecipieServices } from 'src/app/services/recipie.services';
import { Recipie } from '../../models/recepie.model';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {
  @Input('recepie') recepieToDisplay : Recipie;
  constructor(
    private recepieService : RecipieServices
  ) { }

  ngOnInit(): void {
  }
  ngOnChanges() {
    console.log(`selected recepie ${JSON.stringify(this.recepieToDisplay)}`);
  }
  
  onShoppingList() {
    this.recepieService.addIngredientToShoppingList(this.recepieToDisplay.ingredients);
  }
}
