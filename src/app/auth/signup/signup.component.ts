import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [FormsModule, RouterModule], 
})
export class SignupComponent {
  user = {
    nic: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'citizen' // Default role
  };

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    if (this.user.password !== this.user.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    this.authService.register(this.user).subscribe(
      (response) => {
        alert('Registration successful! Please verify your email.');
        this.router.navigate(['/login']); // Redirect to login page
      },
      (error) => {
        alert('Registration failed! Try again.');
        console.error(error);
      }
    );
  }
}

