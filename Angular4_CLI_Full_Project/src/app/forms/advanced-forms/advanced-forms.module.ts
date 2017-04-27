import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Angular 2 Input Mask
import { TextMaskModule } from 'angular2-text-mask';

// Timepicker
import { TimepickerModule } from 'ng2-bootstrap/timepicker';

// Datepicker
import { DatepickerModule } from 'ng2-bootstrap/datepicker';

// Ng2-select
import { SelectModule } from 'ng2-select';

//Routing
import { AdvancedFormsRoutingModule } from './advanced-forms-routing.module';

import { AdvancedFormsComponent } from './advanced-forms.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdvancedFormsRoutingModule,
    TextMaskModule,
    TimepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    SelectModule
  ],
  declarations: [
    AdvancedFormsComponent
  ]
})
export class AdvancedFormsModule { }
