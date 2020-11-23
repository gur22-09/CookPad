import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipie } from '../../models/recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
  @Output() recepieWasSelected = new EventEmitter<Recipie>(); 
  recipies: Recipie[] = [
    new Recipie("Chicken Tanduri", "a hearty meal to fill","https://lovelaughmirch.com/wp-content/uploads/2018/12/Whole-Tandoori-Chicken-with-Tandoori-Roast-Potatoes-_2.jpg"),
    new Recipie("Pani Puri", "a great tany and sweet apetizer","https://www.travenix.com/wp-content/uploads/2018/04/elco-e1523646236448.jpg")
  ]; 
  constructor() { }

  ngOnInit(): void {
  }
  
  onRecipieSelected(recipie: Recipie) {
    this.recepieWasSelected.emit(recipie);
  }
}
