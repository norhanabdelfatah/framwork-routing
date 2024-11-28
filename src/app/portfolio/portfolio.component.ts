import { Component } from '@angular/core';
declare let $:any
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  imgs:string[]=[
  "assets/images/poert1.png",
  "assets/images/port2.png",
  "assets/images/port3.png",
  "assets/images/poert1.png",
  "assets/images/port2.png",
  "assets/images/port3.png",
]
  src:string=""
  getDet(event: Event): void {
    const imgElement = (event.target as HTMLElement).closest('.item')?.querySelector('img');
    if (imgElement) {
      // Remove a class from an element with the ID "myElement"
      $(".boxContainer").removeClass("d-none");

      this.src = imgElement.src
    }
  }
  hideContainer(): void {
    $(".boxContainer").addClass("d-none");
    this.src = '';
  }



















}
