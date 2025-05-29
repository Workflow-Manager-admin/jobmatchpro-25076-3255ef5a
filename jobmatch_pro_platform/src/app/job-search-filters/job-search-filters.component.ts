import { Component } from '@angular/core';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-job-search-filters',
  template: `
  <form class="filter-form">
    <!-- Placeholder for filter controls -->
    <div>
      <label>
        Location:
        <input type="text" name="location" />
      </label>
    </div>
    <div>
      <label>
        Salary Range:
        <input type="text" name="salary" />
      </label>
    </div>
    <div>
      <label>
        Job Type:
        <select>
          <option>Any</option>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Internship</option>
        </select>
      </label>
    </div>
    <button type="submit">Apply Filters</button>
  </form>
  `,
  styles: [`
    .filter-form { display: flex; flex-direction: column; gap: 1rem; }
    .filter-form label { font-weight: 500; }
    .filter-form input, .filter-form select { margin-left: 0.5em; font-size: 1rem; }
    .filter-form button {
      background: #27ae60; color: #fff; border: none; border-radius: 0.4rem;
      padding: 0.4em 1em; cursor: pointer;
    }
    .filter-form button:hover { background: #219150; }
  `],
  standalone: true
})
/**
 * Placeholder, ready to be expanded with custom filter logic/state.
 */
export class JobSearchFiltersComponent {}
