import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Structure } from 'src/app/core/models/structure';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-chng-usr-psswd',
  templateUrl: './chng-usr-psswd.component.html',
  styleUrls: ['./chng-usr-psswd.component.css']
})
export class ChngUsrPsswdComponent implements OnInit {
  hide = true;

  store!: Structure[];


  display = (): any => {
    this.ds.details().subscribe(
      data => {
        this.store = data;
      }
    )
  }
  constructor(private ds: DataService, @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  ngOnInit(): void {
  }

}
