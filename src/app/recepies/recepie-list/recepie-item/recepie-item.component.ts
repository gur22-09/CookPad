import { Component, Input, OnInit, } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecipieServices } from 'src/app/services/recipie.services';
import { Recipie } from '../../../models/recepie.model';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {

  @Input() recipie: Recipie;
  @Input() id: number;
  constructor(
    private recipieService : RecipieServices,
    private router: RouterModule
  ) { }

  ngOnInit(): void {
  }
}
