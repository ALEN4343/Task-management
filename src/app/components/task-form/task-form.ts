import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.html'
})
export class TaskFormComponent {
  title = '';
  description = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    const task: Task = {
      id: Date.now(),
      title: this.title,
      description: this.description,
      status: 'Pending',
      progress: 0
    };

    this.taskService.addTask(task);

    // reset form
    this.title = '';
    this.description = '';
  }
}