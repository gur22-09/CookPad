import { Component, Input, OnInit, } from '@angular/core';
import { RecipieServices } from 'src/app/services/recipie.services';
import { Recipie } from '../../../models/recepie.model';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {

  @Input() recipie: Recipie;
  constructor(
    private recipieService : RecipieServices
  ) { }

  ngOnInit(): void {
  }
  
  onSelectRecepie(){
    this.recipieService.recipieSelected.emit(this.recipie);
  }
}
