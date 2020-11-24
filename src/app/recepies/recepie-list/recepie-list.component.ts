import { Component, OnInit } from '@angular/core';
import { RecipieServices } from 'src/app/services/recipie.services';
import { Recipie } from '../../models/recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css'],
})
export class RecepieListComponent implements OnInit {
  recipies : Recipie[];
  constructor(
    private recipieService: RecipieServices
  ) { }

  ngOnInit(){
    this.recipies = this.recipieService.getRecipies();
  }
  
}
