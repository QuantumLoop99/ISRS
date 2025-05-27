import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf, NgFor} from '@angular/common';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  imports: [NgIf, NgFor]
})
export class ContactComponent {
  
  constructor(private router: Router) { }
goToRegister() {
    this.router.navigate(['/register']);

}

faqs = [
    { "question": "What is QuickCert?", "answer": "QuickCert is an online platform for requesting income statements digitally, ensuring fast, secure, and efficient document processing.", "open": false },
    { "question": "Who can use QuickCert?", "answer": "QuickCert is designed for Sri Lankan citizens who need official income statements, as well as government officers responsible for processing these requests.", "open": false },
    { "question": "How do I request an income statement?", "answer": "Register on QuickCert, fill out the online application, upload required documents, and track your request in real time.", "open": false },
    { "question": "How can I track my request?", "answer": "You can monitor your request status through your QuickCert dashboard, with real-time updates and notifications.", "open": false },
    { "question": "Are payments secure on QuickCert?", "answer": "Yes, all payments are processed through encrypted gateways ensuring secure transactions.", "open": false },
    { "question": "How do I verify my income statement?", "answer": "QuickCert generates digitally signed statements with a QR code for verification.", "open": false }
];

  toggle(index: number): void {
    console.log('Clicked:', index); // Debug log
    this.faqs[index].open = !this.faqs[index].open;
  }
}
