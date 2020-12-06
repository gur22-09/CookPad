import { EventEmitter, Injectable } from "@angular/core";
import { Ingredients } from "../models/ingredient.model";
import { Recipie } from "../models/recepie.model";
import { ShoppingServices } from "./shopping.services";

@Injectable()
export class RecipieServices{
    recipieSelected = new EventEmitter<Recipie>();
    constructor(
        private shoppingService : ShoppingServices
    ) {

    }
    private recipies: Recipie[] = [
     new Recipie("Chicken Tanduri",
      "a hearty meal to fill",
      "https://lovelaughmirch.com/wp-content/uploads/2018/12/Whole-Tandoori-Chicken-with-Tandoori-Roast-Potatoes-_2.jpg",
      [
          new Ingredients('Chicken', '1kg'),
          new Ingredients('tomatoes','400g'),
          new Ingredients('onions','400g'),
          new Ingredients('olive oil', '200ml'),
          new Ingredients('spices', '150g')
      ]
      ),
     new Recipie("Pani Puri", 
     "a great tany and sweet apetizer",
     "https://www.travenix.com/wp-content/uploads/2018/04/elco-e1523646236448.jpg",
     [
         new Ingredients('potatoes','500g'),
         new Ingredients('white flour','500g'),
         new Ingredients('Tamrind','300g'),
         new Ingredients('chick pea','250g'),
         new Ingredients('mint','100g')
     ]
     )
    ];
    
    getRecipies(){
     return  this.recipies.slice();
    }
    getRecepie(id: number) {
      return this.recipies[id];  
    }
    addIngredientToShoppingList(ingredient : Ingredients[]) {
       this.shoppingService.addIngredients(ingredient);
    }
}