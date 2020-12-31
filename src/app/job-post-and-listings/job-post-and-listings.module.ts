import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { JobPostAndListingsRoutingModule } from './job-post-and-listings-routing.module';
import { JobPostAndListComponent } from './job-post-and-list/job-post-and-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [JobPostAndListComponent],
  imports: [
    CommonModule, MatCardModule, MatTabsModule, HttpClientModule, MatButtonModule,
    JobPostAndListingsRoutingModule, MatIconModule, FlexLayoutModule, MatPaginatorModule
  ]
})
export class JobPostAndListingsModule { }
