import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FontAwesomeComponent } from './font-awesome.component';
import { SimpleLineIconsComponent } from './simple-line-icons.component';
import { GlyphiconsComponent } from './glyphicons.component';
import { GlyphiconsFiletypesComponent } from './glyphicons-filetypes.component';
import { GlyphiconsSocialComponent } from './glyphicons-social.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Icons'
    },
    children: [
      {
        path: 'font-awesome',
        component: FontAwesomeComponent,
        data: {
          title: 'Font Awesome'
        }
      },
      {
        path: 'simple-line-icons',
        component: SimpleLineIconsComponent,
        data: {
          title: 'Simple Line Icons'
        }
      },
      {
        path: 'glyphicons',
        component: GlyphiconsComponent,
        data: {
          title: 'Glyphicons'
        }
      },
      {
        path: 'glyphicons-filetypes',
        component: GlyphiconsFiletypesComponent,
        data: {
          title: 'Glyphicons Filetypes'
        }
      },
      {
        path: 'glyphicons-social',
        component: GlyphiconsSocialComponent,
        data: {
          title: 'Glyphicons Social'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule {}
