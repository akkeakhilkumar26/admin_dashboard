import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserViewComponent } from './user-view/user-view.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  action: string;
  email:string;
  department:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'UserName',email:'abcd@gmail.com',department:'communications',weight: 9876543219, action: 'Li'},
  {position: 2, name: 'UserName',email:'abcd@gmail.com',department:'communications',weight: 9876543219, action: 'He'},
  {position: 3, name: 'UserName',email:'abcd@gmail.com',department:'communications',weight: 9876543219, action: 'H'},
  {position: 4, name: 'UserName',email:'abcd@gmail.com',department:'communications',weight: 9876543219, action: 'Be'},
  {position: 5, name: 'UserName',email:'abcd@gmail.com',department:'communications',weight: 9876543219, action: 'B'},
  {position: 6, name: 'UserName',email:'abcd@gmail.com',department:'communications',weight: 9876543219, action: 'C'},
  {position: 7, name: 'UserName',email:'abcd@gmail.com',department:'communications',weight: 9876543219, action: 'C'},
];
@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name','email','department', 'weight', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(
    private _route: Router,
    public dialog: MatDialog
  ) {}
  deleteUser() {
    this.dialog.open(UserDeleteComponent);
  }
viewUser(){
  this.dialog.open(UserViewComponent);
}
  ngOnInit(): void {
  }

  goTo() {
    this._route.navigate(['/home/add-user'])
  }

}


