import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Initialization logic can go here
  }

  // Methods for handling user interactions
  getStarted() {
    console.log('Get Started button clicked');
    // Add navigation or other logic here
  }

  learnMore() {
    console.log('Learn More button clicked');
    // Add navigation or modal display logic here
  }

  downloadPdf() {
    console.log('Download PDF button clicked');
    // Add download logic here
  }

  signIn() {
    console.log('Sign In button clicked');
    // Add authentication logic or navigation here
  }

}