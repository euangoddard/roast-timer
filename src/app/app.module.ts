import { MeatService } from './meat.service';
import { CapitalCasePipe } from './capitalize.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CapitalCasePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MeatService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
