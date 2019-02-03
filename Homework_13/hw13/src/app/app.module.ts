import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {UsersModule} from './users/users.module';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes} from '@angular/router';
import { UserDetailsComponent } from './users/user-details.component';

const appRoutes: Routes=[ {path: 'users', component: UsersComponent},
{path:'details', component:UserDetailsComponent}];

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UsersModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
