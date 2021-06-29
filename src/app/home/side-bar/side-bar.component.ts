import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreategroupComponent } from './creategroup/creategroup.component';
import { CreateorganisationComponent } from './createorganisation/createorganisation.component';
import { ExternalorgComponent } from './externalorg/externalorg.component';
import { GrouplistComponent } from './grouplist/grouplist.component';
import { InternalorgComponent } from './internalorg/internalorg.component';

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
    const dialogRef = this.dialog.open(GrouplistComponent);

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
  }
  openInternalorg() {
    this.dialog.open(InternalorgComponent, {
      data: {
        animal: 'panda'
      }
    });
  }
  openExternalorg() {
    this.dialog.open(ExternalorgComponent, {
      data: {
        animal: 'panda'
      }
    });
  }
  openDialog() {
    this.dialog.open(CreategroupComponent);
  }
  openOrganisation() {
    this.dialog.open(CreateorganisationComponent, {
      data: {
        animal: 'panda'
      }
    });
  }
  ngOnInit(): void {
  }

}
