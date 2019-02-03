import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  template: `<h1> User Detail </h1>
      User Information: id: || name:
      <br><a routerLink="/users"> Go to Users List</a>`,
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
