import { Component } from '@angular/core';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
  standalone: true
})
/**
 * Displays matched jobs list.
 */
export class JobListComponent {
  jobs = [
    {
      title: 'Frontend Developer',
      company: 'TechWorks',
      location: 'Remote',
      salary: '$90,000',
      match: 92,
      applied: false,
    },
    {
      title: 'Full Stack Engineer',
      company: 'Innovate',
      location: 'San Francisco, CA',
      salary: '$120,000',
      match: 87,
      applied: true,
    },
    {
      title: 'UX Designer',
      company: 'DesignPath',
      location: 'Austin, TX',
      salary: '$80,000',
      match: 81,
      applied: false,
    }
  ];
}
