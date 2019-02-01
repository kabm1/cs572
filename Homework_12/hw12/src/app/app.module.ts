import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmartComponentComponent } from './smart-component.component';
import { DumbComponentComponent } from './dumb-component.component';
import { IsVisibleDirective } from './is-visible.directive';
import { LoggableDirective } from './loggable.directive';

@NgModule({
  declarations: [
    AppComponent,
    SmartComponentComponent,
    DumbComponentComponent,
    IsVisibleDirective,
    LoggableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
