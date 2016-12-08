import { NgModule }                 from '@angular/core';
import { Routes,
         RouterModule }             from '@angular/router';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Plugins'
        },
        children: [
            {
                path: 'calendar',
                loadChildren: 'app/plugins/calendar/calendar.module#CalendarInitModule'
            },
            {
                path: 'datatable',
                loadChildren: 'app/plugins/datatable/datatable.module#DatatableInitModule'
            },
            {
                path: 'loading-buttons',
                loadChildren: 'app/plugins/loading-buttons/loading-buttons.module#LoadingButtonsModule'
            },
            {
                path: 'notifications',
                loadChildren: 'app/plugins/notifications/notifications.module#NotificationsModule'
            },
            {
                path: 'spinners',
                loadChildren: 'app/plugins/spinners/spinners.module#SpinnersModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PluginsRoutingModule {}
