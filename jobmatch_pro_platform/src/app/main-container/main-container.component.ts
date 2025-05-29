import { Component } from '@angular/core';

import { JobSearchFiltersComponent } from '../job-search-filters/job-search-filters.component';
import { JobMatchingListComponent } from '../job-matching-list/job-matching-list.component';
import { SkillRecommendationsComponent } from '../skill-recommendations/skill-recommendations.component';
import { GlobalNotificationComponent } from '../global-notification/global-notification.component';
import { ProfileManagementModalComponent } from '../profile-management-modal/profile-management-modal.component';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css'],
  standalone: true,
  imports: [
    JobSearchFiltersComponent,
    JobMatchingListComponent,
    SkillRecommendationsComponent,
    GlobalNotificationComponent,
    ProfileManagementModalComponent
  ]
})
/**
 * MainContainerComponent
 * Serves as the dashboard container and main orchestrator for JobMatchPro.
 * Initializes layout, manages high-level sections, and scaffolds integration points for core features.
 */
export class MainContainerComponent { }
