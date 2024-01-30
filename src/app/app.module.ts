import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes,RouterModule } from '@angular/router';
import { AuthModule } from './modules/auth/auth.module';
import { ServiceService } from './all-services/service.service';

const routes:Routes = [
  {
    path:"",
    children: [
      {
        path:"",
        loadChildren: ()=> import("./modules/auth/auth.module").then((x) => x.AuthModule),
      },
      {
        path:"profile",
        children: [
          {
            path:"",
            loadChildren: () => import("./modules/auth/auth.module").then((x)=> x.AuthModule)
          }
        ]
      }
    ],
  },
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
BrowserModule,
  AppRoutingModule,
  AuthModule,
  RouterModule.forRoot(routes),
  NgbModule,
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent],
})
export class AppModule { }
