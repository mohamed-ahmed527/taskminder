import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService implements CanActivate{
  canActivate() :boolean {
    if (localStorage.getItem('user')){
      return true;
    }
    return false
  };
}
