# Dashboard UI Structure & Wiring Summary (JobMatchPro Main Container)

## Overview

The Main Container (`MainContainerComponent`) serves as the visual and orchestration shell for the primary JobMatchPro dashboard. Its HTML template lays out the application's major features in a responsive, modern three-column design, with clear separation between notifications, search, filtering, content display, and skill recommendations.

This summary describes how each visual feature is presented, where it appears in the layout, and how components communicate (via inputs, outputs, route outlets, or direct wiring).

---

## Layout Structure

- **Root Element:**  
  `<div class="main-container">` is the topmost wrapper, applying background/theming and vertical layout.

### 1. Global Notifications  
**Component:** `<app-global-notifications>`
- **Position:** Top of the app, immediately inside the container, above all primary interactive elements.
- **Inputs:**  
  - `[notification]`: Binds the latest notification message.
  - `[errorMessage]`: Binds the latest error message.
- **Function:**  
  Serves as a global message/banner surface. The actual messages are controlled by the Main Container via two public properties (`notification`, `errorMessage`), which are set/timed out by UI logic or triggered by child event handlers.
- **No Outputs:**  
  This component is display-only.

---

### 2. Top Search Bar  
**Component:** `<app-search-bar>`
- **Position:** Below notifications, spanning the width of the dashboard before the main content/flex layout.
- **Outputs:**  
  - `(search)`: Emits a string value when the user initiates a search (via button or Enter key).
- **Main Container Wiring:**  
  The `(search)` output triggers the `notify()` method in `MainContainerComponent`, displaying a transient notification reflecting the user's search term. For production, this would be further wired to backend/job search API calls.
- **Inputs:**  
  None (the search bar is stateless except for user-entered value).

---

### 3. Dashboard Flex Layout  
**Element:** `<div class="dashboard-content">`
- **Grid Role:** Implements a three-column (or responsive stacked) layout for sidebar, main content, and skills section.

#### a. Sidebar: Filters  
**Component:** `<app-filter-sidebar>`
- **Position:** Left column, wrapped in `<aside class="sidebar">`
- **Function:**  
  Contains UI for filtering job search (location, type, salary). Each control is a plain input, select, or button.  
- **Wiring:**  
  Currently, there are no Angular inputs or outputs; the sidebar houses UI widgets only. In future, `(filter)` outputs or two-way bindings could connect this to API interactions or main container state.

#### b. Main Content Area  
**Element:** `<main class="jobs-listing">`
- **Components Contained:**
  - `<router-outlet>`:  
    - **Role:** Dynamic placeholder for routed page content. Depending on application route, will instantiate and display routed feature components such as job list, profile, or skills.
  - `<app-job-list>`:  
    - **Role:** Displays the current list of matched jobs. Rendered by default for immediate feedback. 
    - **Inputs/Outputs:**  
      - In the current template/design, the job list does not receive dynamic data from the main container; it displays an internal static job list (prototype). In a full implementation, jobs would be provided via an @Input or state management service.

#### c. Skills Section  
**Component:** `<app-recommended-skills>`
- **Position:** Right column, wrapped in `<section class="skills-section">`
- **Function:**  
  Displays a set of recommended skills relevant to the user or search context. Chips are rendered for each skill, with a call-to-action link for seeing more suggestions.
- **Wiring:**  
  No inputs, outputs, or dynamic state hookup visible; skills are currently internal to the component.

---

## Inter-component Communication and Routing

- **`notification` and `errorMessage` Properties:**  
  The Main Container itself holds state for displaying global notifications/errors, which are passed to the notifications component as inputs.

- **`notify()` Method:**  
  When a search event is emitted from the search bar, `notify()` on the main container sets the notification state, briefly displaying a message.

- **Route Outlet:**  
  `<router-outlet>` in the main area enables lazy loading and dynamic replacement of the jobs list/main content section, based on the active Angular route. Child components can therefore swap out the main dashboard content without changing the container shell.

---

## Visual Hierarchy (Summary)

```
MainContainerComponent
└─ app-global-notifications [notification][errorMessage]
└─ app-search-bar (search) → notify()
└─ dashboard-content (flex row)
   ├─ sidebar
   │   └─ app-filter-sidebar
   ├─ jobs-listing (main)
   │   ├─ router-outlet
   │   └─ app-job-list
   └─ skills-section
       └─ app-recommended-skills
```

---

## Feature Presentation and Integration Summary

- **Notifications** display at the top and are managed centrally.
- **Search** is global, with user search triggering a notification (and in future, a backend/API call).
- **Sidebar Filters** are presently UI-only, but structurally ready for integration with state or backend triggers.
- **Main Content** loads routed feature pages or the job list by default.
- **Recommended Skills** offer auxiliary guidance, contextual to the user's work/search.

## Future Integration Points

- Sidebar filter actions, job list updating, notifications, errors, and authentication are all architected for easy service or state management wiring.
- The router-outlet permits seamless extensibility for new dashboard pages (e.g., profile, admin), with minimal changes to the shell.

---

**Sources:**  
- `src/app/main-container/main-container.component.html`  
- `src/app/global-notifications/global-notifications.component.html`  
- `src/app/search-bar/search-bar.component.html`  
- `src/app/filter-sidebar/filter-sidebar.component.html`  
- `src/app/job-list/job-list.component.html`  
- `src/app/recommended-skills/recommended-skills.component.html`  
# Dashboard UI Structure & Wiring Summary (JobMatchPro Main Container)

## Overview

The Main Container (`MainContainerComponent`) serves as the visual and orchestration shell for the primary JobMatchPro dashboard. Its HTML template lays out the application's major features in a responsive, modern three-column design, with clear separation between notifications, search, filtering, content display, and skill recommendations.

This summary describes how each visual feature is presented, where it appears in the layout, and how components communicate (via inputs, outputs, route outlets, or direct wiring).

---

## Layout Structure

- **Root Element:**  
  `<div class="main-container">` is the topmost wrapper, applying background/theming and vertical layout.

### 1. Global Notifications  
**Component:** `<app-global-notifications>`
- **Position:** Top of the app, immediately inside the container, above all primary interactive elements.
- **Inputs:**  
  - `[notification]`: Binds the latest notification message.
  - `[errorMessage]`: Binds the latest error message.
- **Function:**  
  Serves as a global message/banner surface. The actual messages are controlled by the Main Container via two public properties (`notification`, `errorMessage`), which are set/timed out by UI logic or triggered by child event handlers.
- **No Outputs:**  
  This component is display-only.

---

### 2. Top Search Bar  
**Component:** `<app-search-bar>`
- **Position:** Below notifications, spanning the width of the dashboard before the main content/flex layout.
- **Outputs:**  
  - `(search)`: Emits a string value when the user initiates a search (via button or Enter key).
- **Main Container Wiring:**  
  The `(search)` output triggers the `notify()` method in `MainContainerComponent`, displaying a transient notification reflecting the user's search term. For production, this would be further wired to backend/job search API calls.
- **Inputs:**  
  None (the search bar is stateless except for user-entered value).

---

### 3. Dashboard Flex Layout  
**Element:** `<div class="dashboard-content">`
- **Grid Role:** Implements a three-column (or responsive stacked) layout for sidebar, main content, and skills section.

#### a. Sidebar: Filters  
**Component:** `<app-filter-sidebar>`
- **Position:** Left column, wrapped in `<aside class="sidebar">`
- **Function:**  
  Contains UI for filtering job search (location, type, salary). Each control is a plain input, select, or button.  
- **Wiring:**  
  Currently, there are no Angular inputs or outputs; the sidebar houses UI widgets only. In future, `(filter)` outputs or two-way bindings could connect this to API interactions or main container state.

#### b. Main Content Area  
**Element:** `<main class="jobs-listing">`
- **Components Contained:**
  - `<router-outlet>`:  
    - **Role:** Dynamic placeholder for routed page content. Depending on application route, will instantiate and display routed feature components such as job list, profile, or skills.
  - `<app-job-list>`:  
    - **Role:** Displays the current list of matched jobs. Rendered by default for immediate feedback. 
    - **Inputs/Outputs:**  
      - In the current template/design, the job list does not receive dynamic data from the main container; it displays an internal static job list (prototype). In a full implementation, jobs would be provided via an @Input or state management service.

#### c. Skills Section  
**Component:** `<app-recommended-skills>`
- **Position:** Right column, wrapped in `<section class="skills-section">`
- **Function:**  
  Displays a set of recommended skills relevant to the user or search context. Chips are rendered for each skill, with a call-to-action link for seeing more suggestions.
- **Wiring:**  
  No inputs, outputs, or dynamic state hookup visible; skills are currently internal to the component.

---

## Inter-component Communication and Routing

- **`notification` and `errorMessage` Properties:**  
  The Main Container itself holds state for displaying global notifications/errors, which are passed to the notifications component as inputs.

- **`notify()` Method:**  
  When a search event is emitted from the search bar, `notify()` on the main container sets the notification state, briefly displaying a message.

- **Route Outlet:**  
  `<router-outlet>` in the main area enables lazy loading and dynamic replacement of the jobs list/main content section, based on the active Angular route. Child components can therefore swap out the main dashboard content without changing the container shell.

---

## Visual Hierarchy (Summary)

```
MainContainerComponent
└─ app-global-notifications [notification][errorMessage]
└─ app-search-bar (search) → notify()
└─ dashboard-content (flex row)
   ├─ sidebar
   │   └─ app-filter-sidebar
   ├─ jobs-listing (main)
   │   ├─ router-outlet
   │   └─ app-job-list
   └─ skills-section
       └─ app-recommended-skills
```

---

## Feature Presentation and Integration Summary

- **Notifications** display at the top and are managed centrally.
- **Search** is global, with user search triggering a notification (and in future, a backend/API call).
- **Sidebar Filters** are presently UI-only, but structurally ready for integration with state or backend triggers.
- **Main Content** loads routed feature pages or the job list by default.
- **Recommended Skills** offer auxiliary guidance, contextual to the user's work/search.

## Future Integration Points

- Sidebar filter actions, job list updating, notifications, errors, and authentication are all architected for easy service or state management wiring.
- The router-outlet permits seamless extensibility for new dashboard pages (e.g., profile, admin), with minimal changes to the shell.

---

**Sources:**  
- `src/app/main-container/main-container.component.html`  
- `src/app/global-notifications/global-notifications.component.html`  
- `src/app/search-bar/search-bar.component.html`  
- `src/app/filter-sidebar/filter-sidebar.component.html`  
- `src/app/job-list/job-list.component.html`  
- `src/app/recommended-skills/recommended-skills.component.html`  
