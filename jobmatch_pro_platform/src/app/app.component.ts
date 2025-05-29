import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MainContainerComponent } from './main-container/main-container.component';
import { JobSearchFiltersComponent } from './job-search-filters/job-search-filters.component';
import { JobMatchingListComponent } from './job-matching-list/job-matching-list.component';
import { SkillRecommendationsComponent } from './skill-recommendations/skill-recommendations.component';
import { ProfileManagementModalComponent } from './profile-management-modal/profile-management-modal.component';
import { GlobalNotificationComponent } from './global-notification/global-notification.component';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainContainerComponent,
    JobSearchFiltersComponent,
    JobMatchingListComponent,
    SkillRecommendationsComponent,
    ProfileManagementModalComponent,
    GlobalNotificationComponent
  ],
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
