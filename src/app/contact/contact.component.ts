import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="contact-page">
      <div class="contact-content">
        <h1 class="contact-heading">Get in Touch</h1>
        <p class="contact-subheading">Have a project or idea? Let's talk.</p>

        <div *ngIf="showSuccess" class="message success-message" role="alert">
          <svg class="message-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
          <span>Thanks! I'll get back to you soon.</span>
        </div>

        <div *ngIf="showError" class="message error-message" role="alert">
          <svg class="message-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <span>Oops, something went wrong.</span>
        </div>

        <form class="contact-form" (ngSubmit)="onSubmit()" #form="ngForm">
          <div class="form-group">
            <label for="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              [(ngModel)]="formData.name" 
              required
              aria-required="true"
              aria-describedby="name-error"
              [class.error]="formSubmitted && !formData.name">
            <span *ngIf="formSubmitted && !formData.name" class="field-error" id="name-error">Name is required</span>
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              [(ngModel)]="formData.email" 
              required
              aria-required="true"
              aria-describedby="email-error"
              [class.error]="formSubmitted && (!formData.email || !isValidEmail(formData.email))">
            <span *ngIf="formSubmitted && (!formData.email || !isValidEmail(formData.email))" class="field-error" id="email-error">
              Valid email is required
            </span>
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              [(ngModel)]="formData.message" 
              required
              aria-required="true"
              aria-describedby="message-error"
              [class.error]="formSubmitted && !formData.message"></textarea>
            <span *ngIf="formSubmitted && !formData.message" class="field-error" id="message-error">Message is required</span>
          </div>

          <button type="submit" class="submit-button" [disabled]="isSubmitting">
            <span *ngIf="!isSubmitting">Send</span>
            <span *ngIf="isSubmitting">Sending...</span>
          </button>
        </form>

        <div class="social-links" aria-label="Social media links">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="social-link"
            aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="social-link"
            aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="social-link"
            aria-label="Twitter">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
        </div>
        <button class="return-home-button" 
                (click)="goHome()" 
                (mouseenter)="onHover()"
                (mouseleave)="onLeave()"
                [class.animated]="isHovered"
                aria-label="Return to home">
          <div class="button-icon-wrapper">
            <svg class="home-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </div>
          <span class="button-text">Return to Home</span>
          <div class="button-ripple"></div>
        </button>
      </div>
    </div>
  `,
  styles: []
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false;
  showSuccess = false;
  showError = false;
  formSubmitted = false;
  isHovered = false;

  constructor(private router: Router) {}
  
  goHome() {
    this.router.navigate(['/']);
  }

  onHover() {
    this.isHovered = true;
  }

  onLeave() {
    this.isHovered = false;
  }

  ngOnInit() {
    // Initialize EmailJS with your public key
    emailjs.init('DJ68MtzBRlDsEaRSJ');
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async onSubmit() {
    this.formSubmitted = true;
    
    // Reset messages
    this.showSuccess = false;
    this.showError = false;

    // Basic validation
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.showError = true;
      setTimeout(() => this.showError = false, 5000);
      return;
    }

    if (!this.isValidEmail(this.formData.email)) {
      this.showError = true;
      setTimeout(() => this.showError = false, 5000);
      return;
    }

    this.isSubmitting = true;

    try {
      // EmailJS service configuration
      const templateParams = {
        from_name: this.formData.name,
        from_email: this.formData.email,
        message: this.formData.message,
        to_name: 'Kishore'
      };

      // Send email using EmailJS
      await emailjs.send(
        'service_t0pmfoe',      // Your EmailJS Service ID
        'template_njmqdag',     // Your EmailJS Template ID
        templateParams
      );

      // Success
      this.showSuccess = true;
      this.formData = { name: '', email: '', message: '' };
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        this.showSuccess = false;
      }, 5000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      this.showError = true;
      
      // Hide error message after 5 seconds
      setTimeout(() => {
        this.showError = false;
      }, 5000);
    } finally {
      this.isSubmitting = false;
    }
  }
}
