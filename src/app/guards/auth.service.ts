import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated() {
    return localStorage.getItem('isLogin') === 'true';
  }

  login() {
    localStorage.setItem('isLogin', 'true');
  }

  logout() {
    localStorage.setItem('isLogin', null);
  }
}
