import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { Structure } from 'src/app/core/models/structure';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})


export class DataListComponent implements OnInit {

  store = new MatTableDataSource<Structure>();


  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;


  columns: string[] = ['profile', 'id', 'fname', 'lname', 'pn', 'email', 'groups', 'pwd', 'cpwd', 'org'];

  constructor(private _route: Router, private ds: DataService) {
  }


  /*Filter*/
  filter = (event: Event): any => {
    const filterValue = (event.target as HTMLInputElement).value;
    this.store.filter = filterValue.trim().toLowerCase();
  }



  ngOnInit(): void {

    this.store.paginator = this.paginator; //Pagination
    this.store.sort = this.sort; // Sort

    this.ds.details().subscribe(
      data => {
        this.store.data = data;
        console.log(data);
      }
    )
  }

  goTo() {
    this._route.navigate(['/home/add-user'])
  }

}
