import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/core/services/data.service';
import { Structure } from 'src/app/core/models/structure';

// export interface DialogData {
//   animal: 'panda' | 'unicorn' | 'lion';
// }

@Component({
  selector: 'app-creategroup',
  templateUrl: './creategroup.component.html',
  styleUrls: ['./creategroup.component.css']
})

export class CreategroupComponent implements OnInit {

  store!: Structure[];

  group: any;

  displayColumns: string[] = ['id', 'name', 'action'];

  constructor(private ds: DataService) { }


  display() {
    this.ds.details().subscribe(
      data => {
        this.store = data;
      }
    )
  }



  ngOnInit(): void {
    this.display();
  }

}
