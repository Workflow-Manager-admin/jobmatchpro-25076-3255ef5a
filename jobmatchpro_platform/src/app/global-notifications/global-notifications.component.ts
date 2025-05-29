import { Component, Input } from '@angular/core';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-global-notifications',
  templateUrl: './global-notifications.component.html',
  styleUrls: ['./global-notifications.component.css'],
  standalone: true
})
/**
 * Handles global notifications and error banners at the top of the UI.
 */
export class GlobalNotificationsComponent {
  @Input() notification: string | null = null;
  @Input() errorMessage: string | null = null;
}
