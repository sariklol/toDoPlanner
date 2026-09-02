# ToDoPlanner

## Project Overview

`ToDoPlanner` is a frontend React + TypeScript + Vite project. It currently contains:

- A working Dashboard page with task statistics and a task table
- A sidebar navigation with routes for Dashboard, Calendar, and Plan of Day
- Placeholder pages for Calendar and Plan of Day
- Mock task data in `src/data/mockTasks.ts`

The app is a UI shell in progress. It does not yet include real task persistence, backend integration, or full implementations for Calendar and Plan pages.

## Tech Stack

- React 19
- TypeScript 6
- Vite 8
- Tailwind CSS 4 via `@tailwindcss/vite`
- React Router DOM 7
- ESLint

## Key Files and Components

### Main app flow

- `src/main.tsx`
  - renders the app into `#root`
  - wraps `App` with `BrowserRouter`

- `src/App.tsx`
  - defines routes for `/`, `/calendar`, and `/plan`
  - contains the main layout with `Sidebar`

### Pages

- `src/pages/Dashboard.tsx`
  - implemented
  - renders `StatCard` and `TaskTable`
  - uses mock data from `src/data/mockTasks.ts`

- `src/pages/Calendar.tsx`
  - placeholder only
  - currently displays a simple text string

- `src/pages/PlanOfDay.tsx`
  - placeholder only
  - currently displays a simple text string

### Dashboard UI

- `src/components/dashboard/StatCard.tsx`
  - shows a statistic count and label

- `src/components/dashboard/TaskTable.tsx`
  - displays the list of tasks

- `src/components/dashboard/StatusChart.tsx`
  - chart component for status visualization

### Shared UI

- `src/components/shared/AddTaskModal.tsx`
  - modal UI for adding tasks

- `src/components/shared/StatusBadge.tsx`
  - colored status badges

- `src/components/shared/StatusDropdown.tsx`
  - dropdown for selecting task status

### Layout and navigation

- `src/components/layout/Sidebar.tsx`
  - sidebar navigation menu

- `src/components/layout/Layout.tsx`
  - app layout wrapper (if used elsewhere)

- `src/components/layout/Topbar.tsx`
  - topbar header UI

### Calendar and plan support

- `src/components/calendar/CalendarGrid.tsx`
  - calendar grid UI

- `src/components/calendar/DayTaskPopover.tsx`
  - task popover for a calendar day

- `src/components/plan/TaskListItem.tsx`
  - plan page task list item

- `src/components/plan/StatusFilterTabs.tsx`
  - filter tabs by status

## Data Model

- `src/types/index.ts`
  - `Status = 'Done' | 'In progress' | 'Failed' | 'Postponed'`
  - `Task` contains `id`, `title`, `status`, `date`, `description`

- `src/data/mockTasks.ts`
  - mock tasks used by Dashboard
  - current data is static and hardcoded

## Styling

- `src/index.css`
  - imports Tailwind CSS
  - defines fonts `ExoB` and `ExoR`
  - sets background and custom theme variables

## Run and Build Commands

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Current Project Status

- Dashboard page is implemented and mostly functional
- Calendar page is not implemented
- Plan of Day page is not implemented
- No persistence or backend API exists
- Routing and styling are set up
- Task data is mocked

## Recommended Next Tasks

1. Add centralized task state management using React state or context
2. Replace `src/data/mockTasks.ts` with dynamic task state
3. Implement `Calendar` page with date-based task display
4. Implement `Plan of Day` page with task filters and actions
5. Create task add/edit/delete flows in `AddTaskModal`
6. Add persistence via `localStorage` or backend API
7. Connect UI components like `StatusDropdown`, `StatusFilterTabs`, and `StatusChart` to real data

## Where to Start

Suggested starting files:

- `src/App.tsx`
- `src/pages/Dashboard.tsx`
- `src/pages/Calendar.tsx`
- `src/pages/PlanOfDay.tsx`
- `src/data/mockTasks.ts`
- `src/types/index.ts`
- `src/components/dashboard/TaskTable.tsx`
- `src/components/calendar/CalendarGrid.tsx`
- `src/components/plan/StatusFilterTabs.tsx`

## Notes for an AI Assistant

- This is a Vite React project with TypeScript and Tailwind.
- The main working view is Dashboard.
- Calendar and Plan pages are placeholders.
- Task logic is currently mocked.
- There is no backend or persistence yet.
- The AI should help implement UI, state management, and data flow.
