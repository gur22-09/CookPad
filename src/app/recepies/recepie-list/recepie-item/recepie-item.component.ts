import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipie } from '../../../models/recepie.model';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {
  @Output() recipieSelected = new EventEmitter<void>();

  @Input() recipie: Recipie;
  constructor() { }

  ngOnInit(): void {
  }
  
  onSelected() {
    this.recipieSelected.emit();
  }
}
