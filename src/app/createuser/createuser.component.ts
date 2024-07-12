import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../les classes/User';
import { UserService } from '../Les Services/User.service';
import { Role } from '../les classes/Role.enum';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent {
  userForm: FormGroup;
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const user: User = {
        id: 0,
        name: this.userForm.get('name')?.value,
        phone: this.userForm.get('phone')?.value,
        email: this.userForm.get('email')?.value,
        password: this.userForm.get('password')?.value,
        role: Role.USER
      };

      this.userService.register(user).subscribe(
        response => {
          console.log('User registered successfully', response);
          localStorage.setItem('token', response.token);
          this.userForm.reset();
          setTimeout(() => {
            this.router.navigate(['/login'], { queryParams: { email: user.email, password: user.password } });
          }, 1000); 
        },
        error => {
          console.error('Error registering user', error);
          this.errorMessage = error.message || 'Registration failed. Please try again.';
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }

  passwordMatchValidator(formGroup: FormGroup): void {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('confirmPassword');

    if (passwordControl && confirmPasswordControl && passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ passwordMismatch: true });
    } else {
      confirmPasswordControl?.setErrors(null);
    }
  }
}
