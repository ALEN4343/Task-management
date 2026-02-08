import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../services/task';

@Pipe({
  name: 'taskFilter',
  standalone: true   // 🔴 THIS IS THE KEY LINE
})
export class TaskFilterPipe implements PipeTransform {
  transform(tasks: Task[] | null, status: string): Task[] {
    if (!tasks) return [];
    return tasks.filter(task => task.status === status);
  }
}
