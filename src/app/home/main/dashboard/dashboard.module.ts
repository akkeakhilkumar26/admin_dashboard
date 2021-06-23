import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../main.component';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { DataListComponent } from './data-list/data-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
    DataListComponent,
    DashboardComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: 'home',
        component: DashboardComponent,
        children: [
          {
            path: 'list',
            component: DataListComponent
          },
          {
            path: 'add-user',
            component: AddUserComponent
          },
          {
            path: '', redirectTo: 'list', pathMatch: 'full'
          },
          {
            path: '**', redirectTo: 'list', pathMatch: 'full'
          }
        ]
      },
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: '**', redirectTo: 'home', pathMatch: 'full'
      },
    ]),
  ]
})
export class DashboardModule { }
