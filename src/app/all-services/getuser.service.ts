import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetuserService {
  constructor() { }

  user:any
  getUser () {
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);
    return this.user;
  }
}
