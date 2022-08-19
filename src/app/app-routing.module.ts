import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';
import { BlogsComponent } from './Pages/blogs/blogs.component';
import { CampaignsComponent } from './Pages/campaigns/campaigns.component';
import { ContactsComponent } from './Pages/contacts/contacts.component';
import { EventsComponent } from './Pages/events/events.component';
import { VolunteersComponent } from './Pages/volunteers/volunteers.component';
import { DashboardComponent } from './Shared/dashboard/dashboard.component';
import { HomeComponent } from './Pages/home/home.component';

const routes: Routes = [
  
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', redirectTo: '/index', pathMatch: 'full' },
      // {
      // path: 'TrainingData', data:{ preload: true}, loadChildren: () => import('./Modules/modelTraining/modeltraining.module').then(m => m.ModeltrainingModule)
      // },
      {
        path: 'index', component: HomeComponent
      },
      { path: 'campaigns', component: CampaignsComponent },
      { path: 'about', component: AboutComponent },
      { path: 'blogs', component: BlogsComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'events', component: EventsComponent },
      { path: 'volunteers', component: VolunteersComponent },
      // {
      //   path: 'campaigns', loadChildren: () => import('./Pages/pages.module').then(m => m.PagesModule)
      // },
    

    ]
  },

  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
