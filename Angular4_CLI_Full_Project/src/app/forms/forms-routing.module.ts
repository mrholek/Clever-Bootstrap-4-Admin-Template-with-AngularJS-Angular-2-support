import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Forms'
    },
    children: [
      {
        path: 'basic-forms',
        loadChildren: './basic-forms/basic-forms.module#BasicFormsModule'
      },
      {
        path: 'advanced-forms',
        loadChildren: './advanced-forms/advanced-forms.module#AdvancedFormsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {}
