import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MustMatch } from "../../../../core/functions/passValidation";
import { Structure } from 'src/app/core/models/structure';
import { DataService } from 'src/app/core/services/data.service';
import { UserDeleteComponent } from '../data-list/user-delete/user-delete.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {

  constructor(private fb: FormBuilder, private ds: DataService) { }

  hide = true;

  store!: Structure[];

  url: any = "";

  public imagePath: any;

  imageURL: any = "../../../../../assets/images/profile.png";

  public message!: string;

  /* User Creation Form Fields */
  user!: FormGroup;

  ngOnInit(): void {
    this.user = this.fb.group({
      profile: ['', [Validators.required]],
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


  /*onselect(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      reader.onload = event => {
        this.url = event.target?.result;
      }
    }
  }*/

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

  /* Image Picker Code*/
  fileChange(files: any) {
    if (files.length == 0)
      return;

    let mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported";
      return;
    }

    this.message = "";
    let reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imageURL = reader.result;
    }

  }

  /* Post Method*/
  add = (): any => {

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
        this.user.reset();
      }
    );
  }

  cancel = (): void => {
    this.user.reset();
  }









}
