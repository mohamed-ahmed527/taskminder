import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewLoginComponent } from './new-login/new-login.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './profile/header/header.component';
import { SidebarComponent } from './profile/sidebar/sidebar.component';
import { TasksComponent } from './profile/tasks/tasks.component';
import { TaskCardComponent } from './profile/tasks/task-card/task-card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NewLoginComponent,
    ProfileComponent,
    HeaderComponent,
    SidebarComponent,
    TasksComponent,
    TaskCardComponent,
  ],
  imports: [
  CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AuthModule { }
