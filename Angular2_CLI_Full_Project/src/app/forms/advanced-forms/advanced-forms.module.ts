import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Timepicker
import { TimepickerModule } from 'ng2-bootstrap/timepicker';

// Datepicker
import { DatepickerModule } from 'ng2-bootstrap/datepicker';

// Datepicker
import { SelectModule } from 'ng2-select';

//Routing
import { AdvancedFormsRoutingModule } from './advanced-forms-routing.module';

import { AdvancedFormsComponent } from './advanced-forms.component';

@NgModule({
  imports: [
    CommonModule,
    AdvancedFormsRoutingModule,
    TimepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    SelectModule
  ],
  declarations: [
    AdvancedFormsComponent
  ]
})
export class AdvancedFormsModule { }
