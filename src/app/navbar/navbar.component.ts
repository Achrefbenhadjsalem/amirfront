// navbar.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Les Services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit { 
  isLoggedIn: boolean = false;
  userName: string = '';

  constructor(private authService: AuthService,private router:Router) {}

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
    });

    this.authService.currentUserName.subscribe((name: string) => {
      this.userName = name;
    });
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirect to the login page after logging out
  }
}
