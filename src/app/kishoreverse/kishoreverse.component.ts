import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-kishoreverse',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="kishoreverse-content">
      <h1 class="kishoreverse-title">KISHOREVERSE</h1>
      <div class="kishoreverse-description">
        <p>Welcome to the Kishoreverse—a dimension where code meets creativity, and ideas transform into reality.</p>
        <p>This is where innovation lives, where every line of code tells a story, and where design meets purpose.</p>
        <p>Explore, create, and let's build something extraordinary together.</p>
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
export class KishoreverseComponent {
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


