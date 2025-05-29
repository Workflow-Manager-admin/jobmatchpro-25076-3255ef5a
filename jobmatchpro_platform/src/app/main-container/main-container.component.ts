import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { GlobalNotificationsComponent } from '../global-notifications/global-notifications.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { FilterSidebarComponent } from '../filter-sidebar/filter-sidebar.component';
import { JobListComponent } from '../job-list/job-list.component';
import { RecommendedSkillsComponent } from '../recommended-skills/recommended-skills.component';

// PUBLIC_INTERFACE
@Component({
  selector: 'jobmatchpro-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css'],
  standalone: true,
  imports: [
    RouterOutlet,
    GlobalNotificationsComponent,
    SearchBarComponent,
    FilterSidebarComponent,
    JobListComponent,
    RecommendedSkillsComponent
  ]
})
/**
 * Main container that holds all top-level features and layout for JobMatchPro.
 */
export class MainContainerComponent {
  /** Placeholder for global error notifications */
  public errorMessage: string | null = null;
  /** Placeholder for global notifications */
  public notification: string | null = null;
  /** User authentication state */
  public isAuthenticated = false; // Future: integrate with real auth service

  // PUBLIC_INTERFACE
  /** Trigger a global notification. For demonstration. */
  notify(msg: string) {
    this.notification = msg;
    setTimeout(() => (this.notification = null), 4000);
  }

  // PUBLIC_INTERFACE
  /** Trigger a global error. For demonstration. */
  error(msg: string) {
    this.errorMessage = msg;
    setTimeout(() => (this.errorMessage = null), 4000);
  }
}
