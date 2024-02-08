import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  heading:string = 'ABOUT COMPONENT';
  color:string = 'text-white';
  bgcolor:string = 'bg-white';
}
