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

  columns: string[] = ['id', 'name', 'pn', 'email', 'action'];


  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(private _route: Router, private ds: DataService) {
  }


  /*Filter*/
  filter = (event: Event): any => {
    const filterValue = (event.target as HTMLInputElement).value;
    this.store.filter = filterValue.trim().toLowerCase();
  }

  /*get data*/

  display = (): any => {
    this.ds.details().subscribe(
      data => {
        this.store = data;
      }
    )
  }

  /*Delete*/

  delete = (index: any): any => {
    let result = confirm("Are you sure delete the record");

    if (result == true) {
      this.ds.delete(index).subscribe(
        data => {
          alert("Successfully deleted the record");
          console.log(data);

          this.display();
        }
      )
    }

    else {
      alert('record aborted');
    }

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
