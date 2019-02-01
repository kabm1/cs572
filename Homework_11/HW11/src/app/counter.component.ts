import { Component, OnInit, Input, Output, EventEmitter, SystemJsNgModuleLoader } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
   <button (click)="counterDecrease()">-</button>{{counter}}<button (click)="counterIncrease()">+</button>
  
  

  `,
  styles: []
})
export class CounterComponent implements OnInit {
  
  
  @Input() counter: number; 
  @Output() counterChange = new EventEmitter();
  
    constructor(){
     // this.counter = 0 ;
       }  
    
  counterIncrease(){

    this.counterChange.emit(++this.counter);
  }
  counterDecrease(){
    this.counterChange.emit(--this.counter)
  }


  ngOnInit() {
  }

}
