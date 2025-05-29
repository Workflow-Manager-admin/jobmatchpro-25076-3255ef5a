import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  standalone: true,
  imports: [FormsModule]
})
/**
 * Prominent search bar for job and skill search.
 */
export class SearchBarComponent {
  searchValue = '';
  @Output() search = new EventEmitter<string>();
  
  // PUBLIC_INTERFACE
  onSearch() {
    if (this.searchValue.trim()) {
      this.search.emit(this.searchValue.trim());
    }
  }
}
