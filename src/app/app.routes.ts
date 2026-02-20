import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { TaskListComponent } from './components/task-list/task-list';
import { TaskFormComponent } from './components/task-form/task-form';
import { TaskDetailComponent } from './components/task-detail/task-detail';
import { CompletedTasksComponent } from './components/completed-tasks/completed-tasks';
import { LoginComponent } from './components/login/login';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: '', component: TaskListComponent, canActivate: [authGuard] },
  { path: 'add-task', component: TaskFormComponent, canActivate: [authGuard] },
  { path: 'completed', component: CompletedTasksComponent, canActivate: [authGuard] },
  { path: 'task/:id', component: TaskDetailComponent, canActivate: [authGuard] },

  { path: '**', redirectTo: 'login' }
];
