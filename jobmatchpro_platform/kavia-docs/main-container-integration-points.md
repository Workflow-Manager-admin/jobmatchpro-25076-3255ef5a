# Main Container Integration & Extensibility Points (JobMatchPro)

This document serves as a technical reference for developers integrating backend APIs, state management, authentication, notification/error services, and other cross-cutting concerns within the Main Container and relevant core configuration for JobMatchPro.

---
## File Scope

- `src/app/main-container/main-container.component.ts`
- `src/app/app.config.ts`

---

## 1. Backend API Integration Points

### Job Search API Integration
- **Sidebar Filters (`FilterSidebarComponent`)** and **Search Bar (`SearchBarComponent`)** are visual entry points for triggering job search.
- To connect search and filter user actions to a backend API:
  - Replace or extend the `notify()` method in `MainContainerComponent` to invoke job search endpoints, transforming or debouncing events as needed.
  - Provide jobs to the `JobListComponent` via service injection or observable bindings, replacing its current static job array.

### Profile Management API Integration
- **Profile** feature is routed (see `app.routes.ts`) and may use a dedicated component.
- Integrate API calls by:
  - Injecting a user/profile service into the Profile area/component.
  - Optionally, propagate profile changes (e.g., via event emitter or state) up to the Main Container for global notifications or to trigger downstream updates.

### Notifications API Integration
- **GlobalNotificationComponent** is managed by two properties: `notification` and `errorMessage`.
- For real-time or system-wide notifications (e.g., coming from a backend service or WebSocket):
  - Replace manual notification/error assignment in `notify()`/`error()`
  - Inject a notification service that bridges backend events to these state properties.

---

## 2. Planned Global State Management

- The Main Container currently manages notifications and authentication as local variables. For enterprise extensibility:
  - **Migration to State Library (e.g., NgRx):**
    - Replace internal properties (`notification`, `errorMessage`, `isAuthenticated`) with selectors/subscriptions to app-level state.
    - Dispatch actions (e.g., new search, login/logout, notification received) instead of invoking local methods.
  - **Alternative: Service-based State:**
    - Use Angular injectable services with RxJS Subjects/Observables to coordinate state among components, surfacing key state (user info, errors, search results) in Main Container for orchestration.

---

## 3. Authentication & Authorization Hooks

- `isAuthenticated` is currently a boolean, statically set to `false`.
- For integration with authentication providers or platforms:
  - Replace with a property fed by a dedicated auth service.
  - Implement route guards at the Angular routing level as needed in `app.routes.ts`.
  - Use output from the auth service (e.g., current user, role, or token) to control what UI/components render in the Main Container or to protect backend API calls.

---

## 4. Error & Notification Service Integration

- Notification and error display surface in `<app-global-notifications>`.
- For production, integrate with:
  - A centralized notification/error service, optionally connected to backend or logging systems.
  - Update the `error()`/`notify()` methods to consume service streams or async notifications.
  - Ensure errors from API requests or authentication failures surface here for user visibility.

---

## 5. Extensibility Points

- **Child Routes (Dynamic Feature Onboarding):** The `router-outlet` pattern together with the `children` routes in `app.routes.ts` provides a natural extension point for new business domains (e.g., admin dashboard, application tracking, etc.).
- **Component Imports:** All major UI features are imported as standalone components, making them replaceable with alternate implementations as business requirements evolve.
- **Provider Array in `app.config.ts`:** The main configuration file currently wires the router and client hydration. To extend:
  - Register custom global interceptors (HTTP, Error, or Auth).
  - Register root-level feature/services such as Analytics, API Gateways, or Feature Flags here.

---

## 6. Example: Future Integration Patterns

- Replace:
  ```ts
  public isAuthenticated = false; // Future: integrate with real auth service
  ```
  with:
  ```ts
  constructor(private authService: AuthService) {}
  public isAuthenticated = this.authService.isAuthenticated$;
  ```
- Replace:
  ```ts
  notify(msg: string) { this.notification = msg; /* ... */ }
  ```
  with:
  ```ts
  constructor(private notificationService: NotificationService) {}
  ngOnInit() {
    this.notificationService.notifications$.subscribe(msg => this.notification = msg);
  }
  ```
- For API triggers (e.g., job search from search bar):
  - Listen to search/filter events and dispatch API calls using a jobs service.
  - E.g., in the SearchBar output handler:
    ```ts
    onSearch(query: string) {
      this.jobsService.searchJobs(query).subscribe(results => {
        // provide results to JobListComponent, handle errors, etc.
      });
    }
    ```

---

## 7. General Guidance

- When integrating new backend endpoints, injectable Angular services should be the first choice for API calls and side effects.
- Use observable streams for cross-component coordination—never communicate via manual DOM events or shared mutable state.
- Route-level feature separation is strongly encouraged. Use Angular’s lazy-loading and guards to maintain security and modularity.

---

## Summary

The Main Container and `app.config.ts` are architected for clean integration of backend APIs, cross-cutting services, and global state. All major platform evolutions—across authentication, notification, state, and extensibility—should leverage these documented hooks and patterns to maintain system coherence and developer velocity.

---
**Sources:**
- `src/app/main-container/main-container.component.ts`
- `src/app/app.config.ts`
# Main Container Integration & Extensibility Points (JobMatchPro)

This document serves as a technical reference for developers integrating backend APIs, state management, authentication, notification/error services, and other cross-cutting concerns within the Main Container and relevant core configuration for JobMatchPro.

---
## File Scope

- `src/app/main-container/main-container.component.ts`
- `src/app/app.config.ts`

---

## 1. Backend API Integration Points

### Job Search API Integration
- **Sidebar Filters (`FilterSidebarComponent`)** and **Search Bar (`SearchBarComponent`)** are visual entry points for triggering job search.
- To connect search and filter user actions to a backend API:
  - Replace or extend the `notify()` method in `MainContainerComponent` to invoke job search endpoints, transforming or debouncing events as needed.
  - Provide jobs to the `JobListComponent` via service injection or observable bindings, replacing its current static job array.

### Profile Management API Integration
- **Profile** feature is routed (see `app.routes.ts`) and may use a dedicated component.
- Integrate API calls by:
  - Injecting a user/profile service into the Profile area/component.
  - Optionally, propagate profile changes (e.g., via event emitter or state) up to the Main Container for global notifications or to trigger downstream updates.

### Notifications API Integration
- **GlobalNotificationComponent** is managed by two properties: `notification` and `errorMessage`.
- For real-time or system-wide notifications (e.g., coming from a backend service or WebSocket):
  - Replace manual notification/error assignment in `notify()`/`error()`
  - Inject a notification service that bridges backend events to these state properties.

---

## 2. Planned Global State Management

- The Main Container currently manages notifications and authentication as local variables. For enterprise extensibility:
  - **Migration to State Library (e.g., NgRx):**
    - Replace internal properties (`notification`, `errorMessage`, `isAuthenticated`) with selectors/subscriptions to app-level state.
    - Dispatch actions (e.g., new search, login/logout, notification received) instead of invoking local methods.
  - **Alternative: Service-based State:**
    - Use Angular injectable services with RxJS Subjects/Observables to coordinate state among components, surfacing key state (user info, errors, search results) in Main Container for orchestration.

---

## 3. Authentication & Authorization Hooks

- `isAuthenticated` is currently a boolean, statically set to `false`.
- For integration with authentication providers or platforms:
  - Replace with a property fed by a dedicated auth service.
  - Implement route guards at the Angular routing level as needed in `app.routes.ts`.
  - Use output from the auth service (e.g., current user, role, or token) to control what UI/components render in the Main Container or to protect backend API calls.

---

## 4. Error & Notification Service Integration

- Notification and error display surface in `<app-global-notifications>`.
- For production, integrate with:
  - A centralized notification/error service, optionally connected to backend or logging systems.
  - Update the `error()`/`notify()` methods to consume service streams or async notifications.
  - Ensure errors from API requests or authentication failures surface here for user visibility.

---

## 5. Extensibility Points

- **Child Routes (Dynamic Feature Onboarding):** The `router-outlet` pattern together with the `children` routes in `app.routes.ts` provides a natural extension point for new business domains (e.g., admin dashboard, application tracking, etc.).
- **Component Imports:** All major UI features are imported as standalone components, making them replaceable with alternate implementations as business requirements evolve.
- **Provider Array in `app.config.ts`:** The main configuration file currently wires the router and client hydration. To extend:
  - Register custom global interceptors (HTTP, Error, or Auth).
  - Register root-level feature/services such as Analytics, API Gateways, or Feature Flags here.

---

## 6. Example: Future Integration Patterns

- Replace:
  ```ts
  public isAuthenticated = false; // Future: integrate with real auth service
  ```
  with:
  ```ts
  constructor(private authService: AuthService) {}
  public isAuthenticated = this.authService.isAuthenticated$;
  ```
- Replace:
  ```ts
  notify(msg: string) { this.notification = msg; /* ... */ }
  ```
  with:
  ```ts
  constructor(private notificationService: NotificationService) {}
  ngOnInit() {
    this.notificationService.notifications$.subscribe(msg => this.notification = msg);
  }
  ```
- For API triggers (e.g., job search from search bar):
  - Listen to search/filter events and dispatch API calls using a jobs service.
  - E.g., in the SearchBar output handler:
    ```ts
    onSearch(query: string) {
      this.jobsService.searchJobs(query).subscribe(results => {
        // provide results to JobListComponent, handle errors, etc.
      });
    }
    ```

---

## 7. General Guidance

- When integrating new backend endpoints, injectable Angular services should be the first choice for API calls and side effects.
- Use observable streams for cross-component coordination—never communicate via manual DOM events or shared mutable state.
- Route-level feature separation is strongly encouraged. Use Angular’s lazy-loading and guards to maintain security and modularity.

---

## Summary

The Main Container and `app.config.ts` are architected for clean integration of backend APIs, cross-cutting services, and global state. All major platform evolutions—across authentication, notification, state, and extensibility—should leverage these documented hooks and patterns to maintain system coherence and developer velocity.

---
**Sources:**
- `src/app/main-container/main-container.component.ts`
- `src/app/app.config.ts`
