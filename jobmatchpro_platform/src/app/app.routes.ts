import { Routes } from '@angular/router';
import { MainContainerComponent } from './main-container/main-container.component';

export const routes: Routes = [
  {
    path: '',
    component: MainContainerComponent,
    children: [
      // Placeholder for future modules/features
      { path: '', loadComponent: () => import('./job-list/job-list.component').then(m => m.JobListComponent) },
      { path: 'profile', loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent) }, // Not yet implemented
      { path: 'skills', loadComponent: () => import('./recommended-skills/recommended-skills.component').then(m => m.RecommendedSkillsComponent) }
      // Add routes for admin/dashboard/applications etc.
    ]
  }
];
