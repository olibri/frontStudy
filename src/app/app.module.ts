import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Style2Directive } from './directives/style2.directive';
import { DataServices } from './services/data.services';
import { CounterComponent } from './counter/counter.component';
import { SwitchComponent } from './switch/switch.component';

import {HttpClientModule}from "@angular/common/http"


@NgModule({
  declarations: [
    AppComponent,
    Style2Directive,
    CounterComponent,
    SwitchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
