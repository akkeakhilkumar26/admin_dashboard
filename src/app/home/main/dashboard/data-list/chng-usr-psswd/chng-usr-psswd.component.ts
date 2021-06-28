import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
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

  constructor(private ds: DataService, @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {
  }

  user = this.fb.group({
    id: ['',],
    fname: [''],
    lname: [''],
    pn: [''],
    email: [''],
    groups: [''],
    password: ['', [Validators.required]],
    confirm_password: ['', [Validators.required]],
    org: ['']
  });


  display = (): any => {
    this.ds.details().subscribe(
      data => {
        this.store = data;
      }
    )
  }

  update = (): any => {
    let temp = new Structure();

    temp.id = this.user.controls['id'].value;
    temp.pwd = this.user.controls['password'].value;
    temp.cpwd = this.user.controls['confirm_password'].value;

    let id = Number(temp.id);

    this.ds.edit(temp, id).subscribe(
      data => {
        alert("Successfully updated");
        console.log(data);
      }
    )
  }


  ngOnInit(): void {

    this.display();

    this.user.patchValue({
      id: this.data.id,
      fname:this.data.fname,
      lname:this.data.lname,
      pn:this.data.pn,
      email:this.data.email,
      groups:this.data.groups,
      password: this.data.pwd,
      confirm_password: this.data.cpwd,
      org:this.data.org
    });
  }

}
