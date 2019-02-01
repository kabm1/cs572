import { Directive, Input,ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective {
  @Input('appIsVisible') status: boolean;
  constructor(private element: ElementRef, private r: Renderer2) {
    
   }
   ngOnInit(){
     
     this.isHidden(this.status);
   }
   isHidden(st){
     
     if(st == false){
    this.element.nativeElement.style.display = "none";
     }
   }
}
