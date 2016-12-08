import { NgModule }                 from '@angular/core';
import { Routes,
         RouterModule }             from '@angular/router';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'UIKits'
        },
        children: [
            {
                path: 'email',
                loadChildren: 'app/uikits/email/email.module#EmailModule'
            },
            {
                path: 'invoicing',
                loadChildren: 'app/uikits/invoicing/invoice.module#InvoiceModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UIKitsRoutingModule {}
