import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styles: ["a{ text-decoration: none }"]
})

export class HeaderComponent{
  @Output() navLinkClick = new EventEmitter<string>();
  selectedLink: string;
  constructor() {

  }
  onSelectLink(link: string) {
    this.selectedLink = link;
    this.navLinkClick.emit(link);
  }
}