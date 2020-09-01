import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { DateTimeComponent } from './date-time/date-time.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveLearningComponent } from './directive-learning/directive-learning.component';

@NgModule({
  declarations: [
    AppComponent,
    DateTimeComponent,
    DataBindingComponent,
    DirectiveLearningComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
