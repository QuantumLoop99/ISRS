import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private router: Router) { }
goToRegister() {
    this.router.navigate(['/register']);
  }
title = 'About Us';
  description = 'This is a simple Angular about page component.';
}