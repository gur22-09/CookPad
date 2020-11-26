import { Component, ElementRef, OnInit, ViewChild, } from '@angular/core';
import { Ingredients } from 'src/app/models/ingredient.model';
import { ShoppingServices } from 'src/app/services/shopping.services';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInput : ElementRef;
  @ViewChild('amountInput', { static: true }) amountInput : ElementRef;

  constructor(
    private shoppingService : ShoppingServices
  ) { }

  ngOnInit(): void {
  }
  
  onAdd() {
    //console.log(this.nameInput.nativeElement.value);
    this.shoppingService.ingredientAdd.emit([{
      name: this.nameInput.nativeElement.value,
      amount: this.amountInput.nativeElement.value
    }])
  }

  onClear() {
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }
}
