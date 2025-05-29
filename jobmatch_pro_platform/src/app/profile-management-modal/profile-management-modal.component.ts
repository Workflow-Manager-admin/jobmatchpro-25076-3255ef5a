import { Component } from '@angular/core';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-profile-management-modal',
  template: `
    <div *ngIf="visible" class="profile-modal">
      <div class="modal-content">
        <h2>Edit Profile</h2>
        <!-- Profile management form placeholder -->
        <button (click)="close()">Close</button>
      </div>
    </div>
  `,
  styles: [`
    .profile-modal {
      position: fixed; left: 0; top: 0; width: 100vw; height: 100vh;
      background: rgba(44,62,80,0.45);
      display: flex; justify-content: center; align-items: center;
      z-index: 1400;
    }
    .modal-content {
      background: #fff; border-radius: 0.6em; min-width: 20rem; box-shadow: 0 4px 16px #2c3e504a;
      padding: 2em 2em 1em 2em;
      display: flex; flex-direction: column; gap: 1em;
      align-items: center;
    }
    .modal-content button {
      background: #2c3e50; color: #fff; border: none; border-radius: 0.35em;
      padding: 0.7em 1.7em; cursor: pointer;
    }
    .modal-content button:hover { background: #222; }
  `],
  standalone: true
})
export class ProfileManagementModalComponent {
  visible = false;
  // PUBLIC_INTERFACE
  open() { this.visible = true; }
  // PUBLIC_INTERFACE
  close() { this.visible = false; }
}
