import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MustMatch } from "../../../../core/functions/passValidation";
import { Structure } from 'src/app/core/models/structure';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {

  constructor(private fb: FormBuilder, private ds: DataService) { }

  hide = true;

  store!: Structure[];

  /* User Creation Form Fields */
  user!: FormGroup;

  ngOnInit(): void {
    this.user = this.fb.group({
      profile: [''],
      id: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      fname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      lname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      pn: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      groups: ['', [Validators.required]],
      pwd: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      cpwd: ['', [Validators.required]],
      org: ['', [Validators.required]]
    }, { validator: MustMatch('pwd', 'cpwd') })
  }

  /*Groups*/
  groups = [
    {
      value: 'Group-A', viewValue: 'Group-A'
    },

    {
      value: 'Group-B', viewValue: 'Group-B'
    },

    {
      value: 'Group-C', viewValue: 'Group-C'
    }
  ];


  /*Oraganizations*/
  org = [
    {
      value: 'Internal', viewValue: 'Internal'
    },

    {
      value: 'External', viewValue: 'External'
    }
  ]


  /*User Creation Validations */
  formFieldErrors(val: string) {
    return this.user.get(val)?.errors;
  }

  formFieldValidator(val: string) {
    return (this.user.get(val)?.invalid && (this.user.get(val)?.dirty || this.user.get(val)?.touched));
  }

  //json-server data

  display = (): any => {
    this.ds.details().subscribe(
      data => {
        this.store = data;
        console.log(data);
      }
    )
  }

  /* Post Method*/
  add = (): any => {


    if (this.store.findIndex((element: any) => element.id === this.user.controls['id']) === -1) {

      let temp = new Structure();

      temp.profile = this.user.controls['profile'].value;
      temp.id = this.user.controls['id'].value;
      temp.fname = this.user.controls['fname'].value;
      temp.lname = this.user.controls['lname'].value;
      temp.pn = this.user.controls['pn'].value;
      temp.email = this.user.controls['email'].value;
      temp.groups = this.user.controls['groups'].value;
      temp.pwd = this.user.controls['pwd'].value;
      temp.cpwd = this.user.controls['cpwd'].value;
      temp.org = this.user.controls['org'].value;

      this.ds.send(temp).subscribe(
        data => {
          console.log(data);
          alert("Successfully added");
        }
      )
      this.user.reset();
    }

    else {
      alert("Id is Already use");
    }
  }

  cancel = (): void => {
    this.user.reset();
  }




}
