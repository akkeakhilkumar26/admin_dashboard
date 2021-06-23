import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createorganisation',
  templateUrl: './createorganisation.component.html',
  styleUrls: ['./createorganisation.component.css']
})
export class CreateorganisationComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  constructor() { }

  ngOnInit(): void {
  }

}
