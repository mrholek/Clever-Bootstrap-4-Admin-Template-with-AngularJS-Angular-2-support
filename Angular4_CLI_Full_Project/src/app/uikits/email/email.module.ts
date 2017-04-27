import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Email
import { ComposeComponent } from './compose.component';
import { InboxComponent } from './inbox.component';
import { MessageComponent } from './message.component';

// Routing
import { EmailRoutingModule } from './email-routing.module';

@NgModule({
  imports: [
    EmailRoutingModule,
    CommonModule,
  ],
  declarations: [
    ComposeComponent,
    InboxComponent,
    MessageComponent
  ]
})
export class EmailModule { }
