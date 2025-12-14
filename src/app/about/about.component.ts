import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="page-content">
      <h1 class="page-title">About</h1>
      <div class="page-text">
        <p>A skilled professional with expertise in Java 8, front-end development, and cyber security. Known how to use Burp Suite for security testing and familiar with VS Code and GitHub for basic coding and version control tasks. Committed to advancing a career in technology by leveraging technical skills to enhance software security and development processes.</p>
      </div>

      <div class="resume-info-section">
        <div class="resume-info-card">
          <h3 class="info-section-title">Education</h3>
          <div class="education-item">
            <h4 class="institution-name">Godavari Institute of Engineering and Technology</h4>
            <p class="education-details">Bachelor of Technology in Computer Science & Engineering | 2023 - 2027</p>
            <p class="education-specialization">Specialized in Cyber Security | GPA: 8.1/10</p>
          </div>
          <div class="education-item">
            <h4 class="institution-name">Dr. SRK&KSR Jr. Degree College</h4>
            <p class="education-details">Intermediate (MPC: Mathematics, Physics, Chemistry) | 2021 - 2023</p>
            <p class="education-specialization">Percentage: 82.1%</p>
          </div>
        </div>

        <div class="resume-info-card">
          <h3 class="info-section-title">Contact</h3>
          <div class="contact-info">
            <p><strong>Phone:</strong> +91 901048 5441</p>
            <p><strong>Email:</strong> Kishorevaddi1204&#64;gmail.com</p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/kishore-vaddi" target="_blank" rel="noopener noreferrer">linkedin.com/in/kishore-vaddi</a></p>
          </div>
        </div>

        <div class="resume-info-card">
          <h3 class="info-section-title">Languages</h3>
          <div class="languages-list">
            <span class="language-tag">Telugu (Native)</span>
            <span class="language-tag">English</span>
            <span class="language-tag">Hindi</span>
          </div>
        </div>

        <div class="resume-info-card">
          <h3 class="info-section-title">Hobbies</h3>
          <div class="hobbies-list">
            <span class="hobby-tag">Music and Mood Mixer</span>
            <span class="hobby-tag">Gaming</span>
            <span class="hobby-tag">Exploring</span>
          </div>
        </div>
      </div>

      <div class="skills-section">
        <h2 class="skills-title">Skills & Technologies</h2>
        <div class="skills-grid">
          <div class="skill-card" 
               *ngFor="let skill of skills" 
               [style.animation-delay]="skill.delay"
               (mouseenter)="onSkillHover(skill)"
               (mouseleave)="onSkillLeave()"
               [class.hovered]="hoveredSkill === skill.name">
            <div class="skill-icon">{{ skill.icon }}</div>
            <h3 class="skill-name">{{ skill.name }}</h3>
            <div class="skill-level">
              <div class="skill-bar">
                <div class="skill-progress" [style.width.%]="skill.level"></div>
              </div>
              <span class="skill-percentage">{{ skill.level }}%</span>
            </div>
          </div>
        </div>
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
export class AboutComponent {
  isHovered = false;
  hoveredSkill = '';

  skills = [
    { name: 'Java 8', level: 85, icon: '☕', delay: '0s' },
    { name: 'HTML', level: 90, icon: '📄', delay: '0.1s' },
    { name: 'CSS', level: 90, icon: '🎨', delay: '0.2s' },
    { name: 'BlockChain', level: 70, icon: '⛓️', delay: '0.3s' },
    { name: 'Burp Suite', level: 75, icon: '🔒', delay: '0.4s' },
    { name: 'VS Code', level: 80, icon: '💻', delay: '0.5s' },
    { name: 'GitHub', level: 80, icon: '📦', delay: '0.6s' },
    { name: 'Cyber Security Tools', level: 75, icon: '🛡️', delay: '0.7s' }
  ];

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

  onSkillHover(skill: any) {
    this.hoveredSkill = skill.name;
  }

  onSkillLeave() {
    this.hoveredSkill = '';
  }
}


