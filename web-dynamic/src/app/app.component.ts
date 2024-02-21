import {
  Component,
  ComponentFactoryResolver,
  AfterViewInit,
  ViewChild,
  ViewContainerRef,
  ViewChildren, QueryList
} from '@angular/core';
import {DynamicComponent} from "./dynamic/dynamic.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  buttons:any=[
    {
      name:'button1',
      value:'Dynamic component for button1'
    },
    {
      name:'button2',
      value:'Dynamic component for button2'
    },
    {
      name:'button3',
      value:{
        firstname:'Hello klsa'
      }
    }
  ]
  @ViewChild('dynamicContainer', {read: ViewContainerRef, static: false}) dynamicContainer!: ViewContainerRef;
  private componentFactory: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngAfterViewInit() {
    this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);
  }

  createComponent(name: string) {
    const componentRef = this.dynamicContainer.createComponent(this.componentFactory);
    (componentRef.instance as DynamicComponent).name = name;

  }
}


