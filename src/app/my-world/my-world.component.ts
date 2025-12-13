import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-world',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="page-content">
      <h1 class="page-title">My World</h1>
      <p class="page-subtitle">Explore my digital presence across platforms</p>

      <!-- Resume Section -->
      <div class="resume-section">
        <div class="resume-card" (mouseenter)="onResumeHover()" (mouseleave)="onResumeLeave()">
          <div class="resume-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          </div>
          <div class="resume-content">
            <h2 class="resume-title">Resume</h2>
            <p class="resume-description">Download my latest resume to learn more about my experience and skills</p>
            <div class="resume-buttons">
              <a 
                href="/assets/resume.pdf" 
                download="Kishore_Vaddi_Resume.pdf" 
                class="resume-download-button"
                (click)="onResumeDownload($event)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                <span>Download Resume</span>
              </a>
              <button 
                class="resume-view-button"
                (click)="viewResume()">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                <span>View Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Interactive Platforms Grid -->
      <div class="platforms-grid">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="platform-card"
          [class.hovered]="hoveredCard === 'github'"
          (mouseenter)="hoveredCard = 'github'"
          (mouseleave)="hoveredCard = ''"
          aria-label="GitHub">
          <div class="platform-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </div>
          <h2 class="platform-name">GitHub</h2>
          <p class="platform-description">Code repositories and projects</p>
        </a>

        <a 
          href="https://leetcode.com/u/Kishore-1204/" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="platform-card"
          [class.hovered]="hoveredCard === 'leetcode'"
          (mouseenter)="hoveredCard = 'leetcode'"
          (mouseleave)="hoveredCard = ''"
          aria-label="LeetCode">
          <div class="platform-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h2 class="platform-name">LeetCode</h2>
          <p class="platform-description">Algorithm challenges and solutions</p>
        </a>

        <a 
          href="https://www.linkedin.com/in/kishorevaddi" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="platform-card"
          [class.hovered]="hoveredCard === 'linkedin'"
          (mouseenter)="hoveredCard = 'linkedin'"
          (mouseleave)="hoveredCard = ''"
          aria-label="LinkedIn">
          <div class="platform-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </div>
          <h2 class="platform-name">LinkedIn</h2>
          <p class="platform-description">Professional network and connections</p>
        </a>

        <a 
          href="https://codechef.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="platform-card"
          [class.hovered]="hoveredCard === 'codechef'"
          (mouseenter)="hoveredCard = 'codechef'"
          (mouseleave)="hoveredCard = ''"
          aria-label="CodeChef">
          <div class="platform-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.93s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
            </svg>
          </div>
          <h2 class="platform-name">CodeChef</h2>
          <p class="platform-description">Competitive programming platform</p>
        </a>

        <a 
          href="https://hackerrank.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="platform-card"
          [class.hovered]="hoveredCard === 'hackerrank'"
          (mouseenter)="hoveredCard = 'hackerrank'"
          (mouseleave)="hoveredCard = ''"
          aria-label="HackerRank">
          <div class="platform-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm-5 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm10 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zM7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm10 0c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zM7 16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm10 0c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/>
            </svg>
          </div>
          <h2 class="platform-name">HackerRank</h2>
          <p class="platform-description">Coding challenges and skills</p>
        </a>

        <a 
          href="https://tryhackme.com/p/kishore1204" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="platform-card"
          [class.hovered]="hoveredCard === 'tryhackme'"
          (mouseenter)="hoveredCard = 'tryhackme'"
          (mouseleave)="hoveredCard = ''"
          aria-label="TryHackMe">
          <div class="platform-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h2 class="platform-name">TryHackMe</h2>
          <p class="platform-description">Cybersecurity learning platform</p>
        </a>
      </div>
      <button class="return-home-button" 
              (click)="goHome()" 
              (mouseenter)="onButtonHover()"
              (mouseleave)="onButtonLeave()"
              [class.animated]="buttonHovered"
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
export class MyWorldComponent {
  hoveredCard = '';
  resumeHovered = false;
  buttonHovered = false;

  constructor(private router: Router) {}
  
  goHome() {
    this.router.navigate(['/']);
  }

  onResumeHover() {
    this.resumeHovered = true;
  }

  onResumeLeave() {
    this.resumeHovered = false;
  }

  async onResumeDownload(event: Event) {
    event.preventDefault();
    
    try {
      const resumeUrl = '/assets/resume.pdf';
      const response = await fetch(resumeUrl);
      
      if (!response.ok) {
        throw new Error('File not found');
      }
      
      const contentLength = response.headers.get('content-length');
      if (contentLength && parseInt(contentLength) === 0) {
        alert('Resume file is empty (0 bytes)!\n\nPlease replace src/assets/resume.pdf with a valid PDF file.');
        return;
      }
      
      // Convert to blob
      const blob = await response.blob();
      
      if (blob.size === 0) {
        alert('Resume file is empty!\n\nPlease replace src/assets/resume.pdf with a valid PDF file.');
        return;
      }
      
      // Create download
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Kishore_Vaddi_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }, 100);
      
      console.log('Resume downloaded successfully');
    } catch (error) {
      console.error('Download error:', error);
      alert('Unable to download resume.\n\nPlease ensure:\n1. resume.pdf is in src/assets folder\n2. File is a valid, non-empty PDF\n3. Restart Angular dev server after adding the file');
    }
  }

  viewResume() {
    // Try to open resume in new tab
    const resumeUrl = '/assets/resume.pdf';
    
    // First check if file exists and has content
    fetch(resumeUrl, { method: 'HEAD' })
      .then(response => {
        const contentLength = response.headers.get('content-length');
        
        if (response.ok && contentLength && parseInt(contentLength) > 0) {
          // File exists and has content, open it
          window.open(resumeUrl, '_blank');
        } else {
          // File is empty or doesn't exist
          alert('Resume file is empty or not found!\n\nPlease:\n1. Place a valid PDF file at: src/assets/resume.pdf\n2. Make sure the file is not empty (0 bytes)\n3. Restart the Angular dev server after adding the file\n\nCurrent file size: ' + (contentLength || '0') + ' bytes');
        }
      })
      .catch(error => {
        console.error('Error checking resume:', error);
        alert('Unable to access resume file.\n\nPlease ensure:\n1. resume.pdf is in src/assets folder\n2. File is a valid, non-empty PDF\n3. Angular dev server is running\n4. Restart the server after adding the file');
      });
  }

  onButtonHover() {
    this.buttonHovered = true;
  }

  onButtonLeave() {
    this.buttonHovered = false;
  }
}

