import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredients } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addIngredient = new EventEmitter<Ingredients>();
  @ViewChild('nameInput', { static: true }) nameInput : ElementRef;
  @ViewChild('amountInput', { static: true }) amountInput : ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  
  onAdd() {
   this.addIngredient.emit({ name: this.nameInput.nativeElement.value, amount: this.amountInput.nativeElement.value });
  }

  onClear() {
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }
}
