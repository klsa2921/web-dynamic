import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.css'
})
export class DynamicComponent implements OnInit{
  @Input() name: any;
  ngOnInit(){

  }
  showDiv = true;

  closeDiv() {
    this.showDiv = false;
  }
}
