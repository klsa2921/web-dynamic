
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
  selector: 'app-dynamic-component',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-component.component.html',
  styleUrl: './dynamic-component.component.css'
})
export class DynamicComponentComponent {
  @Input() header: string;
  @Input() content: string;
  @Input() closable = false;
  close = new EventEmitter();
}
