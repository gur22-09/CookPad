import { EventEmitter, Injectable } from "@angular/core";
import { Recipie } from "../models/recepie.model";

@Injectable()
export class RecipieServices{
    recipieSelected = new EventEmitter<Recipie>();
    
    private recipies: Recipie[] = [
     new Recipie("Chicken Tanduri", "a hearty meal to fill","https://lovelaughmirch.com/wp-content/uploads/2018/12/Whole-Tandoori-Chicken-with-Tandoori-Roast-Potatoes-_2.jpg"),
     new Recipie("Pani Puri", "a great tany and sweet apetizer","https://www.travenix.com/wp-content/uploads/2018/04/elco-e1523646236448.jpg")
    ];
    
    getRecipies(){
     return  this.recipies.slice();
    }

   
}