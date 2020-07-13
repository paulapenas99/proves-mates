import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ApiServiceService } from './services/api-service.service';
import { DataService } from './services/data.service';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'


import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    HttpClientModule,
    // importem el component d'enrutament
    RouterModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent, 
    HomeComponent,
    CategoryComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    ApiServiceService, 
    DataService
  ]
})
export class AppModule { }
