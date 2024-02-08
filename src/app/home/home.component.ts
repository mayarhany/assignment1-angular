import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  heading:string = 'START FRAMEWORK';
  color:string = 'text-white';
  bgcolor:string = 'bg-white';
}
