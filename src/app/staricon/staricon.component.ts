import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-staricon',
  templateUrl: './staricon.component.html',
  styleUrls: ['./staricon.component.css']
})
export class StariconComponent {
  @Input()
  headingFromSection:string = '';

  @Input()
  colorFromSection:string = '';

  @Input()
  bgColorFromSection:string = '';
}
