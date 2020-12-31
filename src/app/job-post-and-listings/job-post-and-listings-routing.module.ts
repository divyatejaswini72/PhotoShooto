import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobPostAndListComponent } from '../job-post-and-listings/job-post-and-list/job-post-and-list.component';

const routes: Routes = [{ path: 'jobs', component: JobPostAndListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobPostAndListingsRoutingModule { }
