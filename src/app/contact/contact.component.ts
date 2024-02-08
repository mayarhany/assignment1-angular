import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input()
  heading: string = 'CONATCT SECTION';
  @Input()
  color:string = 'navy-text-color';
  @Input()
  bgcolor:string = 'navy-bg-color';

}

