import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './user-details.component';
import { RouterModule, Routes, Router, ROUTES} from '@angular/router';
const appRoutes: Routes=[ {path: 'users', component: UsersComponent},
{path:'details', component:UserDetailsComponent}];
@NgModule({
  declarations: [UsersComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  exports: [ 
    UsersComponent,
    
  ]
})
export class UsersModule { }
