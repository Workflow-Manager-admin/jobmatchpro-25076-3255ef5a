import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// PUBLIC_INTERFACE
@Component({
  selector: 'app-global-notification',
  template: `
    <div *ngIf="visible" class="notification-banner" aria-live="polite" role="status">
      <!-- Placeholder: notifications will appear here -->
      <span>{{ message }}</span>
    </div>
  `,
  styles: [`
    .notification-banner {
      position: fixed;
      bottom: 1.4rem; left: 50%;
      transform: translateX(-50%);
      background: #27ae60;
      color: #fff;
      min-width: 17rem;
      box-shadow: 0 2px 8px #2c3e5040;
      border-radius: 0.6em;
      padding: 1em 2em;
      font-weight: 500;
      z-index: 1500;
    }
  `],
  standalone: true,
  imports: [CommonModule]
})
export class GlobalNotificationComponent {
  visible = false;
  message = '';
}
