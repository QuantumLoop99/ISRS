import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RouterModule } from '@angular/router';
//Test1


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  credentials = {
    nic: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        alert('Login successful!');
        this.router.navigate(['/dashboard']); // Redirect after login
      },
      (error) => {
        alert('Login failed. Check credentials.');
        console.error(error);
      }
    );
  }
}

