import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserViewComponent } from './user-view/user-view.component';
import { Structure } from 'src/app/core/models/structure';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { DataService } from 'src/app/core/services/data.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  action: string;
  email: string;
  department: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'UserName', email: 'abcd@gmail.com', department: 'communications', weight: 9876543219, action: 'Li' },
  { position: 2, name: 'UserName', email: 'abcd@gmail.com', department: 'communications', weight: 9876543219, action: 'He' },
  { position: 3, name: 'UserName', email: 'abcd@gmail.com', department: 'communications', weight: 9876543219, action: 'H' },
  { position: 4, name: 'UserName', email: 'abcd@gmail.com', department: 'communications', weight: 9876543219, action: 'Be' },
  { position: 5, name: 'UserName', email: 'abcd@gmail.com', department: 'communications', weight: 9876543219, action: 'B' },
  { position: 6, name: 'UserName', email: 'abcd@gmail.com', department: 'communications', weight: 9876543219, action: 'C' },
  { position: 7, name: 'UserName', email: 'abcd@gmail.com', department: 'communications', weight: 9876543219, action: 'C' },
];
@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})


export class DataListComponent implements OnInit {

  store = new MatTableDataSource<Structure>();

  public imagePath: any;

  public message!: string;

  columns: string[] = ['id', 'name', 'pn', 'email', 'action'];

  displayedColumns: string[] = ['position', 'profile','name', 'weight', 'symbol'];


  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private _route: Router, private ds: DataService, public dialog: MatDialog) {
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


  /*Delete method */
  delete = (index: any): any => {
    this.ds.delete(index).subscribe(
      data => {
        console.log(data);
        this.display();
      }
    )

  }

  /* Dialog */
  openDialog(action: any, primary: any) {
    primary.action = action;
    const dialogRef = this.dialog.open(UserDeleteComponent, { data: primary });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Delete') {
        this.delete(primary.id);
      }
    })
  }




  ngOnInit(): void {

    this.store.paginator = this.paginator; //Pagination
    this.store.sort = this.sort; // Sort

    this.ds.details().subscribe(
      data => {
        this.store.data = data;
        //console.log(data);
      }
    )
  }



  goTo() {
    this._route.navigate(['/home/add-user'])
  }

}


