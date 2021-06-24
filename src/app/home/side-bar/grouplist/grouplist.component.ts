import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserToGroupComponent } from './add-user-to-group/add-user-to-group.component';
import { DelUserFromgroupComponent } from './del-user-fromgroup/del-user-fromgroup.component';

@Component({
  selector: 'app-grouplist',
  templateUrl: './grouplist.component.html',
  styleUrls: ['./grouplist.component.css']
})
export class GrouplistComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(AddUserToGroupComponent, {
      data: {
        animal: 'panda'
      }
    });
  }

delDialog(){
  this.dialog.open(DelUserFromgroupComponent, {
    data: {
      animal: 'panda'
    }
  });
}
}