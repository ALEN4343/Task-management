import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { TaskListComponent } from './components/task-list/task-list';
import { TaskFormComponent } from './components/task-form/task-form';
import { TaskDetailComponent } from './components/task-detail/task-detail';
import { CompletedTasksComponent } from './components/completed-tasks/completed-tasks';

export const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'add-task', component: TaskFormComponent },
  { path: 'completed', component: CompletedTasksComponent },
  { path: 'task/:id', component: TaskDetailComponent }
];
