import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreategroupComponent } from './creategroup/creategroup.component';
import { GrouplistComponent } from './grouplist/grouplist.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  menuTrigger: any;

  constructor(public dialog: MatDialog) { 
    // openDialog() {
    //   this.dialog.open();
    // }
  }
  openGroup() {
    const dialogRef = this.dialog.open(GrouplistComponent, {
    width: '45%',
    height: '80%',
    maxWidth: '100vw',
    maxHeight: '100vh',
    });

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }
  openDialog() {
    this.dialog.open(CreategroupComponent, {
      data: {
        animal: 'panda'
      }
    });
  }


  ngOnInit(): void {
  }

}
