import { Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list';
import { TaskFormComponent } from './components/task-form/task-form';
import { TaskDetailComponent } from './components/task-detail/task-detail';

export const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'add', component: TaskFormComponent },
  { path: 'task/:id', component: TaskDetailComponent }
];
