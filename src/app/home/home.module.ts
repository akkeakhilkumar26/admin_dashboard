import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreategroupComponent } from './side-bar/creategroup/creategroup.component';
import { GrouplistComponent } from './side-bar/grouplist/grouplist.component';



@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    CreategroupComponent,
    GrouplistComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('./main/dashboard/dashboard.module').then(m => m.DashboardModule)
          }
        ]
      }
    ]),

  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SideBarComponent
  ]
})
export class HomeModule { }