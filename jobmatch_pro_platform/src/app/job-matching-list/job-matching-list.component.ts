import { Component } from '@angular/core';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-job-matching-list',
  template: `
  <div class="jobs-list-placeholder">
    <!-- Placeholder for matched jobs -->
    <div class="job-card" *ngFor="let job of jobs">
      <div>
        <strong>{{job.title}}</strong>
        <span class="company">@<span>{{job.company}}</span></span>
      </div>
      <div class="desc">{{job.description}}</div>
      <button class="apply-btn" [disabled]="true">Apply</button>
    </div>
  </div>
  `,
  styles: [`
    .jobs-list-placeholder {
      display: flex; flex-direction: column; gap: 1.1em;
    }
    .job-card {
      background: #f7fafc;
      border-radius: 0.7rem;
      box-shadow: 0 2px 7px #2c3e5016;
      padding: 1rem 1.3rem;
      display: flex;
      flex-direction: column;
      gap: 0.3em;
    }
    .job-card strong { color: #2c3e50 }
    .company { color: #27AE60; margin-left: 0.5rem; }
    .desc { color: #333; font-size: 0.96rem; }
    .apply-btn {
      margin-top: 0.5em; background: #27ae60; color: #fff;
      border-radius: 0.4em; border: none;
      padding: 0.35em 1.2em; font-weight: 600; cursor: not-allowed;
      opacity: 0.5;
    }
  `],
  standalone: true
})
export class JobMatchingListComponent {
  jobs = [
    { title: 'Frontend Developer', company: 'Innovatech', description: 'Work with Angular and Typescript to create beautiful UIs.' },
    { title: 'Data Scientist', company: 'SmartData', description: 'Analyze data to drive insights and recommendations.' }
  ];
}
