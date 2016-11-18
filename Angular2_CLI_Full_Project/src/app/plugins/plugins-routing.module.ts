import { NgModule }                 from '@angular/core';
import { Routes,
         RouterModule }             from '@angular/router';

import { CalendarComponent }        from './calendar.component';
import { DataTableComponent }       from './datatable.component';
import { NotificationsComponent }   from './notifications.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Plugins'
        },
        children: [
            {
                path: 'calendar',
                component: CalendarComponent,
                data: {
                    title: 'Calendar'
                }
            },
            {
                path: 'datatable',
                component: DataTableComponent,
                data: {
                    title: 'DataTable'
                }
            },
            {
                path: 'notifications',
                component: NotificationsComponent,
                data: {
                    title: 'Notifications'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PluginsRoutingModule {}
