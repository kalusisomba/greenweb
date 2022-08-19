import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AboutComponent } from './about/about.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { EventsComponent } from './events/events.component';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { ContactsComponent } from './contacts/contacts.component';
import { BlogsComponent } from './blogs/blogs.component';


@NgModule({
  declarations: [
    AboutComponent,
    CampaignsComponent,
    EventsComponent,
    VolunteersComponent,
    ContactsComponent,
    BlogsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
