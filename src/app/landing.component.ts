import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };
  
  // Method to get the current year for the copyright notice
  getCurrentYear(): number {
    return new Date().getFullYear();
  }

  submitForm() {
    console.log('Form submitted:', this.formData);
    // Here you would normally send the form data to your backend
    alert('Thank you for your message! We\'ll get back to you soon.');
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}
