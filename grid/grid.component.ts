import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';  // Adjust the path accordingly
import { RestApiService } from '../_services/rest.api.service';
import { GridInput, Items, RequestParams } from '../model/model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  dataSource!: MatTableDataSource<Items>;
  user: RequestParams = {
    "page": 1,
    "limit": 10,
    "sortBy": "createdOn",
    "sortDir": "desc",
    "filter": {
        "logic": "and",
        "filters": []
    }
  };

  constructor(
    private service: RestApiService,
    private authService: AuthService,  // Inject AuthService
    private router: Router  // Inject Router
  ) {}

  ngOnInit(): void {
    this.service.getUser(this.user).subscribe((result: GridInput) => {
      this.dataSource = new MatTableDataSource(result.items);
    });
  }

  displayedColumns: string[] = ['userName', 'from', 'to', 'sentOn', 'status'];

  logout(): void {
    this.authService.logout();
    console.log('Navigating to login page...');
    this.router.navigate(['/login']);
  }
  
  

}
