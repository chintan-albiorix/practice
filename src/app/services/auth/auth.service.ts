import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticate: boolean = false;

  constructor() {
    const isAuthenticatedStr = localStorage.getItem('isAuthenticated');
    if (isAuthenticatedStr !== null) {
      this.isAuthenticate = JSON.parse(isAuthenticatedStr);
    }
  }

  login(username: string, password: string): boolean {
    // You would typically call an API to validate the credentials
    if (username === 'user' && password === 'password') {
      this.isAuthenticate = true;
      localStorage.setItem('isAuthenticated', JSON.stringify(this.isAuthenticate));
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticate = false;
    localStorage.removeItem('isAuthenticated');
  }

  isAuthenticated(): boolean {
    return this.isAuthenticate;
  }
}
