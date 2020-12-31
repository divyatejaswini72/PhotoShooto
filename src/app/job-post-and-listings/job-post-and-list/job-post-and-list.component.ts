import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-job-post-and-list',
  templateUrl: './job-post-and-list.component.html',
  styleUrls: ['./job-post-and-list.component.scss']
})
export class JobPostAndListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: Observable<any>;
  // dataSource: MatTableDataSource<Card> = new MatTableDataSource<Card>();
  dataSource;
  pageEvent: PageEvent;
  constructor(private httpClient: HttpClient) { }



  content;

  products: any = [];
  availability: any = [];
  // public dataSource: any;
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;
    this.getJobListings();

  }

  getJobListings() {
    this.content = true;
    this.httpClient.get("assets/data.json").subscribe(data => {
      console.log(data);
      this.products = data;
      this.dataSource = new MatTableDataSource<any>(this.products);
      this.dataSource.paginator = this.paginator;
      this.totalSize = this.products.length;
      this.iterator();

      // this.obs = this.dataSource.connect();
    });
  }

  getAvailabilityPosts() {
    this.content = false;
    this.httpClient.get("assets/dataa.json").subscribe(data => {
      this.products = data;
      this.dataSource = new MatTableDataSource(this.products);
      this.dataSource.paginator = this.paginator;
      this.totalSize = this.products.length;
      this.iterator();
    })
  }

  handlePage(event?: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.iterator();
  }

  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.products.slice(start, end);
    this.dataSource = part;
  }

}
