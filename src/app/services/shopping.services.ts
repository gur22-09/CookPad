import { EventEmitter, Injectable } from "@angular/core";
import { Ingredients } from "../models/ingredient.model";

@Injectable({ providedIn: 'root' })
export class ShoppingServices{
 ingredients: Ingredients[]=[
   //  new Ingredients("Coriander","10g"),
   //  new Ingredients("Onions","500g"),
   //  new Ingredients("raw Chicken", "1kg")
 ];
 ingredientAdd = new EventEmitter<Ingredients[]>();
 constructor() {
    
 }

 getIngredients() {
  return this.ingredients.slice();
 }

 addIngredients(ingredients: Ingredients[]) {
   this.ingredients.push(...ingredients);
   console.log(this.ingredients);
   this.ingredientAdd.emit(this.ingredients);
 }
}