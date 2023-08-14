import { NgModule } from '@angular/core';
import { KeyboardComponent } from './keyboard.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    KeyboardComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  exports: [
    KeyboardComponent
  ]
})
export class KeyboardModule { }
