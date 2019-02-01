import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dumb-component',
  template: `
    <p>
      dumb-component works!<br>
     This is array of names from Smart Component: {{names}}
    </p>
  `,
  styles: []
})
export class DumbComponentComponent implements OnInit {
  @Input() names;
  constructor() { }

  ngOnInit() {
  }

}
