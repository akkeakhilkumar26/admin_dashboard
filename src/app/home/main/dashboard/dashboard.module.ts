import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../main.component';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { DataListComponent } from './data-list/data-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { MaterialModule } from 'src/app/material/material.module';
import { UserViewComponent } from './data-list/user-view/user-view.component';
import { UserDeleteComponent } from './data-list/user-delete/user-delete.component';
import { ChngUsrPsswdComponent } from './data-list/chng-usr-psswd/chng-usr-psswd.component';
import { NewGroupComponent } from './new-group/new-group.component';

@NgModule({
  declarations: [
    DataListComponent,
    DashboardComponent,
    AddUserComponent,
    UserViewComponent,
    UserDeleteComponent,
    ChngUsrPsswdComponent,
    NewGroupComponent
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
            path: 'add-group',
            component:NewGroupComponent
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
