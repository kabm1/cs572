import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-counter (counterChange)="changeValue($event)" ></app-counter>
  Computer Counter Value = {{count}}`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HW11';
  public count ;
  public outputData;
  constructor(){
    this.count =0;
  }
changeValue(e){
  console.log(e);
  this.count = e;
}

  showOutputData(data){
    this.outputData = data;
  }
}
