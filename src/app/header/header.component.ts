import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";


@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styles: ["a{ text-decoration: none }"]
})

export class HeaderComponent{
  selectedLink: string;
  constructor(private router: RouterModule ) {

  }
  onSelectLink(link: string) {
  }
}