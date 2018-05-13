import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';  
import { FormsModule } from '@angular/forms';  
  
import { AppComponent } from './app.component';
import { SeriesComponent } from './series/series.component';
import {CommonService} from './common.service'; 

@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,  
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
