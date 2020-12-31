import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobPostAndListComponent } from './job-post-and-listings/job-post-and-list/job-post-and-list.component';
import { JobPostAndListingsRoutingModule } from './job-post-and-listings/job-post-and-listings-routing.module';
import { JobPostAndListingsModule } from './job-post-and-listings/job-post-and-listings.module';

const routes: Routes = [{ path: 'job-list', component: JobPostAndListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), JobPostAndListingsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
