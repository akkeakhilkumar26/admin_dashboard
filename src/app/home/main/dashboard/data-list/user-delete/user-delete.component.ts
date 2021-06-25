import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Structure } from 'src/app/core/models/structure';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  action!: string;
  local_data: any;

  constructor(private ds: DataService, @Optional() @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<UserDeleteComponent>) {
    this.local_data = { ...data };
    this.action = this.local_data.action;
  }

  store!: Structure[];


  /* Confirm Method */
  doAction() {
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }

  /*Cancel*/
  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  ngOnInit(): void {
  }




}
