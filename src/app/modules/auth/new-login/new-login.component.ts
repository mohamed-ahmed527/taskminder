import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from './../../../all-services/service.service';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-new-login',
  templateUrl: './new-login.component.html',
  styleUrls: ['./new-login.component.css']
})
export class NewLoginComponent {
  constructor (private fb:FormBuilder , private router:Router , private service:ServiceService,private http:HttpClient) {};
  
  login = this.fb.group({
    username: ["", Validators.required],
    password: ["", Validators.required]
  });
  
  isSubmitted = false;
  allUsers!: any ;
  isExist = false ;
  
  ngOnInit () {
    this.http.get('http://localhost:3000/users').subscribe((data)=> {this.allUsers = data} );
  };

  onSubmit () {
    this.isSubmitted = true;
    if (this.login.value.username!.length > 0 && this.login.value.password!.length > 0) {
      this.allUsers.find((m:any) => {(m.username == this.login.value.username && m.password == this.login.value.password) ?
        ((this.isExist = true),localStorage.setItem('user',JSON.stringify(m))) : '' });
    }
    if (this.isExist) {
      this.router.navigateByUrl('/profile');
    };
  }
}


