import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="page-content">
      <h1 class="page-title">Projects</h1>
      
      <div class="project-card">
        <h2 class="card-title">sustainable farming</h2>
        <p class="card-description">
          An innovative platform promoting eco-friendly agricultural practices through resource optimization and community engagement.
         </p>
      </div>

      <div class="project-card">
        <h2 class="card-title">E-Commerce Website</h2>
        <p class="card-description">
          A modular, scalable e‑commerce platform delivering seamless shopping, secure payments, and fast doorstep delivery.
        </p>
      </div>

      <div class="project-card">
        <h2 class="card-title">Portfolio Website</h2>
        <p class="card-description">
          A responsive portfolio website showcasing my projects, skills, and experience.
        </p>
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
  `,
  styles: []
})
export class ProjectsComponent {
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
}


