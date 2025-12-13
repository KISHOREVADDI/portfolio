import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <main class="home-container">
      <div class="animated-background">
        <div class="particle" *ngFor="let particle of particles" 
             [style.left.%]="particle.x"
             [style.top.%]="particle.y"
             [style.animation-delay]="particle.delay + 's'"
             [style.animation-duration]="particle.duration + 's'"></div>
      </div>
      
      <div class="home-content" 
           [style.transform]="'translate(' + mouseX + 'px, ' + mouseY + 'px)'"
           [style.transition]="'transform 0.1s ease-out'">
        <h1 class="name animated-text" 
            [class.hovered]="isHovered"
            (mouseenter)="isHovered = true"
            (mouseleave)="isHovered = false">
          <span class="letter" *ngFor="let letter of nameLetters; let i = index"
                [style.animation-delay]="(i * 0.1) + 's'">{{ letter }}</span>
        </h1>
        
        <p class="tagline typing-effect">{{ tagline }}</p>
        
        <div class="interactive-buttons">
          <button class="enter-button" 
                  (click)="enterKishoreverse()"
                  (mouseenter)="onButtonHover($event)"
                  (mouseleave)="onButtonLeave()">
            <span class="button-text">Enter Kishoreverse</span>
            <span class="button-glow"></span>
          </button>
        </div>

        <div class="floating-icons">
          <div class="floating-icon" 
               *ngFor="let icon of floatingIcons; let i = index"
               [style.left.%]="icon.x"
               [style.animation-delay]="icon.delay + 's'"
               [style.animation-duration]="icon.duration + 's'">
            {{ icon.symbol }}
          </div>
        </div>
      </div>
    </main>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnDestroy {
  nameLetters: string[] = [];
  tagline = 'Crafting code with character. Designing impact with Intent.';
  isHovered = false;
  mouseX = 0;
  mouseY = 0;
  particles: any[] = [];
  floatingIcons: any[] = [];

  constructor(private router: Router) {
    this.nameLetters = 'Kishore'.split('');
  }

  ngOnInit() {
    this.createParticles();
    this.createFloatingIcons();
  }

  ngOnDestroy() {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    this.mouseX = (event.clientX - centerX) * 0.02;
    this.mouseY = (event.clientY - centerY) * 0.02;
  }

  createParticles() {
    for (let i = 0; i < 20; i++) {
      this.particles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 10 + Math.random() * 10
      });
    }
  }

  createFloatingIcons() {
    const icons = ['⚡', '💻', '🎨', '🔒', '🚀', '⭐', '💡', '🌐'];
    for (let i = 0; i < 8; i++) {
      this.floatingIcons.push({
        symbol: icons[i],
        x: 10 + (i * 12),
        delay: i * 0.5,
        duration: 8 + Math.random() * 4
      });
    }
  }

  enterKishoreverse() {
    this.router.navigate(['/kishoreverse']);
  }

  onButtonHover(event: MouseEvent) {
    const button = event.currentTarget as HTMLElement;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    button.style.setProperty('--mouse-x', x + 'px');
    button.style.setProperty('--mouse-y', y + 'px');
  }

  onButtonLeave() {
    // Reset if needed
  }
}

