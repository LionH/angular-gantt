
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextBoxAllModule, NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { CheckBoxAllModule } from '@syncfusion/ej2-angular-buttons';

import { GanttAllModule } from '@syncfusion/ej2-angular-gantt';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    GanttAllModule,
    DropDownListAllModule,
    CheckBoxAllModule,
    TextBoxAllModule,
    NumericTextBoxAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
