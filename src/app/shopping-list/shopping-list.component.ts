import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../models/ingredient.model';
import { ShoppingServices } from '../services/shopping.services';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[];
  constructor(
    private shoppingService : ShoppingServices
  ) { 
    this.shoppingService.ingredientAdd.subscribe((ingredients) => {
      this.ingredients.push(...ingredients);
    })
  }

  ngOnInit(){
    this.ingredients = this.shoppingService.getIngredients();
  }
}
