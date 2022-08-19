import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EventsComponent } from './events/events.component';
import { VolunteersComponent } from './volunteers/volunteers.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: 'campaigns', component: CampaignsComponent },
      { path: 'about', component: AboutComponent },
      { path: 'blogs', component: BlogsComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'events', component: EventsComponent },
      { path: 'volunteers', component: VolunteersComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
