import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLoggable]'
})
export class LoggableDirective {

  constructor(private e1: ElementRef) {

   }
@HostListener('click') onclick(){
  console.log(this.e1.nativeElement);
}
}
