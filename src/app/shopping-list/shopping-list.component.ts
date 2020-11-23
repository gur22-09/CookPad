import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[]=[
    new Ingredients("Coriander","10g"),
    new Ingredients("Onions","500g")
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient(ingredient: Ingredients) {
    const { name, amount } = ingredient;
    this.ingredients.push(new Ingredients(name, amount));
  }
}
