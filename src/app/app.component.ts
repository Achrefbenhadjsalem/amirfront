import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final';
  showNavbar: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // List of routes where the navbar should be hidden
        const hideNavbarRoutes = ['/admindashboard','/superadmin']; // Update this to the route you want to hide the navbar
        this.showNavbar = !hideNavbarRoutes.includes(event.urlAfterRedirects);
      }
    });
  }
}
