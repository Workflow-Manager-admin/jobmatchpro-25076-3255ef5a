import { Routes } from '@angular/router';
import { MainContainerComponent } from './main-container/main-container.component';

export const routes: Routes = [
  {
    path: '',
    component: MainContainerComponent,
    children: [
      // Example future child routes:
      // { path: 'profile', loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent) }
    ]
  }
];
