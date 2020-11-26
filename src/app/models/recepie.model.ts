import { Ingredients } from "./ingredient.model";

export class Recipie {

    constructor(public name: string, public description: string, public imagePath: string, public ingredients : Ingredients[]) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;

    }
}