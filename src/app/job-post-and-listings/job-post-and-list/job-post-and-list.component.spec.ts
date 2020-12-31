import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPostAndListComponent } from './job-post-and-list.component';

describe('JobPostAndListComponent', () => {
  let component: JobPostAndListComponent;
  let fixture: ComponentFixture<JobPostAndListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobPostAndListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPostAndListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
