import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipieServices } from 'src/app/services/recipie.services';
import { Recipie } from '../../models/recepie.model';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {
  recepieToDisplay : Recipie;
  id: string;
  constructor(
    private recepieService : RecipieServices,
    private route: ActivatedRoute,
  ) { 
    this.route.params.subscribe((params: Params) => {
      // plus sign is added to convert string to int
      this.id = params.id
      this.recepieToDisplay = this.recepieService.getRecepie(+this.id);
    })
  }

  ngOnInit(): void {
  }
  ngOnChanges() {
    console.log(`selected recepie ${JSON.stringify(this.recepieToDisplay)}`);
  }
  
  onShoppingList() {
    this.recepieService.addIngredientToShoppingList(this.recepieToDisplay.ingredients);
  }
}
