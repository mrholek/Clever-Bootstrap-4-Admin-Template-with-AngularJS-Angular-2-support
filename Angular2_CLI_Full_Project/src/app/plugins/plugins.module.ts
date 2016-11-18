import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';

// Calendar
import { CalendarModule }           from 'angular-calendar';

import { CalendarComponent }        from './calendar.component';

// DataTables
import { DataTableModule }          from 'angular2-datatable';
import { HttpModule }               from '@angular/http';
import { DataFilterPipe }           from './datafilterpipe';
import { FormsModule }              from '@angular/forms';

import { DataTableComponent }       from './datatable.component';

// Notifications
import { ToasterModule,
         ToasterService}            from 'angular2-toaster/angular2-toaster';

import { NotificationsComponent }   from './notifications.component';

//Routing
import { PluginsRoutingModule }     from './plugins-routing.module';

@NgModule({
    imports: [
        PluginsRoutingModule,
        CommonModule,
        CalendarModule.forRoot(),
        DataTableModule,
        FormsModule,
        HttpModule,
        ToasterModule,
    ],
    declarations: [
        CalendarComponent,
        DataTableComponent,
        DataFilterPipe,
        NotificationsComponent
    ]
})
export class PluginsModule { }
