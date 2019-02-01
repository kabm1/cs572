import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart-component',
  template: `
    <p>
      smart-component works!
     <app-dumb-component [names]="names"></app-dumb-component>
    </p>
  `,
  styles: []
})
export class SmartComponentComponent implements OnInit {
  
  constructor() { }
  names = ["kabinad","festus","andy"];
  ngOnInit() {
  }

}
