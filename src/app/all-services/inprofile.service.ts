import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InprofileService implements CanActivate {
  canActivate () :boolean {
    if (localStorage.getItem('user')){
      return false
    }
    return true
  }
}
