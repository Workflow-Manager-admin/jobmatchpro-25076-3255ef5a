import { Component } from '@angular/core';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css'],
  // Standalone: enables direct usage without additional module file
  standalone: true,
  imports: []
})
/**
 * MainContainerComponent
 * Serves as the dashboard container and main orchestrator for JobMatchPro.
 * Initializes layout, manages high-level sections, and scaffolds integration points for core features.
 */
export class MainContainerComponent { }
