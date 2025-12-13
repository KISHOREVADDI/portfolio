import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { MyWorldComponent } from './my-world/my-world.component';
import { ContactComponent } from './contact/contact.component';
import { KishoreverseComponent } from './kishoreverse/kishoreverse.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'my-world',
    component: MyWorldComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'kishoreverse',
    component: KishoreverseComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

