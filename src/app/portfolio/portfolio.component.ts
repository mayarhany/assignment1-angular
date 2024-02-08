import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  @Input()
  heading: string = 'PORTFOLIO COMPONENT';
  @Input()
  color:string = 'navy-text-color';
  @Input()
  bgcolor:string = 'navy-bg-color';

  imgURL:string = '';

  getURL(url:string):void{
    this.imgURL = url;
    console.log(url)
  }
}

