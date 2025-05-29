import { Component } from '@angular/core';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-recommended-skills',
  templateUrl: './recommended-skills.component.html',
  styleUrls: ['./recommended-skills.component.css'],
  standalone: true
})
/**
 * Recommends skills based on user/job context.
 */
export class RecommendedSkillsComponent {
  skills = [
    {name: 'Angular', icon: '🅰️'},
    {name: 'TypeScript', icon: '💻'},
    {name: 'REST APIs', icon: '🔗'},
    {name: 'UI/UX Design', icon: '🎨'},
    {name: 'Agile', icon: '🏃'}
  ];
}
