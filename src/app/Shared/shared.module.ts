import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { PureCounter } from '@srexi/purecounterjs';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    // PureCounter
  ]
})
export class SharedModule { }
