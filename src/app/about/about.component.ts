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
        <p>Welcome to my digital space. I'm Kishore, a developer and designer passionate about creating meaningful digital experiences.</p>
        <p>With a focus on clean code and intentional design, I bring ideas to life through technology. Every project is an opportunity to craft something that matters.</p>
        <p>When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or thinking about the next big thing.</p>
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
    { name: 'Angular', level: 90, icon: '⚡', delay: '0s' },
    { name: 'TypeScript', level: 85, icon: '📘', delay: '0.1s' },
    { name: 'JavaScript', level: 90, icon: '🟨', delay: '0.2s' },
    { name: 'HTML/CSS', level: 95, icon: '🎨', delay: '0.3s' },
    { name: 'Node.js', level: 80, icon: '🟢', delay: '0.4s' },
    { name: 'Python', level: 85, icon: '🐍', delay: '0.5s' },
    { name: 'Cybersecurity', level: 75, icon: '🔒', delay: '0.6s' },
    { name: 'Git/GitHub', level: 90, icon: '📦', delay: '0.7s' },
    { name: 'MongoDB', level: 75, icon: '🍃', delay: '0.8s' },
    { name: 'React', level: 70, icon: '⚛️', delay: '0.9s' },
    { name: 'Docker', level: 65, icon: '🐳', delay: '1s' },
    { name: 'AWS', level: 70, icon: '☁️', delay: '1.1s' }
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


