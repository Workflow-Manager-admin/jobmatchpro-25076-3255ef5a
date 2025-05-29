import { Component } from '@angular/core';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-skill-recommendations',
  template: `
    <ul class="skills-list">
      <li *ngFor="let skill of recommendations">
        <span class="skill-dot"></span>
        {{skill}}
      </li>
    </ul>
  `,
  styles: [`
    .skills-list {
      list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.7em;
    }
    .skills-list li {
      display: flex; align-items: center; gap: 0.7em;
      background: #fff;
      border-radius: 0.45em;
      font-size: 1rem;
      color: #222;
      padding: 0.5em 0.7em;
      box-shadow: 0 1px 4px #2c3e5010;
      font-weight: 500;
    }
    .skill-dot {
      width: 0.85em; height: 0.85em;
      border-radius: 50%; background: #27AE60; display: inline-block;
    }
  `],
  standalone: true
})
export class SkillRecommendationsComponent {
  recommendations = [
    'Angular Best Practices', 'TypeScript', 'RxJS', 'Unit Testing', 'UI/UX Fundamentals'
  ];
}
