import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-app-users',
  template: `<p>users works!</p>
<div (click)="onClickMe()">Users</div>
<ul>
<li *ngFor="let names of name"> 
  <a  routerLink="/details"> {{names}}</a>
  </li>
  </ul>`,
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   name = [] ;
  constructor(private dataServe: DataService) { 
   
  }
  ngOnInit(){
    
  }
  onClickMe(){
    console.log('clicked');
    for(let i in JSON.parse(this.dataServe.getCachedData()) ){
   var d = JSON.stringify((JSON.parse(this.dataServe.getCachedData())[i].name.first));
   var e = JSON.parse(d);
   this.name.push(e);
    }
  }
  ngOnchanges(){
   this.name = this.name;
  }
 

}
