import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecepieListComponent } from './recepies/recepie-list/recepie-list.component';
import { RecepieDetailComponent } from './recepies/recepie-detail/recepie-detail.component';
import { RecepieItemComponent } from './recepies/recepie-list/recepie-item/recepie-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { RecepieStartComponent } from './recepies/recepie-start/recepie-start.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecepiesComponent,
    RecepieListComponent,
    RecepieDetailComponent,
    RecepieItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecepieStartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
