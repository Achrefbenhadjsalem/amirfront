// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private userName = new BehaviorSubject<string>('');

  isLoggedIn = this.loggedIn.asObservable();
  currentUserName = this.userName.asObservable();

  login(name: string): void {
    this.loggedIn.next(true);
    this.userName.next(name);

  }

  logout(): void {
    this.loggedIn.next(false);
    this.userName.next('');
    sessionStorage.removeItem('jwt'); // Remove token from session storage
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('role');
  }
  getToken(): string | null {
    return sessionStorage.getItem('jwt');
  }
}
