import { NgModule } from '@angular/core';

import { FontAwesomeComponent } from './font-awesome.component';
import { SimpleLineIconsComponent } from './simple-line-icons.component';
import { GlyphiconsComponent } from './glyphicons.component';
import { GlyphiconsFiletypesComponent } from './glyphicons-filetypes.component';
import { GlyphiconsSocialComponent } from './glyphicons-social.component';

import { IconsRoutingModule } from './icons-routing.module';

@NgModule({
  imports: [ IconsRoutingModule ],
  declarations: [
    FontAwesomeComponent,
    SimpleLineIconsComponent,
    GlyphiconsComponent,
    GlyphiconsFiletypesComponent,
    GlyphiconsSocialComponent
  ]
})
export class IconsModule { }
