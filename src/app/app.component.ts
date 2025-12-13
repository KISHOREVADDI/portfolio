import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  template: `
    <nav class="navigation">
      <a routerLink="/about" 
         class="nav-link top-left" 
         [class.active]="activeRoute === '/about'"
         (click)="onNavClick('left', 'top')">About</a>
      <a routerLink="/my-world" 
         class="nav-link top-right" 
         [class.active]="activeRoute === '/my-world'"
         (click)="onNavClick('right', 'top')">My World</a>
      <a routerLink="/projects" 
         class="nav-link bottom-left" 
         [class.active]="activeRoute === '/projects'"
         (click)="onNavClick('left', 'bottom')">Projects</a>
      <a routerLink="/contact" 
         class="nav-link bottom-right" 
         [class.active]="activeRoute === '/contact'"
         (click)="onNavClick('right', 'bottom')">Contact</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  activeRoute = '/';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.activeRoute = event.url;
      });
  }

  onNavClick(direction: string, position: string) {
    // Head animation is handled in HomeComponent
  }
}

