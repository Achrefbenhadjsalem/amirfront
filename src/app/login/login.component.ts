import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../Les Services/Login.service';
import { AuthService } from '../Les Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Get queryParams from the route
    this.route.queryParams.subscribe(params => {
      const email = params['email'];
      const password = params['password'];
      if (email && password) {
        this.loginForm.patchValue({ email, password });
      }
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.loginService.login(email, password).subscribe(
        (authResponse) => {
          console.log('Login successful!', authResponse);
          sessionStorage.setItem('token', authResponse.jwt);
          sessionStorage.setItem('name', authResponse.name);
          sessionStorage.setItem('role', authResponse.role);
          this.authService.login(authResponse.name);
          this.router.navigate(['/user-events']); // Navigate to '/user-events' upon successful login
        },
        (error) => {
          console.error('Login error:', error);
          this.errorMessage = 'Invalid credentials. Please try again.';
        }
      );
    }
  }
}
