import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

// export interface DialogData {
//   animal: 'panda' | 'unicorn' | 'lion';
// }

@Component({
  selector: 'app-creategroup',
  templateUrl: './creategroup.component.html',
  styleUrls: ['./creategroup.component.css']
})

export class CreategroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
// @Inject(MAT_DIALOG_DATA) public data: DialogData
