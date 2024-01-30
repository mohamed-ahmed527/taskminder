import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { NewLoginComponent } from './new-login/new-login.component';
import { ProfileComponent } from './profile/profile.component';
import { ServiceService } from 'src/app/all-services/service.service';
import { InprofileService } from 'src/app/all-services/inprofile.service';

const routes: Routes = [
  {
    path:'',
    component:NewLoginComponent,
    canActivate: [InprofileService]
  },
  {
    path:"profile",
    component: ProfileComponent,
    canActivate: [ServiceService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

